import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BaseFilterChip } from "@acme/ui/base-filter-chip";

const meta: Meta<typeof BaseFilterChip> = {
  title: "Components/BaseFilterChip",
  component: BaseFilterChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    selectionType: {
      control: "select",
      options: ["single", "multiple"],
    },
    isDisabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseFilterChip>;

export const Default: Story = {
  args: {
    label: "Date",
    value: "22/04/1999 - 14/02/2025",
    selectionType: "single",
    isDisabled: false,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <BaseFilterChip label="Date" value="22/04/1999 - 14/02/2025" />
      <BaseFilterChip label="Unselected Chip" />
      <BaseFilterChip
        label="Phone Numbers"
        selectionType="multiple"
        value={["9999999999", "0000000000"]}
      />
      <BaseFilterChip
        label="Disabled"
        selectionType="multiple"
        value={["9999999999", "0000000000"]}
        isDisabled
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [dateValue, setDateValue] = React.useState<string | undefined>(
      "22/04/1999 - 14/02/2025"
    );
    const [phoneValues, setPhoneValues] = React.useState<string[]>([
      "9999999999",
      "0000000000",
    ]);

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <BaseFilterChip
            label="Date"
            value={dateValue}
            onClick={() => console.log("Open date filter")}
            onClear={() => setDateValue(undefined)}
          />
          <BaseFilterChip
            label="Phone Numbers"
            selectionType="multiple"
            value={phoneValues}
            onClick={() => console.log("Open phone filter")}
            onClear={() => setPhoneValues([])}
          />
          <BaseFilterChip
            label="Unselected Chip"
            onClick={() => console.log("Open unselected filter")}
          />
        </div>
        <p className="text-75 text-muted-foreground">
          Click the clear button on a chip to reset its value. Check the console for open clicks.
        </p>
      </div>
    );
  },
};
