import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer } from "./Drawer";
import { Button } from "../Button/Button";

const meta = {
  title: "Feedback/Drawer",
  component: Drawer,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

function DrawerDemo({ side }: { side: "right" | "left" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open {side} drawer
      </Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        side={side}
        title="Filters"
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Apply</Button>
          </>
        }
      >
        <p>Drawer body content goes here.</p>
      </Drawer>
    </>
  );
}

export const RightSide: Story = { render: () => <DrawerDemo side="right" /> };
export const LeftSide: Story = { render: () => <DrawerDemo side="left" /> };
