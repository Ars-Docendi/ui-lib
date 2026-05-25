import { useId, type HTMLAttributes, type ReactElement, type ReactNode, cloneElement } from "react";
import { cx } from "../../utils/cx";

export interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  wide?: boolean;
  children: ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}

export function Field({
  label,
  hint,
  error,
  required,
  wide,
  children,
  className,
  ...rest
}: FieldProps) {
  const fallbackId = useId();
  const controlId = children.props.id ?? fallbackId;
  const hintId = `${controlId}-hint`;
  const errorId = `${controlId}-error`;
  const describedBy =
    [error ? errorId : null, hint && !error ? hintId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const control = cloneElement(children, {
    id: controlId,
    "aria-invalid": error ? true : children.props["aria-invalid"],
    "aria-describedby": describedBy ?? children.props["aria-describedby"],
  });

  return (
    <div className={cx("adoc-field", wide && "wide", className)} {...rest}>
      {label && (
        <label className="adoc-label" htmlFor={controlId}>
          {label}
          {required && <span className="req" aria-hidden>*</span>}
        </label>
      )}
      {control}
      {error ? (
        <div id={errorId} className="adoc-hint error">{error}</div>
      ) : hint ? (
        <div id={hintId} className="adoc-hint">{hint}</div>
      ) : null}
    </div>
  );
}
