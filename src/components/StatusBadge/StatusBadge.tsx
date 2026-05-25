import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import {
  IconClock,
  IconEye,
  IconReturn,
  IconCheck,
  IconX,
  IconCircleSlash,
  IconFlag,
} from "../icons/icons";

export type StatusKind =
  | "pendiente"
  | "revision"
  | "devuelto"
  | "aprobado"
  | "rechazado"
  | "cancelado"
  | "prioritario";

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  kind: StatusKind;
  label?: ReactNode;
  showIcon?: boolean;
}

const meta: Record<StatusKind, { label: string; Icon: typeof IconClock }> = {
  pendiente:   { label: "Pendiente",    Icon: IconClock },
  revision:    { label: "En Revisión",  Icon: IconEye },
  devuelto:    { label: "Devuelto",     Icon: IconReturn },
  aprobado:    { label: "Aprobado",     Icon: IconCheck },
  rechazado:   { label: "Rechazado",    Icon: IconX },
  cancelado:   { label: "Cancelado",    Icon: IconCircleSlash },
  prioritario: { label: "Prioritario",  Icon: IconFlag },
};

export function StatusBadge({
  kind,
  label,
  showIcon = true,
  className,
  ...rest
}: StatusBadgeProps) {
  const { label: defaultLabel, Icon } = meta[kind];
  return (
    <span className={cx("adoc-badge", `s-${kind}`, className)} {...rest}>
      {showIcon && <Icon className="ico" />}
      {label ?? defaultLabel}
    </span>
  );
}
