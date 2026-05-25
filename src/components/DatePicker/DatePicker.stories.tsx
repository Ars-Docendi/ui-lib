import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./DatePicker";

const meta = {
  title: "Forms/DatePicker",
  component: DatePicker,
  parameters: { layout: "padded" },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: "2026-05-25" },
};

export const Invalid: Story = {
  args: { defaultValue: "2026-05-25", invalid: true },
};

export const Disabled: Story = {
  args: { defaultValue: "2026-05-25", disabled: true },
};
