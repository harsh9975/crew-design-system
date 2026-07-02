import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AvatarGroup } from "@acme/ui/avatar";
import { Button } from "@acme/ui/button";

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {
    size: "medium",
    max: 4,
    avatars: [
      { name: "Alice Johnson", color: "primary" },
      { name: "Bob Smith", color: "positive" },
      { name: "Charlie Brown", color: "information" },
      { name: "Diana Prince", color: "notice" },
      { name: "Eve Wilson", color: "negative" },
    ],
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">XSmall</h3>
        <AvatarGroup
          size="xsmall"
          max={5}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Small</h3>
        <AvatarGroup
          size="small"
          max={5}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Medium (Default)</h3>
        <AvatarGroup
          size="medium"
          max={5}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Large</h3>
        <AvatarGroup
          size="large"
          max={5}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
          ]}
        />
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">XLarge</h3>
        <AvatarGroup
          size="xlarge"
          max={5}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
          ]}
        />
      </div>
    </div>
  ),
};

export const WithImages: Story = {
  render: () => (
    <AvatarGroup
      size="large"
      max={4}
      avatars={[
        { name: "User 1", src: "https://avatars.githubusercontent.com/u/33349461?v=4" },
        { name: "User 2", color: "positive" },
        { name: "User 3", src: "https://avatars.githubusercontent.com/u/33349461?v=4" },
        { name: "User 4", color: "information" },
        { name: "User 5", color: "notice" },
        { name: "User 6", color: "negative" },
      ]}
      onMoreClick={() => alert("Show more users")}
    />
  ),
};

export const MaxLimit: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Max 2 Avatars</h3>
        <AvatarGroup
          size="large"
          max={2}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
          ]}
        />
        <p className="mt-2 text-xs text-muted-foreground">Shows +3 more</p>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Max 4 Avatars</h3>
        <AvatarGroup
          size="large"
          max={4}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
            { name: "Frank Miller", color: "primary" },
            { name: "Grace Lee", color: "positive" },
          ]}
        />
        <p className="mt-2 text-xs text-muted-foreground">Shows +3 more</p>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">All Avatars (No Limit)</h3>
        <AvatarGroup
          size="large"
          max={10}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
          ]}
        />
        <p className="mt-2 text-xs text-muted-foreground">Shows all 5 avatars</p>
      </div>
    </div>
  ),
};

export const SquareVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Square Avatar Group</h3>
        <AvatarGroup
          size="large"
          variant="square"
          max={4}
          avatars={[
            { name: "Alice Johnson", color: "primary" },
            { name: "Bob Smith", color: "positive" },
            { name: "Charlie Brown", color: "information" },
            { name: "Diana Prince", color: "notice" },
            { name: "Eve Wilson", color: "negative" },
            { name: "Frank Miller", color: "primary" },
          ]}
        />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [showAll, setShowAll] = React.useState(false);

    const allUsers = [
      { name: "Alice Johnson", color: "primary" as const },
      { name: "Bob Smith", color: "positive" as const },
      { name: "Charlie Brown", color: "information" as const },
      { name: "Diana Prince", color: "notice" as const, src: "https://avatars.githubusercontent.com/u/33349461?v=4" },
      { name: "Eve Wilson", color: "negative" as const },
      { name: "Frank Miller", color: "primary" as const },
      { name: "Grace Lee", color: "positive" as const },
      { name: "Henry Davis", color: "information" as const },
      { name: "Ivy Chen", color: "notice" as const },
      { name: "Jack Wilson", color: "negative" as const },
    ];

    return (
      <div className="flex flex-col gap-6">
        <div className="rounded-large border border-border bg-surface-card p-6">
          <h3 className="mb-4 text-sm font-semibold">Team Members ({allUsers.length})</h3>
          <AvatarGroup
            size="large"
            avatars={allUsers}
            max={showAll ? 20 : 4}
            onMoreClick={() => setShowAll(!showAll)}
          />
          <div className="mt-4">
            <Button
              size="small"
              variant="secondary"
              color="primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show All"}
            </Button>
          </div>
        </div>
      </div>
    );
  },
};
