import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  labelClassName?: string;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { label, checked, disabled, className, labelClassName, ...rest },
  ref,
) {
  return (
    <label
      className={cx(
        "adoc-toggle",
        checked && "on",
        disabled && "disabled",
        labelClassName,
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        className={className}
        {...rest}
      />
      <span className="track" aria-hidden />
      {label != null && <span>{label}</span>}
    </label>
  );
});
