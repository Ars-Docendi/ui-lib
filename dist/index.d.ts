import { ButtonHTMLAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { RefAttributes } from 'react';
import { SelectHTMLAttributes } from 'react';
import { TableHTMLAttributes } from 'react';
import { TdHTMLAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';
import { ThHTMLAttributes } from 'react';

export declare type AlertSeverity = "info" | "success" | "warning" | "danger";

export declare function ApprovalTimeline({ steps, className, ...rest }: ApprovalTimelineProps): JSX.Element;

export declare interface ApprovalTimelineProps extends HTMLAttributes<HTMLDivElement> {
    steps: TimelineStep[];
}

export declare interface AuditEntry {
    id?: string;
    actor: ReactNode;
    initials: string;
    verb: AuditVerb;
    verbLabel?: ReactNode;
    detail?: ReactNode;
    when: ReactNode;
    comment?: ReactNode;
}

export declare function AuditLog({ entries, className, ...rest }: AuditLogProps): JSX.Element;

export declare interface AuditLogProps extends HTMLAttributes<HTMLDivElement> {
    entries: AuditEntry[];
}

export declare type AuditVerb = "create" | "update" | "attach" | "approve" | "return" | "reject";

export declare function Breadcrumbs({ items, separator, className, ...rest }: BreadcrumbsProps): JSX.Element;

export declare interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
    items: CrumbItem[];
    separator?: ReactNode;
}

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}

export declare type ButtonSize = "sm" | "md" | "lg";

export declare type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "warning";

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: ReactNode;
    indeterminate?: boolean;
    labelClassName?: string;
}

export declare interface CrumbItem {
    label: ReactNode;
    href?: string;
}

export declare function DataList({ items, className, ...rest }: DataListProps): JSX.Element;

export declare interface DataListItem {
    term: ReactNode;
    description?: ReactNode;
    emptyLabel?: ReactNode;
}

export declare interface DataListProps extends HTMLAttributes<HTMLDListElement> {
    items: DataListItem[];
}

export declare const DatePicker: ForwardRefExoticComponent<DatePickerProps & RefAttributes<HTMLInputElement>>;

export declare interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    invalid?: boolean;
    wrapClassName?: string;
}

export declare function Drawer({ open, onOpenChange, title, children, footer, side, closeOnEscape, closeOnBackdrop, closeLabel, hideCloseButton, className, "aria-label": ariaLabel, }: DrawerProps): ReactPortal | null;

export declare interface DrawerProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    side?: "right" | "left";
    closeOnEscape?: boolean;
    closeOnBackdrop?: boolean;
    closeLabel?: string;
    hideCloseButton?: boolean;
    className?: string;
    "aria-label"?: string;
}

export declare function Field({ label, hint, error, required, wide, children, className, ...rest }: FieldProps): JSX.Element;

export declare interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    label?: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    wide?: boolean;
    children: ReactElement<{
        id?: string;
        "aria-invalid"?: boolean;
        "aria-describedby"?: string;
    }>;
}

export declare function FileUpload({ files, accept, multiple, disabled, error, title, hint, onFilesAdded, onRemove, className, id, name, }: FileUploadProps): JSX.Element;

export declare interface FileUploadProps {
    files?: UploadedFile[];
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    error?: boolean;
    title?: ReactNode;
    hint?: ReactNode;
    onFilesAdded?: (files: FileList) => void;
    onRemove?: (id: string) => void;
    className?: string;
    id?: string;
    name?: string;
}

export declare type FileUploadStatus = "uploaded" | "uploading" | "error";

export declare function InlineAlert({ severity, title, onClose, closeLabel, children, className, role, ...rest }: InlineAlertProps): JSX.Element;

export declare interface InlineAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    severity?: AlertSeverity;
    title?: ReactNode;
    onClose?: () => void;
    closeLabel?: string;
}

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean;
}

export declare function Modal({ open, onOpenChange, title, children, footer, closeOnEscape, closeOnBackdrop, closeLabel, hideCloseButton, className, "aria-label": ariaLabel, }: ModalProps): ReactPortal | null;

export declare interface ModalProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    closeOnEscape?: boolean;
    closeOnBackdrop?: boolean;
    closeLabel?: string;
    hideCloseButton?: boolean;
    className?: string;
    "aria-label"?: string;
}

export declare function Pagination({ page, pageCount, onChange, siblingCount, meta, previousLabel, nextLabel, className, ...rest }: PaginationProps): JSX.Element;

export declare interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    page: number;
    pageCount: number;
    onChange: (page: number) => void;
    siblingCount?: number;
    meta?: ReactNode;
    previousLabel?: ReactNode;
    nextLabel?: ReactNode;
}

export declare const Radio: ForwardRefExoticComponent<RadioProps & RefAttributes<HTMLInputElement>>;

