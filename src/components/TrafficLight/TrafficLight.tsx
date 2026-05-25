import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";

export type TrafficState = "green" | "yellow" | "red";

export interface TrafficLightProps extends HTMLAttributes<HTMLSpanElement> {
  state: TrafficState;
  label?: ReactNode;
  due?: ReactNode;
}

const defaultLabel: Record<TrafficState, string> = {
  green: "A tiempo",
  yellow: "Próximo a vencer",
  red: "Vencido",
};

export function TrafficLight({
  state,
  label,
  due,
  className,
  ...rest
}: TrafficLightProps) {
  const a11y = typeof label === "string" ? label : defaultLabel[state];
  return (
    <span
      className={cx("adoc-traffic", state, className)}
      role="img"
      aria-label={a11y}
      {...rest}
    >
      <span className="dot" aria-hidden />
      <span>{label ?? defaultLabel[state]}</span>
      {due && <span className="due">{due}</span>}
    </span>
  );
}
