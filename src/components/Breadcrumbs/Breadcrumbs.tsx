import { Fragment, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface CrumbItem {
  label: ReactNode;
  href?: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: CrumbItem[];
  separator?: ReactNode;
}

export function Breadcrumbs({
  items,
  separator = "/",
  className,
  ...rest
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Migas de pan"
      className={cx("adoc-crumbs", className)}
      {...rest}
    >
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <Fragment key={i}>
            {last ? (
              <span className="current" aria-current="page">{item.label}</span>
            ) : item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {!last && <span className="sep" aria-hidden>{separator}</span>}
          </Fragment>
        );
      })}
    </nav>
  );
}
