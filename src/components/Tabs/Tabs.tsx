import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface TabItem {
  id: string;
  label: ReactNode;
  count?: number;
  disabled?: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  "aria-label"?: string;
}

export function Tabs({ items, value, onChange, className, ...rest }: TabsProps) {
  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const idx = items.findIndex((i) => i.id === value);
    if (idx === -1) return;
    const step = e.key === "ArrowRight" ? 1 : -1;
    for (let i = 1; i <= items.length; i++) {
      const next = items[(idx + step * i + items.length) % items.length];
      if (!next.disabled) {
        onChange(next.id);
        break;
      }
    }
  };

  return (
    <div role="tablist" className={cx("adoc-tabs", className)} {...rest}>
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={`panel-${item.id}`}
            id={`tab-${item.id}`}
            tabIndex={active ? 0 : -1}
            disabled={item.disabled}
            className={cx(active && "active")}
            onClick={() => onChange(item.id)}
            onKeyDown={handleKey}
          >
            {item.label}
            {item.count != null && <span className="count">{item.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
