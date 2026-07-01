import type { Preview } from "@storybook/react";
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../../../packages/ui/src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <div className="bg-background text-foreground min-h-screen p-6">
        <Story />
      </div>
    ),
  ],
};

export default preview;
