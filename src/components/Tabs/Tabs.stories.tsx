import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("overview");
    return (
      <Tabs
        items={[
          { id: "overview", label: "Overview" },
          { id: "documents", label: "Documents" },
          { id: "history", label: "History" },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithCounts: Story = {
  render: () => {
    const [value, setValue] = useState("inbox");
    return (
      <Tabs
        items={[
          { id: "inbox", label: "Inbox", count: 12 },
          { id: "review", label: "In Review", count: 4 },
          { id: "done", label: "Approved", count: 87 },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <Tabs
        items={[
          { id: "a", label: "Available" },
          { id: "b", label: "Locked", disabled: true },
          { id: "c", label: "Also available" },
        ]}
        value={value}
        onChange={setValue}
      />
    );
  },
};
