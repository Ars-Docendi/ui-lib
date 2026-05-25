import type { Meta, StoryObj } from "@storybook/react-vite";
import { RoleBadge } from "./RoleBadge";

const meta = {
  title: "Status/RoleBadge",
  component: RoleBadge,
  parameters: { layout: "padded" },
} satisfies Meta<typeof RoleBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Ana García",
    initials: "AG",
    role: "Supervisora",
  },
};

export const Multi: Story = {
  args: {
    name: "Bruno Pérez",
    initials: "BP",
    role: "Director",
    multi: true,
    onSwitchClick: () => {},
  },
};
