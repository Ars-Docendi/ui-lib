import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InlineAlert } from "./InlineAlert";

const meta = {
  title: "Feedback/InlineAlert",
  component: InlineAlert,
  parameters: { layout: "padded" },
} satisfies Meta<typeof InlineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    severity: "info",
    title: "Heads up",
    children: "Your draft was auto-saved a moment ago.",
  },
};

export const Success: Story = {
  args: {
    severity: "success",
    title: "All set",
    children: "Your request has been approved.",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    title: "Watch out",
    children: "This action will be irreversible after submission.",
  },
};

export const Danger: Story = {
  args: {
    severity: "danger",
    title: "Something went wrong",
    children: "We could not process your request. Please try again.",
  },
};

export const Dismissible: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    if (!open) return <span>Alert dismissed.</span>;
    return (
      <InlineAlert
        severity="info"
        title="Dismissible"
        onClose={() => setOpen(false)}
      >
        Click the × to close.
      </InlineAlert>
    );
  },
};
