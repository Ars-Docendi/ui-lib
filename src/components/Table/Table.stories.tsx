import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, type SortDirection } from "./Table";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const meta = {
  title: "Data Display/Table",
  component: Table,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Row {
  id: string;
  expediente: string;
  solicitante: string;
  monto: number;
}

const rows: Row[] = [
  { id: "1", expediente: "EXP-2026-0001", solicitante: "Ana García",    monto: 120000 },
  { id: "2", expediente: "EXP-2026-0002", solicitante: "Bruno Pérez",   monto: 45000 },
  { id: "3", expediente: "EXP-2026-0003", solicitante: "Carla Suárez",  monto: 230500 },
  { id: "4", expediente: "EXP-2026-0004", solicitante: "Diego Torres",  monto: 8900 },
  { id: "5", expediente: "EXP-2026-0005", solicitante: "Elena Vidal",   monto: 67200 },
];

export const Default: Story = {
  render: () => {
    const [sort, setSort] = useState<SortDirection>("asc");
    const sorted = [...rows].sort((a, b) =>
      sort === "asc" ? a.monto - b.monto : b.monto - a.monto,
    );
    return (
      <Table>
        <Table.Toolbar
          left={<Input placeholder="Buscar..." style={{ maxWidth: 240 }} />}
          right={<Button variant="primary">Nuevo</Button>}
        />
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Expediente</Table.HeaderCell>
              <Table.HeaderCell>Solicitante</Table.HeaderCell>
              <Table.HeaderCell
                sort={sort}
                onSortChange={() => setSort(sort === "asc" ? "desc" : "asc")}
              >
                Monto
              </Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {sorted.map((r) => (
              <Table.Row key={r.id}>
                <Table.Cell>{r.expediente}</Table.Cell>
                <Table.Cell>{r.solicitante}</Table.Cell>
                <Table.Cell numeric>${r.monto.toLocaleString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table>
    );
  },
};

export const Selectable: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>("2");
    return (
      <Table>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Expediente</Table.HeaderCell>
              <Table.HeaderCell>Solicitante</Table.HeaderCell>
              <Table.HeaderCell>Monto</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {rows.map((r) => (
              <Table.Row
                key={r.id}
                selected={selected === r.id}
                onClick={() => setSelected(r.id)}
                style={{ cursor: "pointer" }}
              >
                <Table.Cell>{r.expediente}</Table.Cell>
                <Table.Cell>{r.solicitante}</Table.Cell>
                <Table.Cell numeric>${r.monto.toLocaleString()}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table>
    );
  },
};
