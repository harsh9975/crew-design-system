import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardFooterLeading,
  CardFooterTrailing,
  CardHeader,
  CardHeaderBadge,
  CardHeaderCounter,
  CardHeaderIcon,
  CardHeaderIconButton,
  CardHeaderLeading,
  CardHeaderTrailing,
} from "@acme/ui/card";
import { CheckCircle2, Info, MoreHorizontal } from "lucide-react";

const bodyText =
  "Cards group related content and actions into a single scannable surface. Use them to separate sections, highlight key information, and guide users toward the next step without overwhelming the page.";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["medium", "large"],
    },
    padding: {
      control: "select",
      options: ["spacing.0", "spacing.3", "spacing.4", "spacing.5", "spacing.7"],
    },
    isSelected: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "large",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardHeaderLeading
          title="Card Header"
          subtitle="Subtitle"
          prefix={<CardHeaderIcon icon={Info} />}
          suffix={<CardHeaderCounter value={12} />}
        />
        <CardHeaderTrailing
          visual={<CardHeaderBadge color="positive">NEW</CardHeaderBadge>}
        />
      </CardHeader>
      <CardBody>
        <p>{bodyText}</p>
      </CardBody>
      <CardFooter>
        <CardFooterLeading title="Card footer title" subtitle="Subtitle" />
        <CardFooterTrailing
          actions={{
            primary: {
              text: "Accept",
              onClick: () => console.log("Primary action clicked"),
            },
            secondary: {
              text: "Cancel",
              onClick: () => console.log("Secondary action clicked"),
            },
          }}
        />
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Primary</h3>
        <Card variant="primary">
          <CardHeader>
            <CardHeaderLeading title="Project Overview" subtitle="Share updates with your team via email, chat, or dashboard." />
          </CardHeader>
          <CardBody>
            <p>{bodyText}</p>
          </CardBody>
          <CardFooter>
            <CardFooterTrailing
              actions={{
                primary: { text: "Learn More", onClick: () => {} },
                secondary: { text: "Try Demo", onClick: () => {} },
              }}
            />
          </CardFooter>
        </Card>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Secondary</h3>
        <Card variant="secondary" body="Secondary Card — a simplified surface that only accepts CardBody content via the body prop or children." />
      </div>
    </div>
  ),
};

export const NestedSecondary: Story = {
  render: () => (
    <Card size="large">
      <CardHeader>
        <CardHeaderLeading
          title="Activity Summary"
          subtitle="Overview of recent updates"
          prefix={<CardHeaderIcon icon={CheckCircle2} />}
        />
        <CardHeaderTrailing visual={<CardHeaderBadge color="positive">Active</CardHeaderBadge>} />
      </CardHeader>
      <CardBody>
        <p className="mb-4 text-sm text-muted-foreground">
          Below are your recent activity items grouped by category.
        </p>
        <div className="flex flex-col gap-3">
          <Card variant="secondary" padding="spacing.5">
            <CardBody>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Design</p>
                  <p className="text-xs text-muted-foreground">12 updates this week</p>
                </div>
                <p className="text-sm font-semibold">24 items</p>
              </div>
            </CardBody>
          </Card>
          <Card variant="secondary" padding="spacing.5">
            <CardBody>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Development</p>
                  <p className="text-xs text-muted-foreground">8 updates this week</p>
                </div>
                <p className="text-sm font-semibold">16 items</p>
              </div>
            </CardBody>
          </Card>
          <Card variant="secondary" padding="spacing.5">
            <CardBody>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">Marketing</p>
                  <p className="text-xs text-muted-foreground">3 updates this week</p>
                </div>
                <p className="text-sm font-semibold">9 items</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </CardBody>
      <CardFooter>
        <CardFooterLeading title="Total Items" subtitle="This week" />
        <CardFooterTrailing
          actions={{
            primary: { text: "View All", onClick: () => {} },
          }}
        />
      </CardFooter>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Medium</h3>
        <Card size="medium">
          <CardHeader>
            <CardHeaderLeading title="Medium Card" subtitle="Smaller title scale" />
          </CardHeader>
          <CardBody>
            <p>{bodyText}</p>
          </CardBody>
        </Card>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Large</h3>
        <Card size="large">
          <CardHeader>
            <CardHeaderLeading title="Large Card" subtitle="Larger title scale" />
          </CardHeader>
          <CardBody>
            <p>{bodyText}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  ),
};

