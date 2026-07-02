import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ButtonGroup } from "@acme/ui/button-group";
import { Button } from "@acme/ui/button";
import { RefreshCw, Share2, Download, Plus, ChevronDown, Trash2 } from "lucide-react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: ["xsmall", "small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "positive", "negative", "white"],
    },
    isDisabled: {
      control: "boolean",
    },
    isFullWidth: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary" color="primary" size="small" icon={RefreshCw}>Sync</Button>
      <Button variant="primary" color="primary" size="small" icon={Share2}>Share</Button>
      <Button variant="primary" color="primary" size="small" icon={Download}>Download</Button>
    </ButtonGroup>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Primary</h3>
        <ButtonGroup variant="primary">
          <Button variant="primary" color="primary" size="small" icon={RefreshCw}>Sync</Button>
          <Button variant="primary" color="primary" size="small" icon={Share2}>Share</Button>
          <Button variant="primary" color="primary" size="small" icon={Download}>Download</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Secondary</h3>
        <ButtonGroup variant="secondary">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
          <Button icon={Download}>Download</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Tertiary</h3>
        <ButtonGroup variant="tertiary">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
          <Button icon={Download}>Download</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">XSmall</h3>
        <ButtonGroup size="xsmall">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Small</h3>
        <ButtonGroup size="small">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Medium</h3>
        <ButtonGroup size="medium">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Large</h3>
        <ButtonGroup size="large">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Primary Color</h3>
        <ButtonGroup color="primary">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
          <Button icon={Download}>Download</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Positive Color</h3>
        <ButtonGroup color="positive">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
          <Button icon={Download}>Download</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Negative Color</h3>
        <ButtonGroup color="negative">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
          <Button icon={Download}>Download</Button>
        </ButtonGroup>
      </div>
      <div className="p-6 rounded-large bg-brand-600">
        <h3 className="mb-4 text-sm font-semibold text-white">White Color (on dark background)</h3>
        <ButtonGroup color="white">
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Share2}>Share</Button>
          <Button icon={Download}>Download</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">XSmall</h3>
        <ButtonGroup size="xsmall">
          <Button icon={RefreshCw} />
          <Button icon={Share2} />
          <Button icon={Download} />
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Small</h3>
        <ButtonGroup size="small">
          <Button icon={RefreshCw} />
          <Button icon={Share2} />
          <Button icon={Download} />
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Medium</h3>
        <ButtonGroup size="medium">
          <Button icon={RefreshCw} />
          <Button icon={Share2} />
          <Button icon={Download} />
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Large</h3>
        <ButtonGroup size="large">
          <Button icon={RefreshCw} />
          <Button icon={Share2} />
          <Button icon={Download} />
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Primary Disabled</h3>
        <ButtonGroup variant="primary" isDisabled>
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Trash2}>Delete</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Secondary Disabled</h3>
        <ButtonGroup variant="secondary" isDisabled>
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Trash2}>Delete</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Tertiary Disabled</h3>
        <ButtonGroup variant="tertiary" isDisabled>
          <Button icon={RefreshCw}>Sync</Button>
          <Button icon={Trash2}>Delete</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div>
      <h3 className="mb-4 text-sm font-semibold">Full Width Button Group</h3>
      <ButtonGroup isFullWidth>
        <Button icon={RefreshCw}>Sync</Button>
        <Button icon={Share2}>Share</Button>
        <Button icon={Download}>Download</Button>
      </ButtonGroup>
    </div>
  ),
};

export const SplitButton: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Split Button Pattern</h3>
        <ButtonGroup>
          <Button icon={Plus}>Create Payout</Button>
          <Button icon={ChevronDown} />
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Secondary Split Button</h3>
        <ButtonGroup variant="secondary">
          <Button icon={Plus}>Add Item</Button>
          <Button icon={ChevronDown} />
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const MixedContent: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Text + Icon-Only Mix</h3>
        <ButtonGroup>
          <Button icon={RefreshCw}>Sync Now</Button>
          <Button icon={Share2} />
          <Button icon={Download} />
        </ButtonGroup>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Two Buttons</h3>
        <ButtonGroup variant="secondary">
          <Button>Cancel</Button>
          <Button>Save</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="p-6 rounded-large border border-border">
        <h3 className="mb-6 text-lg font-semibold">Size Comparison</h3>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">XSmall</p>
            <ButtonGroup size="xsmall">
              <Button icon={RefreshCw}>Sync</Button>
              <Button icon={Share2}>Share</Button>
              <Button icon={Download}>Download</Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Small</p>
            <ButtonGroup size="small">
              <Button icon={RefreshCw}>Sync</Button>
              <Button icon={Share2}>Share</Button>
              <Button icon={Download}>Download</Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Medium</p>
            <ButtonGroup size="medium">
              <Button icon={RefreshCw}>Sync</Button>
              <Button icon={Share2}>Share</Button>
              <Button icon={Download}>Download</Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Large</p>
            <ButtonGroup size="large">
              <Button icon={RefreshCw}>Sync</Button>
              <Button icon={Share2}>Share</Button>
              <Button icon={Download}>Download</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-large border border-border">
        <h3 className="mb-6 text-lg font-semibold">Variant Comparison</h3>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Primary</p>
            <ButtonGroup variant="primary">
              <Button icon={RefreshCw}>Sync</Button>
              <Button icon={Share2}>Share</Button>
              <Button icon={Download}>Download</Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Secondary</p>
            <ButtonGroup variant="secondary">
              <Button icon={RefreshCw}>Sync</Button>
              <Button icon={Share2}>Share</Button>
              <Button icon={Download}>Download</Button>
            </ButtonGroup>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Tertiary</p>
            <ButtonGroup variant="tertiary">
              <Button icon={RefreshCw}>Sync</Button>
              <Button icon={Share2}>Share</Button>
              <Button icon={Download}>Download</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  ),
};
