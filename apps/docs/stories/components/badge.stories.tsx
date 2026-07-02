import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from "@acme/ui/badge";
import { Check, AlertCircle, Info, AlertTriangle, X, Zap } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xsmall", "small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["information", "negative", "neutral", "notice", "positive", "primary"],
    },
    emphasis: {
      control: "select",
      options: ["subtle", "intense"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Label",
    color: "neutral",
    size: "medium",
    emphasis: "subtle",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Size: xsmall</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge color="positive" size="xsmall" emphasis="subtle" icon={Check}>
            positive
          </Badge>
          <Badge color="negative" size="xsmall" emphasis="subtle" icon={X}>
            negative
          </Badge>
          <Badge color="notice" size="xsmall" emphasis="subtle" icon={AlertTriangle}>
            notice
          </Badge>
          <Badge color="information" size="xsmall" emphasis="subtle" icon={Info}>
            information
          </Badge>
          <Badge color="neutral" size="xsmall" emphasis="subtle">
            neutral
          </Badge>
          <Badge color="primary" size="xsmall" emphasis="subtle" icon={Zap}>
            primary
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Size: small</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge color="positive" size="small" emphasis="subtle" icon={Check}>
            positive
          </Badge>
          <Badge color="negative" size="small" emphasis="subtle" icon={X}>
            negative
          </Badge>
          <Badge color="notice" size="small" emphasis="subtle" icon={AlertTriangle}>
            notice
          </Badge>
          <Badge color="information" size="small" emphasis="subtle" icon={Info}>
            information
          </Badge>
          <Badge color="neutral" size="small" emphasis="subtle">
            neutral
          </Badge>
          <Badge color="primary" size="small" emphasis="subtle" icon={Zap}>
            primary
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Size: medium</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge color="positive" size="medium" emphasis="subtle" icon={Check}>
            positive
          </Badge>
          <Badge color="negative" size="medium" emphasis="subtle" icon={X}>
            negative
          </Badge>
          <Badge color="notice" size="medium" emphasis="subtle" icon={AlertTriangle}>
            notice
          </Badge>
          <Badge color="information" size="medium" emphasis="subtle" icon={Info}>
            information
          </Badge>
          <Badge color="neutral" size="medium" emphasis="subtle">
            neutral
          </Badge>
          <Badge color="primary" size="medium" emphasis="subtle" icon={Zap}>
            primary
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Size: large</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge color="positive" size="large" emphasis="subtle" icon={Check}>
            positive
          </Badge>
          <Badge color="negative" size="large" emphasis="subtle" icon={X}>
            negative
          </Badge>
          <Badge color="notice" size="large" emphasis="subtle" icon={AlertTriangle}>
            notice
          </Badge>
          <Badge color="information" size="large" emphasis="subtle" icon={Info}>
            information
          </Badge>
          <Badge color="neutral" size="large" emphasis="subtle">
            neutral
          </Badge>
          <Badge color="primary" size="large" emphasis="subtle" icon={Zap}>
            primary
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const SubtleEmphasis: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Subtle Emphasis</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="positive" emphasis="subtle">
            positive
          </Badge>
          <Badge color="negative" emphasis="subtle">
            negative
          </Badge>
          <Badge color="notice" emphasis="subtle">
            notice
          </Badge>
          <Badge color="information" emphasis="subtle">
            information
          </Badge>
          <Badge color="neutral" emphasis="subtle">
            neutral
          </Badge>
          <Badge color="primary" emphasis="subtle">
            primary
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const IntenseEmphasis: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Intense Emphasis</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="positive" emphasis="intense">
            positive
          </Badge>
          <Badge color="negative" emphasis="intense">
            negative
          </Badge>
          <Badge color="notice" emphasis="intense">
            notice
          </Badge>
          <Badge color="information" emphasis="intense">
            information
          </Badge>
          <Badge color="neutral" emphasis="intense">
            neutral
          </Badge>
          <Badge color="primary" emphasis="intense">
            primary
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Subtle with Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="positive" emphasis="subtle" icon={Check}>
            Success
          </Badge>
          <Badge color="negative" emphasis="subtle" icon={X}>
            Error
          </Badge>
          <Badge color="notice" emphasis="subtle" icon={AlertTriangle}>
            Warning
          </Badge>
          <Badge color="information" emphasis="subtle" icon={Info}>
            Info
          </Badge>
          <Badge color="neutral" emphasis="subtle" icon={AlertCircle}>
            Neutral
          </Badge>
          <Badge color="primary" emphasis="subtle" icon={Zap}>
            Primary
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Intense with Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="positive" emphasis="intense" icon={Check}>
            Success
          </Badge>
          <Badge color="negative" emphasis="intense" icon={X}>
            Error
          </Badge>
          <Badge color="notice" emphasis="intense" icon={AlertTriangle}>
            Warning
          </Badge>
          <Badge color="information" emphasis="intense" icon={Info}>
            Info
          </Badge>
          <Badge color="neutral" emphasis="intense" icon={AlertCircle}>
            Neutral
          </Badge>
          <Badge color="primary" emphasis="intense" icon={Zap}>
            Primary
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div className="rounded-large border border-border bg-surface-card p-6">
        <h3 className="mb-4 text-sm font-semibold">Status Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="positive" emphasis="intense" icon={Check}>
            Active
          </Badge>
          <Badge color="notice" emphasis="subtle" icon={AlertCircle}>
            Pending
          </Badge>
          <Badge color="negative" emphasis="subtle" icon={X}>
            Inactive
          </Badge>
          <Badge color="information" emphasis="subtle">
            Draft
          </Badge>
        </div>
      </div>

      <div className="rounded-large border border-border bg-surface-card p-6">
        <h3 className="mb-4 text-sm font-semibold">Category Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge color="primary" size="small">
            React
          </Badge>
          <Badge color="information" size="small">
            TypeScript
          </Badge>
          <Badge color="positive" size="small">
            Node.js
          </Badge>
          <Badge color="notice" size="small">
            JavaScript
          </Badge>
          <Badge color="neutral" size="small">
            CSS
          </Badge>
        </div>
      </div>

      <div className="rounded-large border border-border bg-surface-card p-6">
        <h3 className="mb-4 text-sm font-semibold">Notification Counts</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Inbox</span>
            <Badge color="primary" emphasis="intense" size="small">
              12
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Unread</span>
            <Badge color="negative" emphasis="intense" size="small">
              5
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Drafts</span>
            <Badge color="neutral" emphasis="subtle" size="small">
              3
            </Badge>
          </div>
        </div>
      </div>

      <div className="rounded-large border border-border bg-surface-card p-6">
        <h3 className="mb-4 text-sm font-semibold">Version Labels</h3>
        <div className="flex flex-wrap gap-3">
          <Badge color="positive" emphasis="intense" size="large">
            v2.0.0
          </Badge>
          <Badge color="notice" emphasis="subtle">
            Beta
          </Badge>
          <Badge color="information" emphasis="subtle">
            Alpha
          </Badge>
          <Badge color="neutral" emphasis="subtle">
            Deprecated
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Subtle Emphasis</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Badge color="positive" emphasis="subtle" icon={Check} size="xsmall">
              positive
            </Badge>
            <Badge color="positive" emphasis="subtle" icon={Check} size="small">
              positive
            </Badge>
            <Badge color="positive" emphasis="subtle" icon={Check} size="medium">
              positive
            </Badge>
            <Badge color="positive" emphasis="subtle" icon={Check} size="large">
              positive
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="negative" emphasis="subtle" icon={X} size="xsmall">
              negative
            </Badge>
            <Badge color="negative" emphasis="subtle" icon={X} size="small">
              negative
            </Badge>
            <Badge color="negative" emphasis="subtle" icon={X} size="medium">
              negative
            </Badge>
            <Badge color="negative" emphasis="subtle" icon={X} size="large">
              negative
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="notice" emphasis="subtle" icon={AlertTriangle} size="xsmall">
              notice
            </Badge>
            <Badge color="notice" emphasis="subtle" icon={AlertTriangle} size="small">
              notice
            </Badge>
            <Badge color="notice" emphasis="subtle" icon={AlertTriangle} size="medium">
              notice
            </Badge>
            <Badge color="notice" emphasis="subtle" icon={AlertTriangle} size="large">
              notice
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="information" emphasis="subtle" icon={Info} size="xsmall">
              information
            </Badge>
            <Badge color="information" emphasis="subtle" icon={Info} size="small">
              information
            </Badge>
            <Badge color="information" emphasis="subtle" icon={Info} size="medium">
              information
            </Badge>
            <Badge color="information" emphasis="subtle" icon={Info} size="large">
              information
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="neutral" emphasis="subtle" size="xsmall">
              neutral
            </Badge>
            <Badge color="neutral" emphasis="subtle" size="small">
              neutral
            </Badge>
            <Badge color="neutral" emphasis="subtle" size="medium">
              neutral
            </Badge>
            <Badge color="neutral" emphasis="subtle" size="large">
              neutral
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="primary" emphasis="subtle" icon={Zap} size="xsmall">
              primary
            </Badge>
            <Badge color="primary" emphasis="subtle" icon={Zap} size="small">
              primary
            </Badge>
            <Badge color="primary" emphasis="subtle" icon={Zap} size="medium">
              primary
            </Badge>
            <Badge color="primary" emphasis="subtle" icon={Zap} size="large">
              primary
            </Badge>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Intense Emphasis</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Badge color="positive" emphasis="intense" icon={Check} size="xsmall">
              positive
            </Badge>
            <Badge color="positive" emphasis="intense" icon={Check} size="small">
              positive
            </Badge>
            <Badge color="positive" emphasis="intense" icon={Check} size="medium">
              positive
            </Badge>
            <Badge color="positive" emphasis="intense" icon={Check} size="large">
              positive
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="negative" emphasis="intense" icon={X} size="xsmall">
              negative
            </Badge>
            <Badge color="negative" emphasis="intense" icon={X} size="small">
              negative
            </Badge>
            <Badge color="negative" emphasis="intense" icon={X} size="medium">
              negative
            </Badge>
            <Badge color="negative" emphasis="intense" icon={X} size="large">
              negative
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="notice" emphasis="intense" icon={AlertTriangle} size="xsmall">
              notice
            </Badge>
            <Badge color="notice" emphasis="intense" icon={AlertTriangle} size="small">
              notice
            </Badge>
            <Badge color="notice" emphasis="intense" icon={AlertTriangle} size="medium">
              notice
            </Badge>
            <Badge color="notice" emphasis="intense" icon={AlertTriangle} size="large">
              notice
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="information" emphasis="intense" icon={Info} size="xsmall">
              information
            </Badge>
            <Badge color="information" emphasis="intense" icon={Info} size="small">
              information
            </Badge>
            <Badge color="information" emphasis="intense" icon={Info} size="medium">
              information
            </Badge>
            <Badge color="information" emphasis="intense" icon={Info} size="large">
              information
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="neutral" emphasis="intense" size="xsmall">
              neutral
            </Badge>
            <Badge color="neutral" emphasis="intense" size="small">
              neutral
            </Badge>
            <Badge color="neutral" emphasis="intense" size="medium">
              neutral
            </Badge>
            <Badge color="neutral" emphasis="intense" size="large">
              neutral
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge color="primary" emphasis="intense" icon={Zap} size="xsmall">
              primary
            </Badge>
            <Badge color="primary" emphasis="intense" icon={Zap} size="small">
              primary
            </Badge>
            <Badge color="primary" emphasis="intense" icon={Zap} size="medium">
              primary
            </Badge>
            <Badge color="primary" emphasis="intense" icon={Zap} size="large">
              primary
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};
