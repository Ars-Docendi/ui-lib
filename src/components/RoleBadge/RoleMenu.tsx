import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface RoleOption {
  id: string;
  name: ReactNode;
  scope?: ReactNode;
  current?: boolean;
  disabled?: boolean;
}

export interface RoleMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  heading?: ReactNode;
  options: RoleOption[];
  onSelect?: (id: string) => void;
  selectedId?: string;
  checkLabel?: string;
}

export function RoleMenu({
  heading = "Cambiar de rol",
  options,
  onSelect,
  selectedId,
  checkLabel = "Activo",
  className,
  ...rest
}: RoleMenuProps) {
  return (
    <div role="menu" className={cx("adoc-role-menu", className)} {...rest}>
      {heading && <div className="head">{heading}</div>}
      {options.map((opt) => {
        const isCurrent = opt.current ?? opt.id === selectedId;
        return (
          <button
            key={opt.id}
            type="button"
            role="menuitemradio"
            aria-checked={isCurrent}
            disabled={opt.disabled}
            className={cx("opt", isCurrent && "current")}
            onClick={() => onSelect?.(opt.id)}
          >
            <span>
              <span className="who-r">{opt.name}</span>
              {opt.scope && <div className="scope">{opt.scope}</div>}
            </span>
            {isCurrent && <span className="check" aria-label={checkLabel}>✓</span>}
          </button>
        );
      })}
    </div>
  );
}
