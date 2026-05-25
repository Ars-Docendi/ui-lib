import type { Preview } from "@storybook/react-vite";
import "../src/styles/theme.css";
import "../src/styles/components.css";

const preview: Preview = {
  parameters: {},
  decorators: [
    (Story) => (
      <div className="adoc-ui" style={{ padding: 24, background: "var(--color-bg-canvas)", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
