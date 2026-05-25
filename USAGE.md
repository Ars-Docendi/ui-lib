# Component reference

Per-component props, exports, and examples for `@ars-docendi/ui`. For setup, theming, and the components index, see the [README](./README.md). Every example here is adapted from the matching `*.stories.tsx` file under `src/components/` — run `pnpm storybook` to try them live.

## Conventions

- **Field wrapping.** Form controls (`Input`, `Textarea`, `Select`, `DatePicker`, and optionally `Checkbox`/`Radio`/`Toggle`) are designed to live inside `<Field>`, which provides the label, hint, error text, and the matching ARIA wiring. They also work standalone.
- **Refs.** Components that forward refs are noted under **Notes**. Refs always point at the underlying DOM element.
- **Controlled vs uncontrolled.** Where a component is controlled-only (`Modal`, `Drawer`, `Tabs`, `Pagination`), the required state props are flagged in the props table.
- **Default labels.** Several components ship Spanish default labels (`"Cerrar"`, `"Anterior"`, `"Siguiente"`, `"Migas de pan"`, `"— sin datos —"`, the StatusBadge / TrafficLight names). Override them via the relevant prop if you need a different language.
- **Native DOM props.** Where a component extends a native interface (e.g. `ButtonHTMLAttributes<HTMLButtonElement>`), all standard DOM attributes (`onClick`, `disabled`, `aria-*`, `data-*`, `style`, `className`, …) are supported and not re-listed in the props table.

## Contents

