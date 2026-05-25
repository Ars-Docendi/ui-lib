import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusBadge, type StatusKind } from "./StatusBadge";

const meta = {
  title: "Status/StatusBadge",
  component: StatusBadge,
  parameters: { layout: "padded" },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof StatusBadge>;

const allKinds: StatusKind[] = [
  "pendiente",
  "revision",
  "devuelto",
  "aprobado",
  "rechazado",
  "cancelado",
  "prioritario",
];

export const AllKinds: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {allKinds.map((k) => (
        <StatusBadge key={k} kind={k} />
      ))}
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {allKinds.map((k) => (
        <StatusBadge key={k} kind={k} showIcon={false} />
      ))}
    </div>
  ),
};
