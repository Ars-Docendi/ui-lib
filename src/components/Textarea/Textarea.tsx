import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cx } from "../../utils/cx";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, className, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      aria-invalid={invalid || rest["aria-invalid"]}
      className={cx("adoc-textarea", className)}
      {...rest}
    />
  );
});
