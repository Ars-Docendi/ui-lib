import type {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";
import { cx } from "../../utils/cx";

export interface TableWrapProps extends HTMLAttributes<HTMLDivElement> {}

function TableWrap({ className, children, ...rest }: TableWrapProps) {
  return (
    <div className={cx("adoc-table-wrap", className)} {...rest}>
      {children}
    </div>
  );
}

export interface TableToolbarProps extends HTMLAttributes<HTMLDivElement> {
  left?: ReactNode;
  right?: ReactNode;
}

function TableToolbar({ left, right, children, className, ...rest }: TableToolbarProps) {
  return (
    <div className={cx("adoc-table-toolbar", className)} {...rest}>
      {children ?? (
        <>
          <div className="lhs">{left}</div>
          <div className="rhs">{right}</div>
        </>
      )}
    </div>
  );
}

export interface TableRootProps extends TableHTMLAttributes<HTMLTableElement> {}

function TableRoot({ className, children, ...rest }: TableRootProps) {
  return (
    <table className={cx("adoc-table", className)} {...rest}>
      {children}
    </table>
  );
}

export type SortDirection = "asc" | "desc" | null;

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  sort?: SortDirection;
  onSortChange?: () => void;
}

function TableHeaderCell({
  sort,
  onSortChange,
  className,
  children,
  ...rest
}: TableHeaderCellProps) {
  const sortable = sort !== undefined;
  const active = sort === "asc" || sort === "desc";
  const ariaSort = sort === "asc" ? "ascending" : sort === "desc" ? "descending" : sortable ? "none" : undefined;
  return (
    <th
      scope="col"
      aria-sort={ariaSort}
      onClick={sortable ? onSortChange : undefined}
      className={cx(sortable && "sort", active && "active", className)}
      {...rest}
    >
      {children}
      {sortable && (
        <span className="arrow" aria-hidden>
          {sort === "asc" ? "▲" : sort === "desc" ? "▼" : "▲"}
        </span>
      )}
    </th>
  );
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

function TableRow({ selected, className, children, ...rest }: TableRowProps) {
  return (
    <tr className={cx(selected && "selected", className)} aria-selected={selected || undefined} {...rest}>
      {children}
    </tr>
  );
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}

function TableCell({ numeric, className, children, ...rest }: TableCellProps) {
  return (
    <td className={cx(numeric && "num", className)} {...rest}>
      {children}
    </td>
  );
}

interface TableComponent {
  (props: TableWrapProps): ReactNode;
  Toolbar: typeof TableToolbar;
  Root: typeof TableRoot;
  Head: typeof Thead;
  Body: typeof Tbody;
  Row: typeof TableRow;
  Cell: typeof TableCell;
  HeaderCell: typeof TableHeaderCell;
}

function Thead({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={className} {...rest} />;
}
function Tbody({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={className} {...rest} />;
}

export const Table = TableWrap as TableComponent;
Table.Toolbar = TableToolbar;
Table.Root = TableRoot;
Table.Head = Thead;
Table.Body = Tbody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.HeaderCell = TableHeaderCell;
