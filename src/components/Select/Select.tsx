import { forwardRef, type SelectHTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
  wrapClassName?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { invalid, className, wrapClassName, children, ...rest },
  ref,
) {
  return (
    <span className={cx("adoc-select-wrap", wrapClassName)}>
      <select
        ref={ref}
        aria-invalid={invalid || rest["aria-invalid"]}
        className={cx("adoc-select", className)}
        {...rest}
      >
        {children}
      </select>
    </span>
  );
});