export const Selected: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Card isSelected>
        <CardHeader>
          <CardHeaderLeading title="Selected Card" subtitle="Primary border highlight" />
        </CardHeader>
        <CardBody>
          <p>This card is in the selected state with a brand-colored border.</p>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardHeaderLeading title="Default Card" subtitle="For comparison" />
        </CardHeader>
        <CardBody>
          <p>This card uses the default border styling.</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Card href="https://example.com" target="_blank" accessibilityLabel="Open documentation">
        <CardHeader>
          <CardHeaderLeading title="Link Card" subtitle="Click to open documentation" />
        </CardHeader>
        <CardBody>
          <p>This card renders as an anchor when href is provided.</p>
        </CardBody>
      </Card>
      <Card onClick={() => alert("Card clicked")} accessibilityLabel="Selectable card">
        <CardHeader>
          <CardHeaderLeading title="Clickable Card" subtitle="Click anywhere on the card" />
        </CardHeader>
        <CardBody>
          <p>This card responds to onClick with hover feedback.</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const HeaderSlots: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardHeaderLeading
          title="Header with all slots"
          subtitle="Icon, counter, badge, and icon button"
          prefix={<CardHeaderIcon icon={Info} />}
          suffix={<CardHeaderCounter value={3} />}
        />
        <CardHeaderTrailing
          visual={
            <div className="flex items-center gap-2">
              <CardHeaderBadge color="notice">BETA</CardHeaderBadge>
              <CardHeaderIconButton
                icon={MoreHorizontal}
                accessibilityLabel="More options"
                onClick={() => {}}
              />
            </div>
          }
        />
      </CardHeader>
      <CardBody>
        <p>Demonstrates all header helper components working together.</p>
      </CardBody>
    </Card>
  ),
};

export const FooterActions: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Card>
        <CardBody>
          <p>Both primary and secondary actions.</p>
        </CardBody>
        <CardFooter>
          <CardFooterTrailing
            actions={{
              primary: { text: "Learn More", onClick: () => {} },
              secondary: { text: "Try Demo", onClick: () => {} },
            }}
          />
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <p>Primary action only.</p>
        </CardBody>
        <CardFooter>
          <CardFooterTrailing
            actions={{
              primary: { text: "Continue", onClick: () => {} },
            }}
          />
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <p>Secondary action only.</p>
        </CardBody>
        <CardFooter>
          <CardFooterTrailing
            actions={{
              secondary: { text: "Dismiss", onClick: () => {} },
            }}
          />
        </CardFooter>
      </Card>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-large bg-surface-page p-6">
        <h3 className="mb-4 text-sm font-semibold">Light Mode</h3>
        <Card size="large">
          <CardHeader>
            <CardHeaderLeading
              title="Header Title"
              subtitle="Header Subtitle"
              prefix={<CardHeaderIcon icon={CheckCircle2} />}
              suffix={<CardHeaderCounter value={12} />}
            />
            <CardHeaderTrailing visual={<CardHeaderBadge color="positive">NEW</CardHeaderBadge>} />
          </CardHeader>
          <CardBody>
            <p>{bodyText}</p>
          </CardBody>
          <CardFooter>
            <CardFooterLeading title="Footer Title" subtitle="Footer Subtitle" />
            <CardFooterTrailing
              actions={{
                primary: { text: "Learn More", onClick: () => {} },
                secondary: { text: "Try Demo", onClick: () => {} },
              }}
            />
          </CardFooter>
        </Card>
      </div>
      <div className="dark rounded-large bg-surface-page p-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Dark Mode</h3>
        <Card size="large">
          <CardHeader>
            <CardHeaderLeading
              title="Header Title"
              subtitle="Header Subtitle"
              prefix={<CardHeaderIcon icon={CheckCircle2} />}
              suffix={<CardHeaderCounter value={12} />}
            />
            <CardHeaderTrailing visual={<CardHeaderBadge color="positive">NEW</CardHeaderBadge>} />
          </CardHeader>
          <CardBody>
            <p>{bodyText}</p>
          </CardBody>
          <CardFooter>
            <CardFooterLeading title="Footer Title" subtitle="Footer Subtitle" />
            <CardFooterTrailing
              actions={{
                primary: { text: "Learn More", onClick: () => {} },
                secondary: { text: "Try Demo", onClick: () => {} },
              }}
            />
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};
