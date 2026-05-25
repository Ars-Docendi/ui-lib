import { forwardRef, type InputHTMLAttributes } from "react";
import { cx } from "../../utils/cx";
import { IconCalendar } from "../icons/icons";

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  invalid?: boolean;
  wrapClassName?: string;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(function DatePicker(
  { invalid, className, wrapClassName, ...rest },
  ref,
) {
  return (
    <span className={cx("adoc-date", wrapClassName)}>
      <input
        ref={ref}
        type="date"
        aria-invalid={invalid || rest["aria-invalid"]}
        className={cx("adoc-input", className)}
        {...rest}
      />
      <IconCalendar className="cal-ico" />
    </span>
  );
});