**Forms** — [Button](#button) · [Field](#field) · [Input](#input) · [Textarea](#textarea) · [Select](#select) · [DatePicker](#datepicker) · [FileUpload](#fileupload) · [Checkbox](#checkbox) · [Radio](#radio) · [Toggle](#toggle)

**Feedback & overlays** — [StatusBadge](#statusbadge) · [InlineAlert](#inlinealert) · [Toast](#toast) · [Modal](#modal) · [Drawer](#drawer) · [Tabs](#tabs) · [Breadcrumbs](#breadcrumbs) · [Pagination](#pagination)

**Data & domain** — [Table](#table) · [DataList](#datalist) · [ApprovalTimeline](#approvaltimeline) · [AuditLog](#auditlog) · [TrafficLight](#trafficlight) · [RoleBadge & RoleMenu](#rolebadge--rolemenu)

---

# Forms

## Button

Action trigger with variants for emphasis and intent.

**Exports:** `Button`, `ButtonProps`, `ButtonVariant`, `ButtonSize`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `variant` | `"primary" \| "secondary" \| "ghost" \| "destructive" \| "warning"` | `"secondary"` | Visual emphasis. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | |
| `loading` | `boolean` | `false` | Disables the button and replaces icons with a spinner. |
| `leadingIcon` | `ReactNode` | — | Rendered before children. Hidden while `loading`. |
| `trailingIcon` | `ReactNode` | — | Rendered after children. Hidden while `loading`. |

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

**Example**

```tsx
<Button variant="primary">Save</Button>
<Button variant="destructive" loading>Saving…</Button>
<Button variant="secondary" leadingIcon={<MyIcon />}>Approve</Button>
```

**Notes**

- `forwardRef` to `HTMLButtonElement`.
- Default `type="button"` (override with `type="submit"` inside forms).

---

## Field

Label / hint / error wrapper for a single form control. Generates an `id` if the child doesn't have one and wires `aria-invalid` and `aria-describedby` automatically.

**Exports:** `Field`, `FieldProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `label` | `ReactNode` | — | Label text. |
| `hint` | `ReactNode` | — | Help text under the control. Hidden if `error` is set. |
| `error` | `ReactNode` | — | Error message. Sets `aria-invalid` on the child. |
| `required` | `boolean` | `false` | Marks the label as required. |
| `wide` | `boolean` | `false` | Stretches the field to full width. |
| `children` | `ReactElement` | — | Exactly one element (input, select, etc.). |

Extends `Omit<HTMLAttributes<HTMLDivElement>, "children">`.

**Example**

```tsx
<Field label="Email" hint="We will never share your email.">
  <Input type="email" />
</Field>

<Field label="Email" error="Invalid email address." required>
  <Input type="email" defaultValue="bad@" />
</Field>
```

**Notes**

- `children` must be a single React element — Field clones it to inject the ID and ARIA props.

---

## Input

Native text input with an `invalid` flag for styling.

**Exports:** `Input`, `InputProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `invalid` | `boolean` | `false` | Sets `aria-invalid` and the error styling. |
| `type` | `string` | `"text"` | |

Extends `InputHTMLAttributes<HTMLInputElement>`.

**Example**

```tsx
<Input placeholder="Type something…" />
<Input type="email" placeholder="you@example.com" />
<Input defaultValue="bad@" invalid />
```

**Notes**

- `forwardRef` to `HTMLInputElement`.
- Pair with `<Field>` for label + error wiring.

---

## Textarea

Native multi-line text input.

**Exports:** `Textarea`, `TextareaProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `invalid` | `boolean` | `false` | Sets `aria-invalid` and the error styling. |

Extends `TextareaHTMLAttributes<HTMLTextAreaElement>`.

**Example**

```tsx
<Textarea rows={4} placeholder="Write your comment…" />
<Textarea rows={4} defaultValue="Too short" invalid />
```

**Notes**

- `forwardRef` to `HTMLTextAreaElement`.

---

## Select

Native `<select>` wrapped in a span that styles the dropdown arrow.

**Exports:** `Select`, `SelectProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `invalid` | `boolean` | `false` | Sets `aria-invalid` and the error styling. |
| `wrapClassName` | `string` | — | Extra classes for the outer span. |
| `children` | `ReactNode` | — | `<option>` elements. |

Extends `SelectHTMLAttributes<HTMLSelectElement>`.

**Example**

```tsx
<Select defaultValue="a">
  <option value="">— Select —</option>
  <option value="a">Apple</option>
  <option value="b">Banana</option>
</Select>
```

**Notes**

- `forwardRef` to `HTMLSelectElement` (the inner `<select>`, not the wrapper).

---

## DatePicker

Native `<input type="date">` with a calendar icon. Type is locked.

**Exports:** `DatePicker`, `DatePickerProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `invalid` | `boolean` | `false` | Sets `aria-invalid` and the error styling. |
| `wrapClassName` | `string` | — | Extra classes for the outer span. |

Extends `Omit<InputHTMLAttributes<HTMLInputElement>, "type">`.

**Example**

```tsx
<DatePicker defaultValue="2026-05-25" />
<DatePicker defaultValue="2026-05-25" invalid />
```

**Notes**

- `forwardRef` to `HTMLInputElement`.

---

## FileUpload

Drag-and-drop dropzone with an attached file list. Stateless — the parent owns the `files` array and uploads.

**Exports:** `FileUpload`, `FileUploadProps`, `UploadedFile`, `FileUploadStatus`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `files` | `UploadedFile[]` | `[]` | Files to render below the dropzone. |
| `accept` | `string` | — | MIME / extension list, e.g. `"image/*,.pdf"`. |
| `multiple` | `boolean` | `false` | Allow multiple files in one selection. |
| `disabled` | `boolean` | `false` | Disables click and drop. |
| `error` | `boolean` | `false` | Red border on the dropzone. |
| `title` | `ReactNode` | `"Hacé clic para subir o arrastrá los archivos"` | Dropzone heading. |
| `hint` | `ReactNode` | — | Secondary text under the title. |
| `onFilesAdded` | `(files: FileList) => void` | — | Fired when files are picked or dropped. |
| `onRemove` | `(id: string) => void` | — | Fired when a file row's × is clicked. Row only shows × if this is provided. |
| `id` | `string` | — | ID on the hidden `<input type="file">`. |
| `name` | `string` | — | Name on the hidden `<input type="file">`. |
| `className` | `string` | — | |

`UploadedFile`:

```ts
interface UploadedFile {
  id: string;
  name: string;
  size?: string;
  status?: "uploaded" | "uploading" | "error";
  progress?: number; // 0–100, shown when status === "uploading"
  error?: ReactNode;
}
```

**Example**

```tsx
<FileUpload
  title="Drop files or click to upload"
  hint="PDF, DOCX, PNG up to 10 MB"
  onFilesAdded={(files) => upload(files)}
/>

<FileUpload
  files={[
    { id: "1", name: "contract.pdf", size: "342 KB", status: "uploaded" },
    { id: "2", name: "scan.png", size: "1.2 MB", status: "uploading", progress: 64 },
    { id: "3", name: "broken.zip", size: "5 MB", status: "error", error: "Unsupported format" },
  ]}
  onRemove={(id) => removeFile(id)}
/>
```

**Notes**

- The default title is in Spanish — override `title` if you need another language.
- Drag-over state is managed internally; nothing to wire.

---

## Checkbox

Checkbox with optional label and indeterminate state.

**Exports:** `Checkbox`, `CheckboxProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `label` | `ReactNode` | — | Label text rendered after the box. |
| `indeterminate` | `boolean` | `false` | Sets the DOM `indeterminate` flag — useful for "select all" rows. |
| `labelClassName` | `string` | — | Extra classes for the `<label>` element. |

Extends `Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">` (`type` is locked to `"checkbox"`).

**Example**

```tsx
<Checkbox label="Accept terms" checked={ok} onChange={(e) => setOk(e.target.checked)} />
<Checkbox label="Select all" indeterminate onChange={selectAll} />
<Checkbox label="Disabled" disabled />
```

**Notes**

- `forwardRef` to the underlying `HTMLInputElement`.

---

## Radio

Radio input with optional label. Group radios by sharing a `name`.

**Exports:** `Radio`, `RadioProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `label` | `ReactNode` | — | Label text rendered after the dot. |
| `labelClassName` | `string` | — | Extra classes for the `<label>`. |

Extends `Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">` (`type` is locked to `"radio"`).

**Example**

```tsx
<Radio name="g" label="Option A" value="a" checked={v === "a"} onChange={() => setV("a")} />
<Radio name="g" label="Option B" value="b" checked={v === "b"} onChange={() => setV("b")} />
```

**Notes**

- `forwardRef` to `HTMLInputElement`.

---

## Toggle

Switch-style on/off control. Semantically a `role="switch"` checkbox.

**Exports:** `Toggle`, `ToggleProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `label` | `ReactNode` | — | Label text rendered after the track. |
| `labelClassName` | `string` | — | Extra classes for the `<label>`. |

Extends `Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">` (renders as a `checkbox` with `role="switch"`).

**Example**

```tsx
<Toggle label="Enable notifications" checked={on} onChange={(e) => setOn(e.target.checked)} />
```

**Notes**

- `forwardRef` to `HTMLInputElement`.

---

# Feedback & overlays

## StatusBadge

Inline pill that names an expediente status. Ships with seven preset kinds, each with its own icon and Spanish default label.

**Exports:** `StatusBadge`, `StatusBadgeProps`, `StatusKind`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `kind` | `"pendiente" \| "revision" \| "devuelto" \| "aprobado" \| "rechazado" \| "cancelado" \| "prioritario"` | — | Required. Drives colour, icon, and default label. |
| `label` | `ReactNode` | (per-kind Spanish name) | Override the visible text. |
| `showIcon` | `boolean` | `true` | Hide the leading icon. |

Extends `HTMLAttributes<HTMLSpanElement>`.

**Example**

```tsx
<StatusBadge kind="aprobado" />
<StatusBadge kind="rechazado" label="Rejected" showIcon={false} />
```

---

## InlineAlert

In-page alert box. ARIA `role` is auto-assigned (`alert` for warning/danger, `status` for info/success).

**Exports:** `InlineAlert`, `InlineAlertProps`, `AlertSeverity`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `severity` | `"info" \| "success" \| "warning" \| "danger"` | `"info"` | |
| `title` | `ReactNode` | — | Bold heading. |
| `onClose` | `() => void` | — | If provided, renders a close button. |
| `closeLabel` | `string` | `"Cerrar"` | ARIA label for the close button. |
| `role` | `"alert" \| "status"` | (auto from severity) | Override only if needed. |

Extends `Omit<HTMLAttributes<HTMLDivElement>, "title">`.

**Example**

```tsx
<InlineAlert severity="info" title="Heads up">
  Your draft was auto-saved.
</InlineAlert>

<InlineAlert severity="warning" title="Watch out" onClose={() => setOpen(false)}>
  This action will be irreversible.
</InlineAlert>
```

---

## Toast

Notification card. Similar to `InlineAlert` but adds a `meta` slot (typically a timestamp) and a custom-icon escape hatch. `aria-live` is `"assertive"` for danger and `"polite"` otherwise.

**Exports:** `Toast`, `ToastProps`, `ToastSeverity`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `severity` | `"default" \| "info" \| "success" \| "warning" \| "danger"` | `"default"` | |
| `title` | `ReactNode` | — | |
| `meta` | `ReactNode` | — | Trailing text (e.g. "2 minutes ago"). |
| `icon` | `ReactNode` | (severity icon) | Replace the leading icon. |
| `onClose` | `() => void` | — | Renders a close button when provided. |
| `closeLabel` | `string` | `"Cerrar"` | |
| `role` | `"alert" \| "status"` | (auto from severity) | |

Extends `Omit<HTMLAttributes<HTMLDivElement>, "title">`.

**Example**

```tsx
<Toast severity="success" title="Approval sent" meta="2 minutes ago">
  Expediente EXP-2026-0042
</Toast>
```

**Notes**

- This component is the visual card only. Stacking, auto-dismiss, and queueing are the consumer's responsibility — there is no built-in `toast()` function or provider.

---

## Modal

Centered modal dialog. Controlled. Portalled to `document.body` and locks body scroll while open.

**Exports:** `Modal`, `ModalProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `open` | `boolean` | — | Required. |
| `onOpenChange` | `(open: boolean) => void` | — | Called when the user closes via escape, backdrop, or the × button. |
| `title` | `ReactNode` | — | Header text. |
| `footer` | `ReactNode` | — | Footer row, typically action buttons. |
| `closeOnEscape` | `boolean` | `true` | |
| `closeOnBackdrop` | `boolean` | `true` | |
| `closeLabel` | `string` | `"Cerrar"` | ARIA label for the × button. |
| `hideCloseButton` | `boolean` | `false` | |
| `aria-label` | `string` | — | Required if `title` is not provided. |
| `className` | `string` | — | |

**Example**

```tsx
const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open modal</Button>
  <Modal
    open={open}
    onOpenChange={setOpen}
    title="Confirm submission"
    footer={
      <>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Submit</Button>
      </>
    }
  >
    <p>Are you sure?</p>
  </Modal>
</>
```

**Notes**

- Renders via `createPortal` to `document.body`; safe under SSR (skips rendering when `document` is undefined).
- While open, `document.body.style.overflow = "hidden"` is applied and restored on close.

---

## Drawer

Side panel. Same lifecycle as `Modal`, plus a `side` prop.

**Exports:** `Drawer`, `DrawerProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `open` | `boolean` | — | Required. |
| `onOpenChange` | `(open: boolean) => void` | — | |
| `title` | `ReactNode` | — | |
| `footer` | `ReactNode` | — | |
| `side` | `"left" \| "right"` | `"right"` | |
| `closeOnEscape` | `boolean` | `true` | |
| `closeOnBackdrop` | `boolean` | `true` | |
| `closeLabel` | `string` | `"Cerrar"` | |
| `hideCloseButton` | `boolean` | `false` | |
| `aria-label` | `string` | — | Required if `title` is not provided. |
| `className` | `string` | — | |

**Example**

```tsx
const [open, setOpen] = useState(false);

<Drawer
  open={open}
  onOpenChange={setOpen}
  side="right"
  title="Filters"
  footer={
    <>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={() => setOpen(false)}>Apply</Button>
    </>
  }
>
  <p>Drawer content</p>
</Drawer>
```

**Notes**

- Same portal + scroll-lock behaviour as `Modal`.

---

## Tabs

Flat tab list. Controlled. The component renders only the tab strip — the parent decides what to render for each value.

**Exports:** `Tabs`, `TabsProps`, `TabItem`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `items` | `TabItem[]` | — | Required. Each `{ id, label, count?, disabled? }`. |
| `value` | `string` | — | Required. Active tab ID. |
| `onChange` | `(id: string) => void` | — | Required. |
| `aria-label` | `string` | — | Recommended on the tab list. |

Extends `Omit<HTMLAttributes<HTMLDivElement>, "onChange">`.

**Example**

```tsx
const [value, setValue] = useState("overview");

<>
  <Tabs
    aria-label="Sections"
    items={[
      { id: "overview", label: "Overview" },
      { id: "documents", label: "Documents", count: 12 },
      { id: "history", label: "History", disabled: true },
    ]}
    value={value}
    onChange={setValue}
  />
  {value === "overview" && <Overview />}
  {value === "documents" && <Documents />}
</>
```

**Notes**

- Arrow Left / Right move focus through the enabled tabs and wrap.
- No `Tabs.Panel` sub-component — render the body yourself based on `value`.

---

## Breadcrumbs

Page-location trail. The last item is always rendered as the current page (no link, `aria-current="page"`).

**Exports:** `Breadcrumbs`, `BreadcrumbsProps`, `CrumbItem`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `items` | `CrumbItem[]` | — | Required. Each `{ label, href? }`. Items without `href` render as a `<span>`. |
| `separator` | `ReactNode` | `"/"` | |

Extends `HTMLAttributes<HTMLElement>`.

**Example**

```tsx
<Breadcrumbs
  items={[
    { label: "Inicio", href: "/" },
    { label: "Expedientes", href: "/expedientes" },
    { label: "EXP-2026-0042" },
  ]}
/>

<Breadcrumbs
  separator="›"
  items={[
    { label: "Inicio", href: "/" },
    { label: "Trámites", href: "/tramites" },
    { label: "Nuevo" },
  ]}
/>
```

**Notes**

- The wrapping `<nav>` carries `aria-label="Migas de pan"` (Spanish for "breadcrumbs"). Pass a different `aria-label` to override.

---

## Pagination

Page-number control with smart ellipsis. Controlled.

**Exports:** `Pagination`, `PaginationProps`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `page` | `number` | — | Required. 1-indexed. |
| `pageCount` | `number` | — | Required. |
| `onChange` | `(page: number) => void` | — | Required. |
| `siblingCount` | `number` | `1` | Page buttons shown adjacent to the current page. |
| `meta` | `ReactNode` | — | Free-form text rendered alongside (e.g. `"Página 3 de 10"`). |
| `previousLabel` | `ReactNode` | `"Anterior"` | |
| `nextLabel` | `ReactNode` | `"Siguiente"` | |

Extends `Omit<HTMLAttributes<HTMLDivElement>, "onChange">`.

**Example**

```tsx
const [page, setPage] = useState(3);

<Pagination
  page={page}
  pageCount={10}
  onChange={setPage}
  meta={`Página ${page} de 10`}
/>
```

**Notes**

- Prev / Next are disabled at the boundaries; the current page button gets `aria-current="page"`.

---

# Data & domain

## Table

Composed of subcomponents on a single `Table` namespace. The wrapper renders a `<div>` around a native `<table>`; sorting and selection state are owned by the consumer.

**Exports:** `Table` (with `.Toolbar`, `.Root`, `.Head`, `.Body`, `.Row`, `.Cell`, `.HeaderCell`), plus types `TableWrapProps`, `TableToolbarProps`, `TableRootProps`, `TableHeaderCellProps`, `TableRowProps`, `TableCellProps`, `SortDirection`

**Subcomponent props**

| Subcomponent | Prop | Type | Default | Notes |
|--------------|------|------|---------|-------|
| `Table` | — | `HTMLAttributes<HTMLDivElement>` | — | Outer wrapper. |
| `Table.Toolbar` | `left` | `ReactNode` | — | Left slot. |
| | `right` | `ReactNode` | — | Right slot. |
| | `children` | `ReactNode` | — | If provided, overrides `left`/`right`. |
| `Table.Root` | — | `TableHTMLAttributes<HTMLTableElement>` | — | The `<table>` element. |
| `Table.Head` / `Body` | — | `HTMLAttributes<HTMLTableSectionElement>` | — | Native `<thead>` / `<tbody>`. |
| `Table.Row` | `selected` | `boolean` | `false` | Highlights the row and sets `aria-selected`. |
| `Table.Cell` | `numeric` | `boolean` | `false` | Right-aligns and applies monospace styling. |
| `Table.HeaderCell` | `sort` | `"asc" \| "desc" \| null` | — | If defined, the cell is sortable and an arrow indicator is rendered. |
| | `onSortChange` | `() => void` | — | Fires when a sortable header is clicked. Toggle direction in the handler. |

`SortDirection` is `"asc" | "desc" | null`.

**Example**

```tsx
import { useState } from "react";
import { Table, type SortDirection } from "@ars-docendi/ui";

const rows = [
  { id: "1", expediente: "EXP-2026-0001", solicitante: "Ana García", monto: 120000 },
  { id: "2", expediente: "EXP-2026-0002", solicitante: "Bruno Pérez", monto: 45000 },
];

export function ExpedientesTable() {
  const [sort, setSort] = useState<SortDirection>("asc");
  const [selected, setSelected] = useState<string | null>(null);

  const sorted = [...rows].sort((a, b) =>
    sort === "desc" ? b.monto - a.monto : a.monto - b.monto,
  );

  return (
    <Table>
      <Table.Toolbar left={<Input placeholder="Buscar…" />} right={<Button variant="primary">Nuevo</Button>} />
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Expediente</Table.HeaderCell>
            <Table.HeaderCell>Solicitante</Table.HeaderCell>
            <Table.HeaderCell
              sort={sort}
              onSortChange={() => setSort(sort === "asc" ? "desc" : "asc")}
            >
              Monto
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sorted.map((row) => (
            <Table.Row
              key={row.id}
              selected={selected === row.id}
              onClick={() => setSelected(row.id)}
            >
              <Table.Cell>{row.expediente}</Table.Cell>
              <Table.Cell>{row.solicitante}</Table.Cell>
              <Table.Cell numeric>${row.monto.toLocaleString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table>
  );
}
```

**Notes**

- Not a generic / data-driven table — you render `Row` / `Cell` markup yourself. This keeps the component agnostic about your data shape.
- `Table.Toolbar` is optional; omit it for plain tables.

---

## DataList

Definition list (`<dl>`) with a fixed-width term column. Renders an "empty" placeholder for missing descriptions.

**Exports:** `DataList`, `DataListProps`, `DataListItem`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `items` | `DataListItem[]` | — | Required. |

Extends `HTMLAttributes<HTMLDListElement>`.

`DataListItem`:

```ts
interface DataListItem {
  term: ReactNode;
  description?: ReactNode;
  emptyLabel?: ReactNode; // default: "— sin datos —"
}
```

**Example**

```tsx
<DataList
  items={[
    { term: "Expediente", description: "EXP-2026-0042" },
    { term: "Solicitante", description: "Ana García" },
    { term: "Monto", description: "$120,000" },
    { term: "Observaciones", description: undefined, emptyLabel: "Sin notas" },
    { term: "Adjuntos", description: undefined },
  ]}
/>
```

---

## ApprovalTimeline

Vertical timeline of approval steps with per-step status markers.

**Exports:** `ApprovalTimeline`, `ApprovalTimelineProps`, `TimelineStep`, `TimelineStatus`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `steps` | `TimelineStep[]` | — | Required. |

Extends `HTMLAttributes<HTMLDivElement>`.

`TimelineStep`:

```ts
type TimelineStatus = "done" | "current" | "pending" | "returned" | "rejected";

interface TimelineStep {
  role: ReactNode;          // actor's role/title
  name: ReactNode;          // actor's name or action
  status: TimelineStatus;
  meta?: ReactNode;         // timestamp or short status text
  comment?: ReactNode;      // free-form note, typical for returned/rejected
  event?: boolean;          // render as an informational event marker instead of an approver
}
```

**Example**

```tsx
<ApprovalTimeline
  steps={[
    { role: "Iniciador",   name: "Ana García",   status: "done",     meta: "12 may 2026" },
    { role: "Supervisor",  name: "Bruno Pérez",  status: "current",  meta: "En revisión" },
    {
      role: "Director", name: "Carla Suárez", status: "returned",
      meta: "15 may 2026", comment: "Falta adjuntar comprobante.",
    },
    { role: "Sistema", name: "Documento actualizado", status: "pending", event: true },
  ]}
/>
```

---

## AuditLog

Activity feed. Verb labels are Spanish by default; override per entry with `verbLabel`.

**Exports:** `AuditLog`, `AuditLogProps`, `AuditEntry`, `AuditVerb`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `entries` | `AuditEntry[]` | — | Required. |

Extends `HTMLAttributes<HTMLDivElement>`.

`AuditEntry`:

```ts
type AuditVerb = "create" | "update" | "attach" | "approve" | "return" | "reject";

interface AuditEntry {
  id?: string;
  actor: ReactNode;
  initials: string;        // 1–2 chars for the avatar circle
  verb: AuditVerb;
  verbLabel?: ReactNode;   // override the Spanish default
  detail?: ReactNode;      // what was acted on
  when: ReactNode;         // timestamp
  comment?: ReactNode;     // optional context box
}
```

**Example**

```tsx
<AuditLog
  entries={[
    { actor: "Ana García",  initials: "AG", verb: "create",  detail: "el expediente",     when: "12 may 2026, 10:14" },
    { actor: "Ana García",  initials: "AG", verb: "attach",  detail: "comprobante.pdf",   when: "12 may 2026, 10:16" },
    {
      actor: "Bruno Pérez", initials: "BP", verb: "return",  detail: "al iniciador",
      when: "15 may 2026, 16:40", comment: "Falta firma del responsable.",
    },
    { actor: "Carla Suárez", initials: "CS", verb: "approve", detail: "la solicitud",     when: "20 may 2026, 11:05" },
  ]}
/>
```

---

## TrafficLight

Three-state due-date indicator with a coloured dot and optional due text.

**Exports:** `TrafficLight`, `TrafficLightProps`, `TrafficState`

**Props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `state` | `"green" \| "yellow" \| "red"` | — | Required. |
| `label` | `ReactNode` | (per-state Spanish name) | "A tiempo" / "Próximo a vencer" / "Vencido". |
| `due` | `ReactNode` | — | Secondary text (e.g. `"Vence mañana"`). |

Extends `HTMLAttributes<HTMLSpanElement>`.

**Example**

```tsx
<TrafficLight state="green" />
<TrafficLight state="yellow" due="Vence mañana" />
<TrafficLight state="red"    due="Vencido hace 3 días" />
```

---

## RoleBadge & RoleMenu

`RoleBadge` shows the current user's name + role with an avatar. Set `multi` to turn the trailing caret into a button you wire to a `RoleMenu` for switching roles.

**Exports:** `RoleBadge`, `RoleBadgeProps`, `RoleMenu`, `RoleMenuProps`, `RoleOption`

**`RoleBadge` props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `name` | `ReactNode` | — | Required. |
| `initials` | `string` | — | Required. Shown in the avatar circle. |
| `role` | `ReactNode` | — | Required. |
| `multi` | `boolean` | `false` | If `true`, the trailing caret becomes a `<button>`. |
| `onSwitchClick` | `() => void` | — | Click handler for the switch button (only when `multi` is `true`). |
| `switchLabel` | `string` | `"Cambiar de rol"` | ARIA label for the switch button. |

Extends `Omit<HTMLAttributes<HTMLSpanElement>, "role">`.

**`RoleMenu` props**

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `options` | `RoleOption[]` | — | Required. |
| `heading` | `ReactNode` | `"Cambiar de rol"` | Menu heading. |
| `onSelect` | `(id: string) => void` | — | |
| `selectedId` | `string` | — | Fallback "active" mark if no option has `current: true`. |
| `checkLabel` | `string` | `"Activo"` | ARIA label for the check icon. |

Extends `Omit<HTMLAttributes<HTMLDivElement>, "onSelect">`.

`RoleOption`:

```ts
interface RoleOption {
  id: string;
  name: ReactNode;
  scope?: ReactNode;     // organisation or context
  current?: boolean;     // takes precedence over selectedId
  disabled?: boolean;
}
```

**Example**

```tsx
<RoleBadge name="Ana García" initials="AG" role="Supervisora" />

<RoleBadge
  name="Bruno Pérez"
  initials="BP"
  role="Director"
  multi
  onSwitchClick={() => setMenuOpen(true)}
/>

{menuOpen && (
  <RoleMenu
    options={[
      { id: "supervisor", name: "Supervisora", scope: "Dirección General" },
      { id: "agent",      name: "Agente",      scope: "Expedientes" },
    ]}
    selectedId={currentRoleId}
    onSelect={(id) => switchRole(id)}
  />
)}
```

**Notes**

- `RoleMenu` is a menu surface only — anchoring it to the badge (popover positioning, click-outside dismissal) is the consumer's responsibility.

---

# Internals

A few modules live under `src/` but are **not** re-exported from `@ars-docendi/ui` and are not part of the public API:

- `src/utils/cx.ts` — internal classname concatenator used by every component.
- `src/components/icons/icons.tsx` — internal icon set used by `Button`, `DatePicker`, status badges, etc.

If you need either of these, copy them into your own project rather than importing from a deep path — the deep paths are not part of the package's `exports` field and may move.
