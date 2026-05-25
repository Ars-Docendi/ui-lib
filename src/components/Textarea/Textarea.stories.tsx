import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { rows: 4, placeholder: "Write your comment..." },
};

export const Invalid: Story = {
  args: { rows: 4, defaultValue: "Too short", invalid: true },
};

export const Disabled: Story = {
  args: { rows: 4, defaultValue: "Cannot edit", disabled: true },
};
