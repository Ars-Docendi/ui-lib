import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "./Breadcrumbs";

const meta = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Inicio", href: "#" },
      { label: "Expedientes", href: "#" },
      { label: "EXP-2026-0042" },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: "›",
    items: [
      { label: "Inicio", href: "#" },
      { label: "Trámites", href: "#" },
      { label: "Nuevo" },
    ],
  },
};
