import { forwardRef, useEffect, useRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  indeterminate?: boolean;
  labelClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, indeterminate, checked, disabled, className, labelClassName, ...rest },
  forwardedRef,
) {
  const innerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (innerRef.current) innerRef.current.indeterminate = !!indeterminate;
  }, [indeterminate]);

  const setRef = (node: HTMLInputElement | null) => {
    innerRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  return (
    <label
      className={cx(
        "adoc-check",
        checked && !indeterminate && "checked",
        indeterminate && "indeterminate",
        disabled && "disabled",
        labelClassName,
      )}
    >
      <input
        ref={setRef}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className={className}
        {...rest}
      />
      <span className="box" aria-hidden />
      {label != null && <span>{label}</span>}
    </label>
  );
});
