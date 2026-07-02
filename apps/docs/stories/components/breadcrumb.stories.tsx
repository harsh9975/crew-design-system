import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "@acme/ui/breadcrumb";
import { Home, FileText, FolderOpen, Settings } from "lucide-react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["neutral", "primary", "white"],
    },
    showLastSeparator: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    size: "medium",
    color: "primary",
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem icon={Home} href="/home" accessibilityLabel="Home" />
      <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
      <BreadcrumbItem isCurrentPage href="/settlements">
        Settlements
      </BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Small</h3>
        <Breadcrumb size="small">
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Medium (Default)</h3>
        <Breadcrumb size="medium">
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Large</h3>
        <Breadcrumb size="large">
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="p-4 rounded-large border border-border">
        <h3 className="mb-4 text-sm font-semibold">Primary (Default)</h3>
        <Breadcrumb color="primary">
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="p-4 rounded-large border border-border">
        <h3 className="mb-4 text-sm font-semibold">Neutral</h3>
        <Breadcrumb color="neutral">
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="p-4 rounded-large bg-neutral-900">
        <h3 className="mb-4 text-sm font-semibold text-white">White</h3>
        <Breadcrumb color="white">
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Icon Only First Item</h3>
        <Breadcrumb>
          <BreadcrumbItem icon={Home} href="/home" accessibilityLabel="Home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">All Items with Icons</h3>
        <Breadcrumb>
          <BreadcrumbItem icon={Home} href="/home">Home</BreadcrumbItem>
          <BreadcrumbItem icon={FolderOpen} href="/projects">Projects</BreadcrumbItem>
          <BreadcrumbItem icon={FileText} isCurrentPage>Document.pdf</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Mixed Icons and Text</h3>
        <Breadcrumb>
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem icon={Settings} href="/settings">Settings</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Account</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const WithLastSeparator: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Without Last Separator (Default)</h3>
        <Breadcrumb showLastSeparator={false}>
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">With Last Separator</h3>
        <Breadcrumb showLastSeparator={true}>
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Text Separator</h3>
        <Breadcrumb separator={<span className="text-neutral-400">/</span>}>
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Dot Separator</h3>
        <Breadcrumb separator={<span className="text-neutral-400">•</span>}>
          <BreadcrumbItem href="/home">Home</BreadcrumbItem>
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};

export const LongBreadcrumbs: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Many Items</h3>
        <Breadcrumb>
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
          <BreadcrumbItem href="/project-a">Project A</BreadcrumbItem>
          <BreadcrumbItem href="/documents">Documents</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Annual Report 2024</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="max-w-md">
        <h3 className="mb-4 text-sm font-semibold">Wrapped in Container</h3>
        <Breadcrumb>
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/projects">Projects</BreadcrumbItem>
          <BreadcrumbItem href="/project-a">Project A</BreadcrumbItem>
          <BreadcrumbItem href="/documents">Documents</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Annual Report 2024</BreadcrumbItem>
        </Breadcrumb>
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
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Small</p>
            <Breadcrumb size="small" color="primary">
              <BreadcrumbItem icon={Home} href="/home" />
              <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Medium</p>
            <Breadcrumb size="medium" color="primary">
              <BreadcrumbItem icon={Home} href="/home" />
              <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Large</p>
            <Breadcrumb size="large" color="primary">
              <BreadcrumbItem icon={Home} href="/home" />
              <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-large border border-border">
        <h3 className="mb-6 text-lg font-semibold">Color Comparison</h3>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Primary</p>
            <Breadcrumb color="primary">
              <BreadcrumbItem icon={Home} href="/home" />
              <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">Neutral</p>
            <Breadcrumb color="neutral">
              <BreadcrumbItem icon={Home} href="/home" />
              <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-large bg-neutral-900">
        <h3 className="mb-6 text-lg font-semibold text-white">White on Dark Background</h3>
        <Breadcrumb color="white">
          <BreadcrumbItem icon={Home} href="/home" />
          <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Settlements</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
};
