import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ToastProvider, useToast } from "@acme/ui/toast";
import { Button } from "@acme/ui/button";

const meta: Meta = {
  title: "Components/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;

function ToastDemo() {
  const { addToast } = useToast();

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Toast Notifications</h2>
        <p className="text-sm text-muted-foreground">
          Click the buttons below to trigger toast notifications
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="mb-3 text-sm font-medium">Subtle (Light) Toasts</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  title: "Payment Successful",
                  description: "Your payment has been processed successfully.",
                  color: "information",
                  emphasis: "subtle",
                  position: "top-right",
                })
              }
            >
              Information Toast
            </Button>

            <Button
              variant="primary"
              color="positive"
              size="small"
              onClick={() =>
                addToast({
                  title: "Success!",
                  description: "Your changes have been saved.",
                  color: "positive",
                  emphasis: "subtle",
                  position: "top-right",
                })
              }
            >
              Success Toast
            </Button>

            <Button
              variant="primary"
              color="negative"
              size="small"
              onClick={() =>
                addToast({
                  title: "Error",
                  description: "Something went wrong. Please try again.",
                  color: "negative",
                  emphasis: "subtle",
                  position: "top-right",
                })
              }
            >
              Error Toast
            </Button>

            <Button
              variant="primary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  title: "Warning",
                  description: "This action cannot be undone.",
                  color: "notice",
                  emphasis: "subtle",
                  position: "top-right",
                })
              }
            >
              Warning Toast
            </Button>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium">Intense (Solid) Toasts</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  title: "New Update Available",
                  description: "Version 2.0 is ready to install.",
                  color: "primary",
                  emphasis: "intense",
                  position: "top-right",
                })
              }
            >
              Intense Primary
            </Button>

            <Button
              variant="primary"
              color="positive"
              size="small"
              onClick={() =>
                addToast({
                  title: "Upload Complete",
                  description: "All files have been uploaded successfully.",
                  color: "positive",
                  emphasis: "intense",
                  position: "top-right",
                })
              }
            >
              Intense Success
            </Button>

            <Button
              variant="primary"
              color="negative"
              size="small"
              onClick={() =>
                addToast({
                  title: "Critical Error",
                  description: "Failed to connect to the server.",
                  color: "negative",
                  emphasis: "intense",
                  position: "top-right",
                })
              }
            >
              Intense Error
            </Button>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium">With Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  title: "New Message",
                  description: "You have a new message from John Doe.",
                  color: "information",
                  emphasis: "subtle",
                  position: "top-right",
                  actions: {
                    primary: {
                      text: "View",
                      onClick: () => alert("View clicked"),
                    },
                    secondary: {
                      text: "Dismiss",
                      onClick: () => {},
                    },
                  },
                })
              }
            >
              Toast with Actions
            </Button>

            <Button
              variant="secondary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  description: "This is a compact toast without a title.",
                  color: "neutral",
                  emphasis: "subtle",
                  position: "top-right",
                  duration: 3000,
                })
              }
            >
              Compact Toast
            </Button>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium">Different Positions</h3>
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="secondary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  description: "Top Left Toast",
                  color: "primary",
                  emphasis: "subtle",
                  position: "top-left",
                  duration: 3000,
                })
              }
            >
              Top Left
            </Button>

            <Button
              variant="secondary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  description: "Top Center Toast",
                  color: "primary",
                  emphasis: "subtle",
                  position: "top-center",
                  duration: 3000,
                })
              }
            >
              Top Center
            </Button>

            <Button
              variant="secondary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  description: "Top Right Toast",
                  color: "primary",
                  emphasis: "subtle",
                  position: "top-right",
                  duration: 3000,
                })
              }
            >
              Top Right
            </Button>

            <Button
              variant="secondary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  description: "Bottom Left Toast",
                  color: "primary",
                  emphasis: "subtle",
                  position: "bottom-left",
                  duration: 3000,
                })
              }
            >
              Bottom Left
            </Button>

            <Button
              variant="secondary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  description: "Bottom Center Toast",
                  color: "primary",
                  emphasis: "subtle",
                  position: "bottom-center",
                  duration: 3000,
                })
              }
            >
              Bottom Center
            </Button>

            <Button
              variant="secondary"
              color="primary"
              size="small"
              onClick={() =>
                addToast({
                  description: "Bottom Right Toast",
                  color: "primary",
                  emphasis: "subtle",
                  position: "bottom-right",
                  duration: 3000,
                })
              }
            >
              Bottom Right
            </Button>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium">Test Stacking Animation</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              color="primary"
              size="medium"
              onClick={() => {
                // Add 5 toasts quickly to demonstrate stacking
                const messages = [
                  "First notification",
                  "Second notification",
                  "Third notification",
                  "Fourth notification",
                  "Fifth notification",
                ];
                messages.forEach((msg, i) => {
                  setTimeout(() => {
                    addToast({
                      title: `Notification ${i + 1}`,
                      description: msg,
                      color: "information",
                      emphasis: "subtle",
                      position: "top-right",
                      duration: 8000,
                    });
                  }, i * 200);
                });
              }}
            >
              Trigger 5 Stacked Toasts
            </Button>

            <Button
              variant="primary"
              color="positive"
              size="medium"
              onClick={() => {
                // Add multiple different toasts
                const toasts = [
                  { title: "Upload Started", description: "Uploading file.pdf...", color: "information" as const },
                  { title: "Processing", description: "Analyzing document...", color: "primary" as const },
                  { title: "Almost Done", description: "Finalizing upload...", color: "notice" as const },
                ];
                toasts.forEach((toast, i) => {
                  setTimeout(() => {
                    addToast({
                      ...toast,
                      emphasis: "subtle",
                      position: "bottom-right",
                      duration: 10000,
                    });
                  }, i * 500);
                });
              }}
            >
              Simulate Upload Process
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Click to see multiple toasts stack with smooth animation. Maximum 3 visible at once.
          </p>
        </div>
      </div>
    </div>
  );
}

export const Demo: StoryObj = {
  render: () => <ToastDemo />,
};
