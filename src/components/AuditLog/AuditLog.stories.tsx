import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuditLog } from "./AuditLog";

const meta = {
  title: "Data Display/AuditLog",
  component: AuditLog,
  parameters: { layout: "padded" },
} satisfies Meta<typeof AuditLog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    entries: [
      {
        actor: "Ana García",
        initials: "AG",
        verb: "create",
        detail: "el expediente",
        when: "12 may 2026, 10:14",
      },
      {
        actor: "Ana García",
        initials: "AG",
        verb: "attach",
        detail: "comprobante.pdf",
        when: "12 may 2026, 10:16",
      },
      {
        actor: "Bruno Pérez",
        initials: "BP",
        verb: "update",
        detail: "el monto solicitado",
        when: "13 may 2026, 09:02",
      },
      {
        actor: "Bruno Pérez",
        initials: "BP",
        verb: "return",
        detail: "al iniciador",
        when: "15 may 2026, 16:40",
        comment: "Falta firma del responsable.",
      },
      {
        actor: "Carla Suárez",
        initials: "CS",
        verb: "approve",
        detail: "la solicitud",
        when: "20 may 2026, 11:05",
      },
    ],
  },
};

export const Empty: Story = {
  args: { entries: [] },
};
