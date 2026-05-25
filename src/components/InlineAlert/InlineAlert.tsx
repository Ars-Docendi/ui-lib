import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import {
  IconInfoCircle,
  IconCheckCircle,
  IconAlertTriangle,
  IconAlertCircle,
} from "../icons/icons";

export type AlertSeverity = "info" | "success" | "warning" | "danger";

export interface InlineAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  severity?: AlertSeverity;
  title?: ReactNode;
  onClose?: () => void;
  closeLabel?: string;
}

const iconBySeverity = {
  info: IconInfoCircle,
  success: IconCheckCircle,
  warning: IconAlertTriangle,
  danger: IconAlertCircle,
} as const;

const roleBySeverity: Record<AlertSeverity, "alert" | "status"> = {
  info: "status",
  success: "status",
  warning: "alert",
  danger: "alert",
};

export function InlineAlert({
  severity = "info",
  title,
  onClose,
  closeLabel = "Cerrar",
  children,
  className,
  role,
  ...rest
}: InlineAlertProps) {
  const Icon = iconBySeverity[severity];
  return (
    <div
      role={role ?? roleBySeverity[severity]}
      className={cx("adoc-alert", severity, className)}
      {...rest}
    >
      <Icon className="ico" />
      <div className="body">
        {title && <b>{title}</b>}
        {children}
      </div>
      {onClose ? (
        <button type="button" className="close" aria-label={closeLabel} onClick={onClose}>
          ×
        </button>
      ) : (
        <span />
      )}
    </div>
  );
}
