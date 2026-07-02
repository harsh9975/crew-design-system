import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Avatar, AvatarGroup } from "@acme/ui/avatar";
import { Button } from "@acme/ui/button";
import { Building2, Check } from "lucide-react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
    },
    variant: {
      control: "select",
      options: ["circle", "square"],
    },
    color: {
      control: "select",
      options: ["information", "negative", "neutral", "notice", "positive", "primary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "Harish Gautam",
    size: "medium",
    variant: "circle",
    color: "neutral",
  },
};

export const ImageAvatars: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Circle Image Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Harish Gautam"
            size="xsmall"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="small"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="medium"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="large"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="xlarge"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Square Image Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Harish Gautam"
            size="xsmall"
            variant="square"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="small"
            variant="square"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="medium"
            variant="square"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="large"
            variant="square"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
          <Avatar
            name="Harish Gautam"
            size="xlarge"
            variant="square"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
        </div>
      </div>
    </div>
  ),
};

export const LetterAvatars: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Circle Letter Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar name="Harish Gautam" size="xsmall" color="neutral" />
          <Avatar name="Harish Gautam" size="small" color="neutral" />
          <Avatar name="Harish Gautam" size="medium" color="neutral" />
          <Avatar name="Harish Gautam" size="large" color="neutral" />
          <Avatar name="Harish Gautam" size="xlarge" color="neutral" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Square Letter Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar name="Harish Gautam" size="xsmall" variant="square" color="primary" />
          <Avatar name="Harish Gautam" size="small" variant="square" color="primary" />
          <Avatar name="Harish Gautam" size="medium" variant="square" color="primary" />
          <Avatar name="Harish Gautam" size="large" variant="square" color="primary" />
          <Avatar name="Harish Gautam" size="xlarge" variant="square" color="primary" />
        </div>
      </div>
    </div>
  ),
};

export const IconAvatars: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Circle Icon Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar icon={Building2} size="xsmall" color="information" />
          <Avatar icon={Building2} size="small" color="information" />
          <Avatar icon={Building2} size="medium" color="information" />
          <Avatar icon={Building2} size="large" color="information" />
          <Avatar icon={Building2} size="xlarge" color="information" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Square Icon Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar icon={Building2} size="xsmall" variant="square" color="neutral" />
          <Avatar icon={Building2} size="small" variant="square" color="neutral" />
          <Avatar icon={Building2} size="medium" variant="square" color="neutral" />
          <Avatar icon={Building2} size="large" variant="square" color="neutral" />
          <Avatar icon={Building2} size="xlarge" variant="square" color="neutral" />
        </div>
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-sm font-semibold">All Color Variants (Letters)</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Neutral" size="large" color="neutral" />
            <span className="text-xs text-muted-foreground">Neutral</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Primary" size="large" color="primary" />
            <span className="text-xs text-muted-foreground">Primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Information" size="large" color="information" />
            <span className="text-xs text-muted-foreground">Information</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Positive" size="large" color="positive" />
            <span className="text-xs text-muted-foreground">Positive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Negative" size="large" color="negative" />
            <span className="text-xs text-muted-foreground">Negative</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Notice" size="large" color="notice" />
            <span className="text-xs text-muted-foreground">Notice</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">All Color Variants (Icons)</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={Building2} size="large" color="neutral" variant="square" />
            <span className="text-xs text-muted-foreground">Neutral</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={Building2} size="large" color="primary" variant="square" />
            <span className="text-xs text-muted-foreground">Primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={Building2} size="large" color="information" variant="square" />
            <span className="text-xs text-muted-foreground">Information</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={Building2} size="large" color="positive" variant="square" />
            <span className="text-xs text-muted-foreground">Positive</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={Building2} size="large" color="negative" variant="square" />
            <span className="text-xs text-muted-foreground">Negative</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar icon={Building2} size="large" color="notice" variant="square" />
            <span className="text-xs text-muted-foreground">Notice</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Clickable Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Click Me"
            size="large"
            color="primary"
            onClick={() => alert("Avatar clicked!")}
          />
          <Avatar
            name="Hover Me"
            size="large"
            color="positive"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
            onClick={() => alert("Image avatar clicked!")}
          />
          <Avatar
            icon={Building2}
            size="large"
            variant="square"
            color="information"
            onClick={() => alert("Icon avatar clicked!")}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Click on any avatar above</p>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Link Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Link"
            size="large"
            color="primary"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          />
          <Avatar
            name="Profile"
            size="large"
            color="information"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
            href="/profile"
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">These avatars are links (hover to see cursor)</p>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Selected State</h3>
        <div className="flex items-center gap-4">
          <Avatar name="Not Selected" size="large" color="neutral" />
          <Avatar name="Selected" size="large" color="primary" isSelected />
          <Avatar
            name="Selected Image"
            size="large"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
            isSelected
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Selected avatars have a ring</p>
      </div>
    </div>
  ),
};

