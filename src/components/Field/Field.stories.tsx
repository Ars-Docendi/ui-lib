import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "./Field";
import { Input } from "../Input/Input";

const meta = {
  title: "Forms/Field",
  component: Field,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof Field>;

export const WithInput: Story = {
  render: () => (
    <Field label="Full name">
      <Input placeholder="Jane Doe" />
    </Field>
  ),
};

export const WithHint: Story = {
  render: () => (
    <Field label="Email" hint="We will never share your email.">
      <Input type="email" placeholder="you@example.com" />
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field label="Email" error="Please enter a valid email address.">
      <Input type="email" defaultValue="not-an-email" />
    </Field>
  ),
};

export const Required: Story = {
  render: () => (
    <Field label="Username" required hint="At least 3 characters.">
      <Input />
    </Field>
  ),
};
