import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "./FileUpload";

const meta = {
  title: "Forms/FileUpload",
  component: FileUpload,
  parameters: { layout: "padded" },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    title: "Drop files or click to upload",
    hint: "PDF, DOCX, PNG up to 10 MB",
  },
};

export const WithFiles: Story = {
  args: {
    title: "Drop files or click to upload",
    files: [
      { id: "1", name: "contract.pdf", size: "342 KB", status: "uploaded" },
      { id: "2", name: "scan.png", size: "1.2 MB", status: "uploading", progress: 64 },
      { id: "3", name: "broken.zip", size: "5 MB", status: "error", error: "Unsupported format" },
    ],
    onRemove: () => {},
  },
};

export const Disabled: Story = {
  args: { title: "Upload disabled", disabled: true },
};
