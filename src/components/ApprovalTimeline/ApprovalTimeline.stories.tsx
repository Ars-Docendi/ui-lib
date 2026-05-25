import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApprovalTimeline } from "./ApprovalTimeline";

const meta = {
  title: "Data Display/ApprovalTimeline",
  component: ApprovalTimeline,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ApprovalTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      { role: "Iniciador",   name: "Ana García",    status: "done",    meta: "12 may 2026" },
      { role: "Supervisor",  name: "Bruno Pérez",   status: "current", meta: "En revisión" },
      { role: "Director",    name: "Carla Suárez",  status: "pending" },
    ],
  },
};

export const Returned: Story = {
  args: {
    steps: [
      { role: "Iniciador",   name: "Ana García",   status: "done",     meta: "12 may 2026" },
      { role: "Supervisor",  name: "Bruno Pérez",  status: "returned", meta: "15 may 2026", comment: "Falta adjuntar comprobante." },
      { role: "Director",    name: "Carla Suárez", status: "pending" },
    ],
  },
};

export const Rejected: Story = {
  args: {
    steps: [
      { role: "Iniciador",   name: "Ana García",   status: "done",     meta: "12 may 2026" },
      { role: "Supervisor",  name: "Bruno Pérez",  status: "done",     meta: "14 may 2026" },
      { role: "Director",    name: "Carla Suárez", status: "rejected", meta: "20 may 2026", comment: "No corresponde al programa solicitado." },
    ],
  },
};
