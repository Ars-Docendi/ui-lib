import { forwardRef, type InputHTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { invalid, className, type = "text", ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid || rest["aria-invalid"]}
      className={cx("adoc-input", className)}
      {...rest}
    />
  );
});
