import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  labelClassName?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, checked, disabled, className, labelClassName, ...rest },
  ref,
) {
  return (
    <label
      className={cx(
        "adoc-check",
        "adoc-radio",
        checked && "checked",
        disabled && "disabled",
        labelClassName,
      )}
    >
      <input
        ref={ref}
        type="radio"
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
