import { Fragment, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface DataListItem {
  term: ReactNode;
  description?: ReactNode;
  emptyLabel?: ReactNode;
}

export interface DataListProps extends HTMLAttributes<HTMLDListElement> {
  items: DataListItem[];
}

export function DataList({ items, className, ...rest }: DataListProps) {
  return (
    <dl className={cx("adoc-dlist", className)} {...rest}>
      {items.map((item, i) => {
        const empty = item.description == null || item.description === "";
        return (
          <Fragment key={i}>
            <dt>{item.term}</dt>
            <dd>
              {empty ? (
                <span className="empty">{item.emptyLabel ?? "— sin datos —"}</span>
              ) : (
                item.description
              )}
            </dd>
          </Fragment>
        );
      })}
    </dl>
  );
}
