import { useEffect, useId, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cx } from "../../utils/cx";

export interface ModalProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  closeLabel?: string;
  hideCloseButton?: boolean;
  className?: string;
  "aria-label"?: string;
}

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  footer,
  closeOnEscape = true,
  closeOnBackdrop = true,
  closeLabel = "Cerrar",
  hideCloseButton = false,
  className,
  "aria-label": ariaLabel,
}: ModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange?.(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, closeOnEscape, onOpenChange]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  const handleBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnBackdrop) onOpenChange?.(false);
  };

  return createPortal(
    <div className="adoc-modal-stage adoc-ui" onMouseDown={handleBackdrop}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : ariaLabel}
        className={cx("adoc-modal", className)}
      >
        {(title || !hideCloseButton) && (
          <header>
            {title && <h4 id={titleId}>{title}</h4>}
            {!hideCloseButton && (
              <button
                type="button"
                className="close"
                aria-label={closeLabel}
                onClick={() => onOpenChange?.(false)}
              >
                ×
              </button>
            )}
          </header>
        )}
        <div className="body">{children}</div>
        {footer && <footer>{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
}
