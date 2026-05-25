import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";
import { IconCheckSmall, IconReturnSmall, IconXSmall } from "../icons/icons";

export type TimelineStatus =
  | "done"
  | "current"
  | "pending"
  | "returned"
  | "rejected";

export interface TimelineStep {
  role: ReactNode;
  name: ReactNode;
  status: TimelineStatus;
  meta?: ReactNode;
  comment?: ReactNode;
  event?: boolean;
}

export interface ApprovalTimelineProps extends HTMLAttributes<HTMLDivElement> {
  steps: TimelineStep[];
}

function Marker({ status }: { status: TimelineStatus }) {
  if (status === "done") return <IconCheckSmall />;
  if (status === "returned") return <IconReturnSmall />;
  if (status === "rejected") return <IconXSmall />;
  return null;
}

export function ApprovalTimeline({
  steps,
  className,
  ...rest
}: ApprovalTimelineProps) {
  return (
    <div className={cx("adoc-timeline", className)} {...rest}>
      <ol>
        {steps.map((step, i) => (
          <li key={i} className={cx(step.status, step.event && "event")}>
            <span className="marker">
              <Marker status={step.status} />
            </span>
            <div className="step-role">{step.role}</div>
            <div className="step-name">{step.name}</div>
            {step.meta && <div className="step-meta">{step.meta}</div>}
            {step.comment && <div className="step-comment">{step.comment}</div>}
          </li>
        ))}
      </ol>
    </div>
  );
}
