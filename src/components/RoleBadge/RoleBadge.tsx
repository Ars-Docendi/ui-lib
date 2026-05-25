import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import { IconCaretDown } from "../icons/icons";

export interface RoleBadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, "role"> {
  name: ReactNode;
  initials: string;
  role: ReactNode;
  multi?: boolean;
  onSwitchClick?: () => void;
  switchLabel?: string;
}

export function RoleBadge({
  name,
  initials,
  role,
  multi,
  onSwitchClick,
  switchLabel = "Cambiar de rol",
  className,
  ...rest
}: RoleBadgeProps) {
  return (
    <span className={cx("adoc-role-badge", multi && "multi", className)} {...rest}>
      <span className="avatar" aria-hidden>{initials}</span>
      <span>{name}</span>
      <span className="role">{role}</span>
      {multi ? (
        <button
          type="button"
          className="switch"
          aria-label={switchLabel}
          onClick={onSwitchClick}
        >
          <IconCaretDown />
        </button>
      ) : (
        <IconCaretDown className="caret" aria-hidden />
      )}
    </span>
  );
}

