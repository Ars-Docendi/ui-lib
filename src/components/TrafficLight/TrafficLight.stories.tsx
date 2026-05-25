import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrafficLight } from "./TrafficLight";

const meta = {
  title: "Status/TrafficLight",
  component: TrafficLight,
  parameters: { layout: "padded" },
} satisfies Meta<typeof TrafficLight>;

export default meta;
type Story = StoryObj<typeof TrafficLight>;

export const Green: Story = { args: { state: "green" } };
export const Yellow: Story = { args: { state: "yellow" } };
export const Red: Story = { args: { state: "red" } };

export const WithDue: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <TrafficLight state="green"  due="Vence en 5 días" />
      <TrafficLight state="yellow" due="Vence mañana" />
      <TrafficLight state="red"    due="Vencido hace 3 días" />
    </div>
  ),
};
