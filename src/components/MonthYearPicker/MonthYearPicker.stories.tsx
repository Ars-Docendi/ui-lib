import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { MonthYearPicker } from "./MonthYearPicker";

const meta = {
  title: "Forms/MonthYearPicker",
  component: MonthYearPicker,
  parameters: { layout: "padded" },
  args: { value: "", onChange: () => {} },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <div style={{ width: 260 }}>
        <MonthYearPicker {...args} value={value} onChange={setValue} />
      </div>
    );
  },
} satisfies Meta<typeof MonthYearPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const YearOnly: Story = {
  args: { value: "2014" },
};

export const MonthAndYear: Story = {
  args: { value: "2014-03" },
};

export const Invalid: Story = {
  args: { value: "", invalid: true },
};

export const Disabled: Story = {
  args: { value: "2014-03", disabled: true },
};
