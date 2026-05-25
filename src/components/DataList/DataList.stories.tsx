import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataList } from "./DataList";

const meta = {
  title: "Data Display/DataList",
  component: DataList,
  parameters: { layout: "padded" },
} satisfies Meta<typeof DataList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { term: "Expediente", description: "EXP-2026-0042" },
      { term: "Solicitante", description: "Ana García" },
      { term: "Tipo", description: "Solicitud de aprobación" },
      { term: "Monto", description: "$120.000" },
    ],
  },
};

export const WithEmpty: Story = {
  args: {
    items: [
      { term: "Expediente", description: "EXP-2026-0042" },
      { term: "Observaciones", description: undefined },
      { term: "Adjuntos", description: undefined, emptyLabel: "Ningún archivo cargado" },
    ],
  },
};
