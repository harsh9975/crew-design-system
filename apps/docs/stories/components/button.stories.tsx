import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { CreditCard, ArrowRight, Loader2, Sparkles } from "lucide-react"
import { Button, type ButtonProps } from "@acme/ui/button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "tertiary"],
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "negative", "positive", "white"],
    },
    size: {
      control: { type: "radio" },
      options: ["xsmall", "small", "medium", "large"],
    },
    isDisabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    isFullWidth: { control: "boolean" },
    iconPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
  args: {
    variant: "primary",
    color: "primary",
    size: "medium",
    isDisabled: false,
    isLoading: false,
    isFullWidth: false,
    iconPosition: "left",
    type: "button",
    children: "Join now",
  },
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

// 1. Basic Interactive Demo
export const BasicExample: Story = {
  render: (args) => <Button {...args} />,
}

// Reference mockup — Join now + Invite on gradient background
export const MockupReference: Story = {
  name: "🎨 Mockup Reference",
  render: () => (
    <div className="flex min-h-[500px] items-center justify-center p-8">
      <div
        className="w-full max-w-2xl rounded-[32px] p-12"
        style={{
          background:
            "linear-gradient(180deg, #DED8FF 0%, #EADBF1 100%)",
        }}
      >
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-end gap-3">
              <Button variant="secondary" size="medium">
                Invite
              </Button>
              <Button variant="primary" size="medium">
                Join now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Clean button design matching the reference mockup with soft purple gradient background",
      },
    },
  },
}

// Light & dark theme comparison
export const ThemeComparison: Story = {
  name: "🌓 Light & Dark Theme",
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Light Theme
        </h3>
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(180deg, #DED8FF 0%, #EADBF1 100%)",
          }}
        >
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="medium">
              Primary
            </Button>
            <Button variant="secondary" size="medium">
              Secondary
            </Button>
            <Button variant="tertiary" size="medium">
              Tertiary
            </Button>
          </div>
        </div>
      </div>

      <div className="dark">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Dark Theme
        </h3>
        <div className="rounded-2xl bg-neutral-900 p-8">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="medium">
              Primary
            </Button>
            <Button variant="secondary" size="medium">
              Secondary
            </Button>
            <Button variant="tertiary" size="medium">
              Tertiary
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons adapt seamlessly between light and dark themes",
      },
    },
  },
}

// 2. Primary variant in different sizes
export const Primary: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">Primary Button in different sizes</p>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">xsmall</span>
          <Button variant="primary" size="xsmall">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">small</span>
          <Button variant="primary" size="small">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">medium</span>
          <Button variant="primary" size="medium">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">large</span>
          <Button variant="primary" size="large">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 3. Secondary variant in different sizes
export const Secondary: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">Secondary Button in different sizes</p>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">xsmall</span>
          <Button variant="secondary" size="xsmall">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">small</span>
          <Button variant="secondary" size="small">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">medium</span>
          <Button variant="secondary" size="medium">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">large</span>
          <Button variant="secondary" size="large">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 4. Tertiary variant in different sizes
export const Tertiary: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">Tertiary Button in different sizes</p>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">xsmall</span>
          <Button variant="tertiary" size="xsmall">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">small</span>
          <Button variant="tertiary" size="small">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">medium</span>
          <Button variant="tertiary" size="medium">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">large</span>
          <Button variant="tertiary" size="large">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 5. Rendered as Link
export const ButtonAsLink: Story = {
  name: "Button As Link",
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-100 font-bold">Renders an anchor element styled like a Button</p>
      <div className="flex gap-4">
        <Button href="https://razorpay.com" target="_blank" rel="noopener noreferrer">
          I am Link!
        </Button>
        <Button variant="secondary" href="https://razorpay.com" target="_blank">
          Secondary Link
        </Button>
      </div>
    </div>
  ),
}