export declare interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: ReactNode;
    labelClassName?: string;
}

export declare function RoleBadge({ name, initials, role, multi, onSwitchClick, switchLabel, className, ...rest }: RoleBadgeProps): JSX.Element;

export declare interface RoleBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "role"> {
    name: ReactNode;
    initials: string;
    role: ReactNode;
    multi?: boolean;
    onSwitchClick?: () => void;
    switchLabel?: string;
}

export declare function RoleMenu({ heading, options, onSelect, selectedId, checkLabel, className, ...rest }: RoleMenuProps): JSX.Element;

export declare interface RoleMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
    heading?: ReactNode;
    options: RoleOption[];
    onSelect?: (id: string) => void;
    selectedId?: string;
    checkLabel?: string;
}

export declare interface RoleOption {
    id: string;
    name: ReactNode;
    scope?: ReactNode;
    current?: boolean;
    disabled?: boolean;
}

export declare const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLSelectElement>>;

export declare interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    invalid?: boolean;
    wrapClassName?: string;
}

export declare type SortDirection = "asc" | "desc" | null;

export declare function StatusBadge({ kind, label, showIcon, className, ...rest }: StatusBadgeProps): JSX.Element;

export declare interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    kind: StatusKind;
    label?: ReactNode;
    showIcon?: boolean;
}

export declare type StatusKind = "pendiente" | "revision" | "devuelto" | "aprobado" | "rechazado" | "cancelado" | "prioritario";

export declare interface TabItem {
    id: string;
    label: ReactNode;
    count?: number;
    disabled?: boolean;
}

export declare const Table: TableComponent;

declare function TableCell({ numeric, className, children, ...rest }: TableCellProps): JSX.Element;

export declare interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    numeric?: boolean;
}

declare interface TableComponent {
    (props: TableWrapProps): ReactNode;
    Toolbar: typeof TableToolbar;
    Root: typeof TableRoot;
    Head: typeof Thead;
    Body: typeof Tbody;
    Row: typeof TableRow;
    Cell: typeof TableCell;
    HeaderCell: typeof TableHeaderCell;
}

declare function TableHeaderCell({ sort, onSortChange, className, children, ...rest }: TableHeaderCellProps): JSX.Element;

export declare interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
    sort?: SortDirection;
    onSortChange?: () => void;
}

declare function TableRoot({ className, children, ...rest }: TableRootProps): JSX.Element;

export declare interface TableRootProps extends TableHTMLAttributes<HTMLTableElement> {
}

declare function TableRow({ selected, className, children, ...rest }: TableRowProps): JSX.Element;

export declare interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    selected?: boolean;
}

declare function TableToolbar({ left, right, children, className, ...rest }: TableToolbarProps): JSX.Element;

export declare interface TableToolbarProps extends HTMLAttributes<HTMLDivElement> {
    left?: ReactNode;
    right?: ReactNode;
}

export declare interface TableWrapProps extends HTMLAttributes<HTMLDivElement> {
}

export declare function Tabs({ items, value, onChange, className, ...rest }: TabsProps): JSX.Element;

export declare interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    items: TabItem[];
    value: string;
    onChange: (id: string) => void;
    "aria-label"?: string;
}

declare function Tbody({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>): JSX.Element;

export declare const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    invalid?: boolean;
}

declare function Thead({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>): JSX.Element;

export declare type TimelineStatus = "done" | "current" | "pending" | "returned" | "rejected";

export declare interface TimelineStep {
    role: ReactNode;
    name: ReactNode;
    status: TimelineStatus;
    meta?: ReactNode;
    comment?: ReactNode;
    event?: boolean;
}

export declare function Toast({ severity, title, meta, icon, onClose, closeLabel, children, className, role, ...rest }: ToastProps): JSX.Element;

export declare interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    severity?: ToastSeverity;
    title?: ReactNode;
    meta?: ReactNode;
    icon?: ReactNode;
    onClose?: () => void;
    closeLabel?: string;
}

export declare type ToastSeverity = AlertSeverity | "default";

export declare const Toggle: ForwardRefExoticComponent<ToggleProps & RefAttributes<HTMLInputElement>>;

export declare interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: ReactNode;
    labelClassName?: string;
}

export declare function TrafficLight({ state, label, due, className, ...rest }: TrafficLightProps): JSX.Element;

export declare interface TrafficLightProps extends HTMLAttributes<HTMLSpanElement> {
    state: TrafficState;
    label?: ReactNode;
    due?: ReactNode;
}

export declare type TrafficState = "green" | "yellow" | "red";

export declare interface UploadedFile {
    id: string;
    name: string;
    size?: string;
    status?: FileUploadStatus;
    progress?: number;
    error?: ReactNode;
}

export { }
