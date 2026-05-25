import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";

export type AuditVerb =
  | "create"
  | "update"
  | "attach"
  | "approve"
  | "return"
  | "reject";

export interface AuditEntry {
  id?: string;
  actor: ReactNode;
  initials: string;
  verb: AuditVerb;
  verbLabel?: ReactNode;
  detail?: ReactNode;
  when: ReactNode;
  comment?: ReactNode;
}

export interface AuditLogProps extends HTMLAttributes<HTMLDivElement> {
  entries: AuditEntry[];
}

const verbLabels: Record<AuditVerb, string> = {
  create: "creó",
  update: "actualizó",
  attach: "adjuntó",
  approve: "aprobó",
  return: "devolvió",
  reject: "rechazó",
};

export function AuditLog({ entries, className, ...rest }: AuditLogProps) {
  return (
    <div className={cx("adoc-audit", className)} {...rest}>
      {entries.map((e, i) => (
        <div key={e.id ?? i} className="adoc-audit-entry">
          <span className="who" aria-hidden>
            {e.initials}
          </span>
          <div className="what">
            <b>{e.actor}</b>{" "}
            <span className={cx("verb", e.verb)}>
              {e.verbLabel ?? verbLabels[e.verb]}
            </span>{" "}
            {e.detail}
          </div>
          <span className="when">{e.when}</span>
          {e.comment && <div className="comment">{e.comment}</div>}
        </div>
      ))}
    </div>
  );
}
