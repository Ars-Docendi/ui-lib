import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import {
  IconUpload,
  IconCheckCircle,
  IconAlertTriangle,
  IconAlertCircle,
} from "../icons/icons";
import type { AlertSeverity } from "../InlineAlert/InlineAlert";

export type ToastSeverity = AlertSeverity | "default";

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  severity?: ToastSeverity;
  title?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
  closeLabel?: string;
}

const iconBySeverity = {
  default: IconUpload,
  info: IconUpload,
  success: IconCheckCircle,
  warning: IconAlertTriangle,
  danger: IconAlertCircle,
} as const;

const roleBySeverity: Record<ToastSeverity, "alert" | "status"> = {
  default: "status",
  info: "status",
  success: "status",
  warning: "status",
  danger: "alert",
};

export function Toast({
  severity = "default",
  title,
  meta,
  icon,
  onClose,
  closeLabel = "Cerrar",
  children,
  className,
  role,
  ...rest
}: ToastProps) {
  const Icon = iconBySeverity[severity];
  const ariaLive = severity === "danger" ? "assertive" : "polite";
  return (
    <div
      role={role ?? roleBySeverity[severity]}
      aria-live={ariaLive}
      className={cx("adoc-toast", severity !== "default" && severity, className)}
      {...rest}
    >
      <span className="ico">{icon ?? <Icon />}</span>
      <div className="body">
        {title && <b>{title}</b>}
        {children}
        {meta && <div className="meta">{meta}</div>}
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
