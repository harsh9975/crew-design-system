import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderBadge,
  DrawerHeaderIcon,
  type DrawerHeaderColor,
  type DrawerSide,
} from "@acme/ui/drawer";
import { Badge } from "@acme/ui/badge";
import { Button } from "@acme/ui/button";
import { Download, FileText } from "lucide-react";

const inputClassName =
  "mt-1 flex h-9 w-full rounded-small border border-border bg-background px-3 text-100 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/20";

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-75 font-medium leading-75 text-foreground">{label}</span>
      <input className={inputClassName} type={type} placeholder={placeholder} />
    </label>
  );
}

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["right", "left", "top", "bottom"],
    },
    showOverlay: {
      control: "boolean",
    },
    isLazy: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

function DrawerExample({
  side = "right",
  showOverlay = true,
  headerColor = "information" as DrawerHeaderColor,
  withFooter = false,
}: {
  side?: DrawerSide;
  showOverlay?: boolean;
  headerColor?: DrawerHeaderColor;
  withFooter?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Toggle Drawer</Button>
      <Drawer
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        showOverlay={showOverlay}
        side={side}
      >
        <DrawerHeader
          title="Payment Details"
          subtitle="Review and update payment information"
          color={headerColor}
          titleSuffix={<Badge color="positive">New</Badge>}
          trailing={
            <Button
              variant="tertiary"
              color="primary"
              size="small"
              icon={Download}
              accessibilityLabel="Download"
            />
          }
        />
        <DrawerBody>
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-200 font-semibold leading-200 text-foreground">
              Acme Corporation
            </h3>
            <Badge color="information" size="small">
              Partner
            </Badge>
          </div>
          <div className="mt-6 space-y-4">
            <Field label="Email" type="email" placeholder="Enter your email" />
            <Field label="Phone Number" type="tel" placeholder="Enter your phone number" />
          </div>
          {!withFooter ? (
            <div className="mt-8 flex gap-2">
              <Button variant="primary" color="primary" size="small">
                Confirm
              </Button>
              <Button variant="secondary" color="primary" size="small">
                Invite
              </Button>
            </div>
          ) : null}
        </DrawerBody>
        {withFooter ? (
          <DrawerFooter showDivider>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" color="primary" size="small" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" color="primary" size="small">
                Confirm
              </Button>
            </div>
          </DrawerFooter>
        ) : null}
      </Drawer>
    </div>
  );
}

export const Default: Story = {
  render: () => <DrawerExample />,
};

export const WithFooter: Story = {
  render: () => <DrawerExample withFooter />,
};

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <DrawerExample side="right" />
      <DrawerExample side="left" />
      <DrawerExample side="top" />
      <DrawerExample side="bottom" />
    </div>
  ),
};

export const HeaderColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(["information", "positive", "notice", "negative", "neutral"] as DrawerHeaderColor[]).map(
        (color) => (
          <DrawerExample key={color} headerColor={color} />
        )
      )}
    </div>
  ),
};

export const NoOverlay: Story = {
  render: () => <DrawerExample showOverlay={false} />,
};

export const Showcase: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <Drawer isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
          <DrawerHeader
            title="Document Review"
            subtitle="Preview and approve the latest draft"
            leading={<DrawerHeaderIcon icon={FileText} />}
            titleSuffix={<DrawerHeaderBadge color="notice">Draft</DrawerHeaderBadge>}
            trailing={
              <Button
                variant="tertiary"
                color="primary"
                size="small"
                icon={Download}
                accessibilityLabel="Download document"
              />
            }
            showDivider
          />
          <DrawerBody>
            <p className="text-100 leading-200 text-muted-foreground">
              Drawers slide in from any edge and keep focus trapped while open. Use them for
              secondary workflows that need more space than a modal without leaving the page.
            </p>
          </DrawerBody>
          <DrawerFooter showDivider>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" color="primary" size="small" onClick={() => setIsOpen(false)}>
                Dismiss
              </Button>
              <Button variant="primary" color="primary" size="small">
                Approve
              </Button>
            </div>
          </DrawerFooter>
        </Drawer>
      </div>
    );
  },
};
