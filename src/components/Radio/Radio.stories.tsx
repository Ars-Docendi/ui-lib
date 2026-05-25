import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

const meta = {
  title: "Forms/Radio",
  component: Radio,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Radio
          name="group"
          label="Option A"
          value="a"
          checked={value === "a"}
          onChange={() => setValue("a")}
        />
        <Radio
          name="group"
          label="Option B"
          value="b"
          checked={value === "b"}
          onChange={() => setValue("b")}
        />
        <Radio
          name="group"
          label="Option C"
          value="c"
          checked={value === "c"}
          onChange={() => setValue("c")}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Radio name="d" label="Disabled" disabled />
      <Radio name="d" label="Disabled checked" disabled checked onChange={() => {}} />
    </div>
  ),
};
