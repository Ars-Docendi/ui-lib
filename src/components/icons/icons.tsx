import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  fill: "none",
  stroke: "currentColor",
  "aria-hidden": true,
};

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.5} {...base} {...props}>
      <circle cx="8" cy="8" r="6" />
      <path d="M8 5v3l2 1.5" />
    </svg>
  );
}

export function IconEye(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.5} {...base} {...props}>
      <path d="M1.5 8s2.5-4.5 6.5-4.5S14.5 8 14.5 8s-2.5 4.5-6.5 4.5S1.5 8 1.5 8z" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  );
}

export function IconReturn(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.5} {...base} {...props}>
      <path d="M9 4l-4 4 4 4" />
      <path d="M5 8h7" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.7} {...base} {...props}>
      <path d="M3 8.5l3.5 3.5L13 5" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.7} {...base} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function IconCircleSlash(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.5} {...base} {...props}>
      <circle cx="8" cy="8" r="6" />
      <path d="M4 12L12 4" />
    </svg>
  );
}

export function IconFlag(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.5} {...base} {...props}>
      <path d="M3 14V3l8 4-8 4" />
    </svg>
  );
}

/* Larger icons (20×20) for alerts/toasts */

export function IconInfoCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" strokeWidth={1.5} {...base} {...props}>
      <circle cx="10" cy="10" r="8" />
      <path d="M10 9v5M10 6v.5" />
    </svg>
  );
}

export function IconCheckCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" strokeWidth={1.7} {...base} {...props}>
      <circle cx="10" cy="10" r="8" />
      <path d="M6.5 10.5L9 13l4.5-5" />
    </svg>
  );
}

export function IconAlertTriangle(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" strokeWidth={1.5} {...base} {...props}>
      <path d="M10 2l8 14H2L10 2z" />
      <path d="M10 8v4M10 14v.5" />
    </svg>
  );
}

export function IconAlertCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" strokeWidth={1.7} {...base} {...props}>
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6v5M10 14v.5" />
    </svg>
  );
}

export function IconUpload(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" strokeWidth={1.5} {...base} {...props}>
      <path d="M10 2v8M6 6l4-4 4 4M3 14h14" />
    </svg>
  );
}

export function IconFile(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" strokeWidth={1.5} {...base} {...props}>
      <path d="M5 2h7l3 3v13H5z" />
      <path d="M12 2v3h3" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" strokeWidth={1.5} {...base} {...props}>
      <rect x="1.5" y="3" width="11" height="9.5" rx="0.5" />
      <path d="M1.5 6h11M4.5 1.5v3M9.5 1.5v3" />
    </svg>
  );
}

export function IconCaretDown(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" strokeWidth={1.5} {...base} {...props}>
      <path d="M3 5.5L7 9.5l4-4" />
    </svg>
  );
}

/* Timeline markers (12×12 inside 24×24 marker circle) */

export function IconCheckSmall(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={2} {...base} {...props}>
      <path d="M3 8.5l3 3 7-7" />
    </svg>
  );
}

export function IconReturnSmall(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={1.7} {...base} {...props}>
      <path d="M9 4l-4 4 4 4M5 8h7" />
    </svg>
  );
}

export function IconXSmall(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" strokeWidth={2} {...base} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}