// 6. Disabled state
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">Primary, Secondary & Tertiary buttons in disabled states</p>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Primary</span>
          <Button variant="primary" isDisabled>
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Secondary</span>
          <Button variant="secondary" isDisabled>
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Tertiary</span>
          <Button variant="tertiary" isDisabled>
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 7. Left Icon
export const LeftIcon: Story = {
  name: "Left Icon",
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">Primary, Secondary & Tertiary buttons with an Icon on Left</p>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Primary</span>
          <Button variant="primary" icon={CreditCard} iconPosition="left">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Secondary</span>
          <Button variant="secondary" icon={CreditCard} iconPosition="left">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Tertiary</span>
          <Button variant="tertiary" icon={CreditCard} iconPosition="left">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 8. Right Icon
export const RightIcon: Story = {
  name: "Right Icon",
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">Primary, Secondary & Tertiary buttons with an Icon on Right</p>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Primary</span>
          <Button variant="primary" icon={ArrowRight} iconPosition="right">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Secondary</span>
          <Button variant="secondary" icon={ArrowRight} iconPosition="right">
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Tertiary</span>
          <Button variant="tertiary" icon={ArrowRight} iconPosition="right">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 9. Icon Only
export const IconOnly: Story = {
  name: "Icon Only",
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">Primary, Secondary & Tertiary buttons with only an Icon</p>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Primary</span>
          <Button variant="primary" icon={CreditCard} />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Secondary</span>
          <Button variant="secondary" icon={CreditCard} />
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="font-mono text-50 text-muted-foreground">Tertiary</span>
          <Button variant="tertiary" icon={CreditCard} />
        </div>
      </div>
    </div>
  ),
}

// 10. Interactive Loading Demo
export const ButtonLoading: Story = {
  name: "Button Loading",
  render: () => {
    const [loading, setLoading] = React.useState(true)
    return (
      <div className="flex flex-col gap-6">
        <p className="text-100 font-bold">
          Loading state for the button with live announce accessibility support
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button isLoading={loading}>Pay Now</Button>
          <Button variant="secondary" isLoading={loading} icon={CreditCard}>
            Pay Now
          </Button>
          <Button variant="tertiary" isLoading={loading} icon={ArrowRight} iconPosition="right">
            Pay Now
          </Button>

          <Button variant="secondary" onClick={() => setLoading(!loading)}>
            Toggle loading
          </Button>
        </div>
        <p className="text-75 text-muted-foreground">
          Open voice over (fn+⌘+F5) to hear loading state being announced when toggled
        </p>
      </div>
    )
  },
}

// 11. Full Width
export const FullWidth: Story = {
  name: "Full Width",
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-[500px]">
      <p className="text-100 font-bold">Primary, Secondary & Tertiary buttons with full width</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1 w-full">
          <span className="font-mono text-50 text-muted-foreground">Primary</span>
          <Button variant="primary" isFullWidth>
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <span className="font-mono text-50 text-muted-foreground">Secondary</span>
          <Button variant="secondary" isFullWidth>
            Pay Now
          </Button>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <span className="font-mono text-50 text-muted-foreground">Tertiary</span>
          <Button variant="tertiary" isFullWidth>
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  ),
}

// 12. Styled Props Demo
export const StyledPropsDemo: Story = {
  name: "StyledProps Responsive Demo",
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-100 font-bold">
        Demonstrating layout and responsive overrides using StyledProps
      </p>
      <div className="border border-dashed border-border p-6 rounded-medium">
        <Button
          margin={3}
          display={{ base: "none", s: "inline-flex" }}
          alignSelf="center"
          icon={Sparkles}
        >
          Hidden on Mobile, Visible from s (640px)
        </Button>

        <div className="mt-4 flex gap-4">
          <Button margin={[2, 4]} variant="secondary">
            Array Margins Shorthand
          </Button>
          <Button margin={{ base: 1, m: 5 }} variant="tertiary">
            Responsive Margins Object
          </Button>
        </div>
      </div>
    </div>
  ),
}
