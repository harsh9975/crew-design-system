import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox, CheckboxGroup } from "@acme/ui/checkbox";
import type { CheckboxSize } from "@acme/ui/checkbox";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/Checkbox",
  component: CheckboxGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    necessityIndicator: {
      control: "select",
      options: ["none", "required", "optional"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    isDisabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  render: () => (
    <CheckboxGroup
      helpText="CheckboxGroup help text"
      label="Checkbox Group"
      necessityIndicator="none"
      orientation="horizontal"
    >
      <Checkbox value="apple">Apple</Checkbox>
      <Checkbox value="mango">Mango</Checkbox>
      <Checkbox value="orange">Orange</Checkbox>
    </CheckboxGroup>
  ),
};

function ShowcaseRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium text-muted-foreground">{title}</p>
      {children}
    </div>
  );
}

function SizeSection({ size }: { size: CheckboxSize }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold capitalize">{size}</h3>
      <div className="grid gap-8 md:grid-cols-3">
        <ShowcaseRow title="Unchecked">
          <Checkbox size={size}>Option</Checkbox>
        </ShowcaseRow>
        <ShowcaseRow title="Checked">
          <Checkbox size={size} defaultChecked>
            Option
          </Checkbox>
        </ShowcaseRow>
        <ShowcaseRow title="Indeterminate">
          <Checkbox size={size} isIndeterminate defaultChecked>
            Option
          </Checkbox>
        </ShowcaseRow>
      </div>
      <div className="grid gap-8 md:grid-cols-4">
        <ShowcaseRow title="Help text">
          <Checkbox size={size} helpText="Help text">
            Option
          </Checkbox>
        </ShowcaseRow>
        <ShowcaseRow title="Disabled">
          <Checkbox size={size} isDisabled>
            Option
          </Checkbox>
        </ShowcaseRow>
        <ShowcaseRow title="Disabled checked">
          <Checkbox size={size} isDisabled defaultChecked>
            Option
          </Checkbox>
        </ShowcaseRow>
        <ShowcaseRow title="Error">
          <Checkbox size={size} validationState="error" errorText="Error text">
            Option
          </Checkbox>
        </ShowcaseRow>
      </div>
    </div>
  );
}

function CheckboxShowcaseComponent() {
  return (
    <div className="flex flex-col gap-10">
      <SizeSection size="small" />
      <SizeSection size="medium" />
      <SizeSection size="large" />
    </div>
  );
}

export const CheckboxShowcase: Story = {
  render: () => <CheckboxShowcaseComponent />,
};

export const VerticalGroup: Story = {
  render: () => (
    <CheckboxGroup
      label="Favorite fruits"
      helpText="Select all that apply"
      orientation="vertical"
      defaultValue={["apple"]}
    >
      <Checkbox value="apple">Apple</Checkbox>
      <Checkbox value="mango">Mango</Checkbox>
      <Checkbox value="orange">Orange</Checkbox>
    </CheckboxGroup>
  ),
};

export const Controlled: Story = {
  render: function ControlledGroup() {
    const [value, setValue] = React.useState<string[]>(["mango"]);

    return (
      <div className="flex flex-col gap-4">
        <CheckboxGroup
          label="Controlled group"
          value={value}
          onChange={setValue}
          orientation="horizontal"
        >
          <Checkbox value="apple">Apple</Checkbox>
          <Checkbox value="mango">Mango</Checkbox>
          <Checkbox value="orange">Orange</Checkbox>
        </CheckboxGroup>
        <p className="text-sm text-muted-foreground">
          Selected: {value.length > 0 ? value.join(", ") : "none"}
        </p>
      </div>
    );
  },
};

export const Indeterminate: Story = {
  render: function IndeterminateExample() {
    const options = ["design", "development", "marketing"];
    const [selected, setSelected] = React.useState<string[]>(["design"]);

    const allSelected = selected.length === options.length;
    const noneSelected = selected.length === 0;
    const isIndeterminate = !allSelected && !noneSelected;

    const toggleAll = (checked: boolean) => {
      if (isIndeterminate) {
        setSelected([...options]);
        return;
      }
      setSelected(checked ? [...options] : []);
    };

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          isIndeterminate={isIndeterminate}
          checked={allSelected}
          onChange={toggleAll}
        >
          Select all
        </Checkbox>
        <CheckboxGroup value={selected} onChange={setSelected} orientation="vertical">
          <Checkbox value="design">Design</Checkbox>
          <Checkbox value="development">Development</Checkbox>
          <Checkbox value="marketing">Marketing</Checkbox>
        </CheckboxGroup>
      </div>
    );
  },
};

export const Standalone: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox defaultChecked helpText="Receive product updates by email">
        Email notifications
      </Checkbox>
      <Checkbox helpText="Show your profile to other team members">Public profile</Checkbox>
    </div>
  ),
};

export const NecessityIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <CheckboxGroup label="Required field" necessityIndicator="required" orientation="vertical">
        <Checkbox value="a">Option A</Checkbox>
        <Checkbox value="b">Option B</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup label="Optional field" necessityIndicator="optional" orientation="vertical">
        <Checkbox value="a">Option A</Checkbox>
        <Checkbox value="b">Option B</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup
        label="With group error"
        necessityIndicator="required"
        errorText="Select at least one option"
        orientation="vertical"
      >
        <Checkbox value="a">Option A</Checkbox>
        <Checkbox value="b">Option B</Checkbox>
      </CheckboxGroup>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-large bg-surface-page p-6">
        <h3 className="mb-4 text-sm font-semibold">Light Mode</h3>
        <CheckboxGroup
          label="Notifications"
          helpText="Choose how you want to be notified"
          orientation="vertical"
          defaultValue={["email"]}
        >
          <Checkbox value="email">Email</Checkbox>
          <Checkbox value="push">Push</Checkbox>
          <Checkbox value="sms">SMS</Checkbox>
        </CheckboxGroup>
      </div>
      <div className="dark rounded-large bg-surface-page p-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Dark Mode</h3>
        <CheckboxGroup
          label="Notifications"
          helpText="Choose how you want to be notified"
          orientation="vertical"
          defaultValue={["email"]}
        >
          <Checkbox value="email">Email</Checkbox>
          <Checkbox value="push">Push</Checkbox>
          <Checkbox value="sms">SMS</Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  ),
};
