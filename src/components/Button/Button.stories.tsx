import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { IconCheck, IconCaretDown } from "../icons/icons";

const meta = {
  title: "Actions/Button",
  component: Button,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Click me" },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button size="sm" variant="primary">Small</Button>
      <Button size="md" variant="primary">Medium</Button>
      <Button size="lg" variant="primary">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { variant: "primary", loading: true, children: "Saving..." },
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true, children: "Disabled" },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button variant="primary" leadingIcon={<IconCheck />}>Approve</Button>
      <Button variant="secondary" trailingIcon={<IconCaretDown />}>More</Button>
    </div>
  ),
};
