import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "warning";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const sizeClass: Record<ButtonSize, string | null> = {
  sm: "sz-sm",
  md: null,
  lg: "sz-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "secondary",
    size = "md",
    loading = false,
    disabled,
    leadingIcon,
    trailingIcon,
    className,
    children,
    type = "button",
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cx("adoc-btn", `v-${variant}`, sizeClass[size], className)}
      {...rest}
    >
      {loading ? (
        <span className="spin" aria-hidden />
      ) : (
        leadingIcon && <span className="adoc-ico">{leadingIcon}</span>
      )}
      {children}
      {!loading && trailingIcon && <span className="adoc-ico">{trailingIcon}</span>}
    </button>
  );
});