export const WithAddons: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Top Addon (Status Indicator)</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Online"
            size="large"
            color="neutral"
            topAddon={
              <div className="size-3 rounded-full bg-positive-500 ring-2 ring-background" />
            }
          />
          <Avatar
            name="Busy"
            size="large"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
            topAddon={
              <div className="size-3 rounded-full bg-negative-500 ring-2 ring-background" />
            }
          />
          <Avatar
            name="Away"
            size="large"
            color="primary"
            variant="square"
            topAddon={
              <div className="size-3 rounded-full bg-notice-500 ring-2 ring-background" />
            }
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Bottom Addon (Verification Badge)</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Verified"
            size="large"
            color="primary"
            bottomAddon={
              <div className="flex size-5 items-center justify-center rounded-full bg-positive-500 ring-2 ring-background">
                <Check className="size-3 text-white" />
              </div>
            }
          />
          <Avatar
            name="Premium"
            size="large"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
            bottomAddon={
              <div className="flex size-5 items-center justify-center rounded-full bg-brand-600 ring-2 ring-background">
                <span className="text-[10px] font-bold text-white">★</span>
              </div>
            }
          />
          <Avatar
            icon={Building2}
            size="large"
            variant="square"
            color="information"
            bottomAddon={
              <div className="flex size-5 items-center justify-center rounded-full bg-information-500 ring-2 ring-background">
                <Check className="size-3 text-white" />
              </div>
            }
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Both Top and Bottom Addons</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="VIP User"
            size="xlarge"
            color="primary"
            topAddon={
              <div className="size-4 rounded-full bg-positive-500 ring-2 ring-background" />
            }
            bottomAddon={
              <div className="flex size-6 items-center justify-center rounded-full bg-brand-600 ring-2 ring-background">
                <span className="text-[6px] font-bold text-white">VIP</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  ),
};

export const LoadingAndFallback: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Image Loading (Valid URL)</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Harish Gautam"
            size="large"
            src="https://avatars.githubusercontent.com/u/33349461?v=4"
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Image loads successfully</p>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">Image Error (Falls Back to Initials)</h3>
        <div className="flex items-center gap-4">
          <Avatar
            name="Fallback User"
            size="large"
            color="primary"
            src="https://invalid-url-that-will-fail.com/image.jpg"
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          When image fails to load, it shows initials
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold">No Image, Only Initials</h3>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" size="large" color="positive" />
          <Avatar name="Jane Smith" size="large" color="information" />
          <Avatar name="Bob" size="large" color="notice" />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Different names generate different initials
        </p>
      </div>
    </div>
  ),
};

export const DemoPlayground: Story = {
  render: () => {
    const [clicks, setClicks] = React.useState(0);

    return (
      <div className="flex flex-col gap-8 p-6">
        <div>
          <h2 className="mb-6 text-xl font-semibold">Interactive Avatar Demo</h2>

          <div className="flex flex-col gap-6">
            <div className="rounded-large border border-border bg-surface-card p-6">
              <h3 className="mb-4 text-sm font-semibold">Click Counter</h3>
              <div className="flex items-center gap-6">
                <Avatar
                  name="Click Me"
                  size="xlarge"
                  color="primary"
                  onClick={() => setClicks(clicks + 1)}
                  isSelected={clicks > 0}
                  topAddon={
                    clicks > 0 ? (
                      <div className="flex size-6 items-center justify-center rounded-full bg-positive-500 text-xs font-bold text-white ring-2 ring-background">
                        {clicks}
                      </div>
                    ) : undefined
                  }
                />
                <div>
                  <p className="text-sm font-medium">Clicks: {clicks}</p>
                  <Button
                    size="small"
                    variant="secondary"
                    color="primary"
                    onClick={() => setClicks(0)}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-large border border-border bg-surface-card p-6">
              <h3 className="mb-4 text-sm font-semibold">Avatar Group</h3>
              <div className="flex items-center -space-x-3">
                <Avatar
                  name="Alice Johnson"
                  size="large"
                  color="primary"
                  className="ring-2 ring-background"
                />
                <Avatar
                  name="Bob Smith"
                  size="large"
                  color="positive"
                  className="ring-2 ring-background"
                />
                <Avatar
                  name="Charlie Brown"
                  size="large"
                  color="information"
                  className="ring-2 ring-background"
                />
                <Avatar
                  name="Diana Prince"
                  size="large"
                  color="notice"
                  className="ring-2 ring-background"
                  src="https://avatars.githubusercontent.com/u/33349461?v=4"
                />
                <div className="flex size-12 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-700 ring-2 ring-background dark:bg-neutral-700 dark:text-neutral-100">
                  +5
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Overlapping avatars create a group effect
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
