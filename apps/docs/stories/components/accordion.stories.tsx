import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
  GitBranch,
  QrCode,
  RefreshCw,
  Link2,
  MoreHorizontal,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionItemBody,
  AccordionItemHeader,
  type AccordionProps,
} from "@acme/ui/accordion";

const FAQ_ITEMS = [
  {
    icon: GitBranch,
    title: "How can I setup Route?",
    body: "You can set up Route from the dashboard by navigating to Products → Route. Follow the setup wizard to configure your account and start accepting payments through your preferred channels.",
  },
  {
    icon: QrCode,
    title: "How can I setup QR Code?",
    body: "Create a QR code from the dashboard under Products → QR Codes. Download or share the code to start accepting in-person payments instantly.",
  },
  {
    icon: RefreshCw,
    title: "How can I setup Subscriptions?",
    body: "Set up recurring billing from Products → Subscriptions. Define plans, billing cycles, and customer notifications in a few steps.",
  },
  {
    icon: Link2,
    title: "How can I setup Payment Links?",
    body: "Generate shareable payment links from the dashboard. Customize amount, description, and expiry before sending to customers.",
  },
  {
    icon: MoreHorizontal,
    title: "How can I setup more products?",
    body: "Explore additional products from the Products menu. Each product includes guided setup and documentation to get you started quickly.",
  },
] as const;

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["filled", "transparent"],
    },
    size: {
      control: { type: "radio" },
      options: ["medium", "large"],
    },
    showNumberPrefix: { control: "boolean" },
    defaultExpandedIndex: { control: { type: "number", min: 0, max: 4 } },
  },
  args: {
    variant: "transparent",
    size: "large",
    showNumberPrefix: false,
    defaultExpandedIndex: 0,
  },
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

function renderFaqAccordion(props: Partial<AccordionProps> = {}) {
  return (
    <Accordion defaultExpandedIndex={0} {...props}>
      {FAQ_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <AccordionItem key={item.title}>
            <AccordionItemHeader
              title={item.title}
              leading={<Icon strokeWidth={1.75} />}
            />
            <AccordionItemBody>{item.body}</AccordionItemBody>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

const BODY_COPY =
  "Transfer money to customers from the dashboard or using APIs to automate payouts.";

const SAMPLE_HEADER = {
  title: "Header Title",
  subtitle: "Header Subtitle",
  label: "Label",
  link: { text: "Link", href: "#" },
} as const;

function renderSampleItems(options?: {
  leadingIcons?: React.ReactNode[];
}) {
  return Array.from({ length: 5 }, (_, index) => (
    <AccordionItem key={index}>
      <AccordionItemHeader
        {...SAMPLE_HEADER}
        leading={options?.leadingIcons?.[index]}
      />
      <AccordionItemBody>{BODY_COPY}</AccordionItemBody>
    </AccordionItem>
  ));
}

function renderAccordion(props: Partial<AccordionProps> = {}, options?: {
  leadingIcons?: React.ReactNode[];
}) {
  return (
    <Accordion defaultExpandedIndex={0} {...props}>
      {renderSampleItems(options)}
    </Accordion>
  );
}

export const BasicExample: Story = {
  render: (args) => renderFaqAccordion(args),
  parameters: {
    docs: {
      source: {
        code: `import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemBody,
} from "@acme/ui/accordion";
import { GitBranch } from "lucide-react";

<Accordion defaultExpandedIndex={0} variant="transparent" size="large">
  <AccordionItem>
    <AccordionItemHeader
      title="How can I setup Route?"
      leading={<GitBranch strokeWidth={1.75} />}
    />
    <AccordionItemBody>
      You can set up Route from the dashboard by navigating to Products.
    </AccordionItemBody>
  </AccordionItem>
</Accordion>`,
      },
    },
  },
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
      <div>
        <p className="mb-3 font-mono text-xs text-muted-foreground">transparent · large</p>
        {renderFaqAccordion({ variant: "transparent", size: "large" })}
      </div>
      <div>
        <p className="mb-3 font-mono text-xs text-muted-foreground">transparent · medium</p>
        {renderFaqAccordion({ variant: "transparent", size: "medium" })}
      </div>
      <div>
        <p className="mb-3 font-mono text-xs text-muted-foreground">filled · large</p>
        {renderAccordion({ variant: "filled", size: "large" })}
      </div>
      <div>
        <p className="mb-3 font-mono text-xs text-muted-foreground">filled · medium</p>
        {renderAccordion({ variant: "filled", size: "medium" })}
      </div>
    </div>
  ),
};

export const WithShowNumberPrefix: Story = {
  render: () => renderFaqAccordion({ showNumberPrefix: true }),
};

export const WithIcons: Story = {
  render: () => renderFaqAccordion(),
};

export const UsageExample: Story = {
  name: "Usage",
  parameters: {
    docs: {
      source: {
        code: `import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemBody,
} from "@acme/ui/accordion";
import { GitBranch } from "lucide-react";

<Accordion
  defaultExpandedIndex={0}
  variant="transparent"
  size="large"
  onExpandChange={({ expandedIndex }) => {
    console.log("expanded:", expandedIndex);
  }}
>
  <AccordionItem>
    <AccordionItemHeader
      title="How can I setup Route?"
      leading={<GitBranch strokeWidth={1.75} />}
    />
    <AccordionItemBody>
      You can set up Route from the dashboard.
    </AccordionItemBody>
  </AccordionItem>

  <AccordionItem isDisabled>
    <AccordionItemHeader title="Disabled item" />
    <AccordionItemBody>Disabled content</AccordionItemBody>
  </AccordionItem>
</Accordion>`,
      },
    },
  },
  render: () => (
    <Accordion
      defaultExpandedIndex={0}
      variant="transparent"
      size="large"
      onExpandChange={({ expandedIndex }) => {
        // eslint-disable-next-line no-console -- story demo
        console.log("expanded:", expandedIndex);
      }}
    >
      <AccordionItem>
        <AccordionItemHeader
          title={FAQ_ITEMS[0].title}
          leading={<GitBranch strokeWidth={1.75} />}
        />
        <AccordionItemBody>{FAQ_ITEMS[0].body}</AccordionItemBody>
      </AccordionItem>
      <AccordionItem isDisabled>
        <AccordionItemHeader title="Disabled item" />
        <AccordionItemBody>Disabled content</AccordionItemBody>
      </AccordionItem>
      {FAQ_ITEMS.slice(1).map((item) => {
        const Icon = item.icon;
        return (
          <AccordionItem key={item.title}>
            <AccordionItemHeader
              title={item.title}
              leading={<Icon strokeWidth={1.75} />}
            />
            <AccordionItemBody>{item.body}</AccordionItemBody>
          </AccordionItem>
        );
      })}
    </Accordion>
  ),
};
