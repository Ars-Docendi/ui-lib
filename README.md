# @ars-docendi/ui

Ars Docendi component library. React 19 + TypeScript, built with Vite in library mode. Around 25 components covering forms, feedback, overlays, navigation, and data display, plus a CSS-variable theme.

For per-component props and examples, see [USAGE.md](./USAGE.md).

## Install

Install from a tarball, git URL, or registry — whatever fits your workflow. `react` and `react-dom` are peer dependencies (`^19.0.0`).

```sh
pnpm add @ars-docendi/ui react react-dom
```

## Quick start

Import both stylesheets once at the entry point of your app, then use components. `theme.css` must come before `components.css` — `components.css` consumes tokens defined in `theme.css`.

```tsx
import "@ars-docendi/ui/theme.css";
import "@ars-docendi/ui/components.css";
import { Button } from "@ars-docendi/ui";

export function App() {
  return (
    <div className="adoc-ui">
      <Button variant="primary">Save</Button>
    </div>
  );
}
```

Apply the `adoc-ui` class to any root element that should pick up the base font, color, and box-sizing reset. Component class names (`adoc-btn`, `adoc-input`, …) are applied by the components themselves; you do not need to write them.

## Theming

The theme is driven by CSS custom properties defined on `:root` in `theme.css`. Override any token by redefining it under your own selector. A dark theme is included and activates when `[data-theme="dark"]` is set on an ancestor element.

```css
:root {
  --color-accent: oklch(0.65 0.14 200);
}

[data-theme="dark"] {
  --color-bg-canvas: #0a0a0a;
}
```

Token groups (see `src/styles/theme.css` for full values):

- **Primitives** — `--neutral-100..900`, `--accent-100..800`, `--success-*`, `--warning-*`, `--danger-*`, `--info-*`
- **Semantic surfaces** — `--color-bg-canvas`, `--color-bg-surface`, `--color-bg-raised`, `--color-bg-sunken`, `--color-bg-inverse`
- **Semantic text** — `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`, `--color-text-disabled`, `--color-text-on-accent`, `--color-text-on-inverse`, `--color-text-link`, `--color-text-danger`
- **Semantic borders** — `--color-border-subtle`, `--color-border-default`, `--color-border-strong`, `--color-border-ink`, `--color-border-focus`, `--color-border-danger`
- **Accent states** — `--color-accent`, `--color-accent-hover`, `--color-accent-pressed`, `--color-accent-subtle`, `--color-accent-on`
- **Status pairs** — `--color-status-{success,warning,danger,info,neutral}-{bg,fg}`
- **Typography** — `--font-sans`, `--font-mono`, `--font-display`; scales `--text-{display,title,heading,subhead,body,body-sm,caption,micro}` each with `-size`, `-lh`, `-weight`; weights `--weight-{regular,medium,semibold}`
- **Spacing** — `--space-0..20` on a 4 px base
- **Radius** — `--radius-{none,xs,sm,pill}`
- **Border widths** — `--border-{hairline,default,emphasis,focus}`
- **Elevation** — `--elev-0..3` (border-driven, no shadows)
- **Motion** — `--motion-{instant,fast,base,slow,slower}`, easings `--ease-{linear,standard,emphasized,enter,exit}`
- **Focus ring** — composite `--focus-ring`
- **Z-index** — `--z-{base,sticky,dropdown,overlay,modal,toast}`

## Components

| Group | Components |
|-------|------------|
| Forms | [Button](./USAGE.md#button), [Field](./USAGE.md#field), [Input](./USAGE.md#input), [Textarea](./USAGE.md#textarea), [Select](./USAGE.md#select), [DatePicker](./USAGE.md#datepicker), [FileUpload](./USAGE.md#fileupload), [Checkbox](./USAGE.md#checkbox), [Radio](./USAGE.md#radio), [Toggle](./USAGE.md#toggle) |
| Feedback & overlays | [StatusBadge](./USAGE.md#statusbadge), [InlineAlert](./USAGE.md#inlinealert), [Toast](./USAGE.md#toast), [Modal](./USAGE.md#modal), [Drawer](./USAGE.md#drawer), [Tabs](./USAGE.md#tabs), [Breadcrumbs](./USAGE.md#breadcrumbs), [Pagination](./USAGE.md#pagination) |
| Data & domain | [Table](./USAGE.md#table), [DataList](./USAGE.md#datalist), [ApprovalTimeline](./USAGE.md#approvaltimeline), [AuditLog](./USAGE.md#auditlog), [TrafficLight](./USAGE.md#trafficlight), [RoleBadge & RoleMenu](./USAGE.md#rolebadge--rolemenu) |

## Scripts

- `pnpm dev` — rebuild the library on change.
- `pnpm build` — type-check and produce `dist/`.
- `pnpm typecheck` — type-check only.
- `pnpm storybook` — run Storybook on http://localhost:6006.
- `pnpm build-storybook` — build the static Storybook site.

## Live examples

Every component with a `*.stories.tsx` file has a live, interactive demo in Storybook:

```sh
pnpm storybook
```
