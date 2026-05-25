import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "File uploaded",
    children: "contract.pdf · 342 KB",
    onClose: () => {},
  },
};

export const Info: Story = {
  args: {
    severity: "info",
    title: "Reminder",
    children: "Review the draft before submitting.",
    onClose: () => {},
  },
};

export const Success: Story = {
  args: {
    severity: "success",
    title: "Saved",
    children: "Your changes have been saved.",
    onClose: () => {},
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    title: "Slow connection",
    children: "Your changes may take longer than usual to sync.",
    onClose: () => {},
  },
};

export const Danger: Story = {
  args: {
    severity: "danger",
    title: "Upload failed",
    children: "Check your connection and try again.",
    onClose: () => {},
  },
};

export const WithMeta: Story = {
  args: {
    severity: "success",
    title: "Approval sent",
    children: "Expediente EXP-2026-0042",
    meta: "Hace 2 minutos",
    onClose: () => {},
  },
};
