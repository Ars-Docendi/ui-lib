import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  siblingCount?: number;
  meta?: ReactNode;
  previousLabel?: ReactNode;
  nextLabel?: ReactNode;
}

function buildPages(page: number, pageCount: number, sibling: number): (number | "…")[] {
  if (pageCount <= 1) return [1];
  const first = 1;
  const last = pageCount;
  const start = Math.max(first + 1, page - sibling);
  const end = Math.min(last - 1, page + sibling);
  const out: (number | "…")[] = [first];
  if (start > first + 1) out.push("…");
  for (let p = start; p <= end; p++) out.push(p);
  if (end < last - 1) out.push("…");
  if (last > first) out.push(last);
  return out;
}

export function Pagination({
  page,
  pageCount,
  onChange,
  siblingCount = 1,
  meta,
  previousLabel = "Anterior",
  nextLabel = "Siguiente",
  className,
  ...rest
}: PaginationProps) {
  const pages = buildPages(page, pageCount, siblingCount);
  const prevDisabled = page <= 1;
  const nextDisabled = page >= pageCount;

  return (
    <nav
      aria-label="Paginación"
      className={cx("adoc-pagination", className)}
      {...rest}
    >
      <button
        type="button"
        className="pg"
        disabled={prevDisabled}
        onClick={() => onChange(Math.max(1, page - 1))}
      >
        {previousLabel}
      </button>
      <div className="pages">
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`e-${i}`} className="pg ellipsis" aria-hidden>…</span>
          ) : (
            <button
              key={p}
              type="button"
              className={cx("pg", p === page && "current")}
              aria-current={p === page ? "page" : undefined}
              onClick={() => onChange(p)}
            >
              {p}
            </button>
          ),
        )}
      </div>
      <button
        type="button"
        className="pg"
        disabled={nextDisabled}
        onClick={() => onChange(Math.min(pageCount, page + 1))}
      >
        {nextLabel}
      </button>
      {meta && <span className="meta">{meta}</span>}
    </nav>
  );
}
