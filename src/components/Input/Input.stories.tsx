import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Forms/Input",
  component: Input,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: "Hello" },
};

export const WithPlaceholder: Story = {
  args: { placeholder: "Type something..." },
};

export const Invalid: Story = {
  args: { defaultValue: "bad@", invalid: true },
};

export const Disabled: Story = {
  args: { defaultValue: "Read only", disabled: true },
};
