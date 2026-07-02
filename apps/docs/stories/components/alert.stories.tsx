import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert, type AlertProps } from "@acme/ui/alert";

const DESCRIPTION =
  "Currently you can only accept payments in international currencies using PayPal. You cannot accept payments in INR (₹) using PayPal.";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const DEFAULT_ACTIONS: AlertProps["actions"] = {
  primary: { text: "Primary Action", onClick: () => {} },
  secondary: { text: "Link", href: "#", onClick: () => {} },
};

function StoryCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-medium border border-border bg-background p-6">{children}</div>
  );
}

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["information", "negative", "neutral", "notice", "positive", "primary"],
    },
    emphasis: {
      control: { type: "radio" },
      options: ["subtle", "intense"],
    },
    isDismissible: { control: "boolean" },
    isFullWidth: { control: "boolean" },
  },
  args: {
    title: "International Payments Only",
    description: DESCRIPTION,
    color: "information",
    emphasis: "subtle",
    isDismissible: true,
    isFullWidth: false,
    actions: DEFAULT_ACTIONS,
  },
  parameters: {
    docs: {
      source: { type: "code" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const BasicExample: Story = {
  render: (args) => (
    <StoryCard>
      <Alert {...args} />
    </StoryCard>
  ),
  parameters: {
    docs: {
      source: {
        code: `import { Alert } from "@acme/ui/alert";

<Alert
  title="International Payments Only"
  description="Currently you can only accept payments in international currencies using PayPal."
  color="information"
  emphasis="subtle"
  isDismissible
  onDismiss={() => {}}
  actions={{
    primary: { text: "Primary Action", onClick: () => {} },
    secondary: { text: "Link", href: "https://example.com", target: "_blank" },
  }}
/>`,
      },
    },
  },
};

export const Emphasis: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <StoryCard>
        <p className="mb-3 font-mono text-xs text-muted-foreground">subtle</p>
        <Alert
          title="Alert Title"
          description={LOREM}
          color="notice"
          emphasis="subtle"
          actions={DEFAULT_ACTIONS}
        />
      </StoryCard>
      <StoryCard>
        <p className="mb-3 font-mono text-xs text-muted-foreground">intense</p>
        <Alert
          title="Alert Title"
          description={LOREM}
          color="notice"
          emphasis="intense"
          actions={DEFAULT_ACTIONS}
        />
      </StoryCard>
    </div>
  ),
};

const showcaseColors = ["positive", "negative", "notice", "information"] as const;

export const ColorShowcase: Story = {
  name: "Color Showcase",
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 text-center font-mono text-xs text-muted-foreground">
        <span>Subtle</span>
        <span>Intense</span>
      </div>
      {showcaseColors.map((color) => (
        <div key={color} className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <StoryCard>
            <Alert
              title="Alert Title"
              description={LOREM}
              color={color}
              emphasis="subtle"
              actions={DEFAULT_ACTIONS}
            />
          </StoryCard>
          <StoryCard>
            <Alert
              title="Alert Title"
              description={LOREM}
              color={color}
              emphasis="intense"
              actions={DEFAULT_ACTIONS}
            />
          </StoryCard>
        </div>
      ))}
    </div>
  ),
};

export const WithoutActions: Story = {
  render: () => (
    <StoryCard>
      <Alert
        title="International Payments Only"
        description={DESCRIPTION}
        color="information"
        emphasis="subtle"
        isDismissible
      />
    </StoryCard>
  ),
};

export const NonDismissable: Story = {
  render: () => (
    <StoryCard>
      <Alert
        title="International Payments Only"
        description={DESCRIPTION}
        color="information"
        emphasis="subtle"
        isDismissible={false}
        actions={DEFAULT_ACTIONS}
      />
    </StoryCard>
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <StoryCard>
      <Alert
        description="Currently you can only accept payments in international currencies using PayPal."
        color="information"
        emphasis="subtle"
        isDismissible
      />
    </StoryCard>
  ),
};

export const PrimaryActionOnly: Story = {
  render: () => (
    <StoryCard>
      <Alert
        title="Unable to fetch merchants"
        description="We couldn't load your merchant list. Please check your connection and try again."
        color="negative"
        emphasis="subtle"
        isDismissible
        actions={{
          primary: { text: "Try Refetching", onClick: () => {} },
        }}
      />
    </StoryCard>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <StoryCard>
      <Alert
        title="Alert Title"
        description={LOREM}
        color="notice"
        emphasis="subtle"
        isFullWidth
        isDismissible
        actions={DEFAULT_ACTIONS}
      />
    </StoryCard>
  ),
};

export const SubtleStack: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <StoryCard>
      <div className="space-y-3">
        <Alert
          title="Alert Title"
          description={LOREM}
          color="positive"
          emphasis="subtle"
          actions={DEFAULT_ACTIONS}
        />
        <Alert
          description={LOREM}
          color="positive"
          emphasis="subtle"
          actions={DEFAULT_ACTIONS}
        />
        <Alert
          description="Compact single-line alert message."
          color="positive"
          emphasis="subtle"
          isDismissible
        />
      </div>
    </StoryCard>
  ),
};

export const Usage: Story = {
  name: "Usage",
  parameters: {
    docs: {
      source: {
        code: `import { Alert } from "@acme/ui/alert";

<Alert
  title="International Payments Only"
  description="Currently you can only accept payments in international currencies using PayPal."
  color="information"
  emphasis="subtle"
  isDismissible
  onDismiss={() => console.log("dismissed")}
  actions={{
    primary: { text: "Primary Action", onClick: () => {} },
    secondary: {
      text: "Link",
      href: "https://example.com",
      target: "_blank",
      onClick: () => {},
    },
  }}
/>`,
      },
    },
  },
  render: () => (
    <StoryCard>
      <Alert
        title="International Payments Only"
        description={DESCRIPTION}
        color="information"
        emphasis="subtle"
        isDismissible
        onDismiss={() => {
          // eslint-disable-next-line no-console -- story demo
          console.log("dismissed");
        }}
        actions={{
          primary: { text: "Primary Action", onClick: () => {} },
          secondary: {
            text: "Link",
            href: "https://example.com",
            target: "_blank",
          },
        }}
      />
    </StoryCard>
  ),
};
