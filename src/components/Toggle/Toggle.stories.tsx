import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./Toggle";

const meta = {
  title: "Forms/Toggle",
  component: Toggle,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <Toggle
        label="Enable notifications"
        checked={on}
        onChange={(e) => setOn(e.target.checked)}
      />
    );
  },
};

export const On: Story = {
  args: { label: "Always on", checked: true, onChange: () => {} },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Toggle label="Disabled off" disabled />
      <Toggle label="Disabled on" disabled checked onChange={() => {}} />
    </div>
  ),
};
