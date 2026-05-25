import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = (
  <>
    <option value="">— Select —</option>
    <option value="a">Apple</option>
    <option value="b">Banana</option>
    <option value="c">Cherry</option>
  </>
);

export const Default: Story = {
  args: { defaultValue: "a", children: options },
};

export const Invalid: Story = {
  args: { defaultValue: "", invalid: true, children: options },
};

export const Disabled: Story = {
  args: { defaultValue: "b", disabled: true, children: options },
};
