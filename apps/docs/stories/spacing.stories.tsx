import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Foundations/Spacing",
};

export default meta;

const spacingTokens = [
  { token: "0", value: "0px", padding: "p-0", gap: "gap-0" },
  { token: "1", value: "2px", padding: "p-1", gap: "gap-1" },
  { token: "2", value: "4px", padding: "p-2", gap: "gap-2" },
  { token: "3", value: "8px", padding: "p-3", gap: "gap-3" },
  { token: "4", value: "12px", padding: "p-4", gap: "gap-4" },
  { token: "5", value: "16px", padding: "p-5", gap: "gap-5" },
  { token: "6", value: "20px", padding: "p-6", gap: "gap-6" },
  { token: "7", value: "24px", padding: "p-7", gap: "gap-7" },
  { token: "8", value: "32px", padding: "p-8", gap: "gap-8" },
  { token: "9", value: "40px", padding: "p-9", gap: "gap-9" },
  { token: "10", value: "48px", padding: "p-10", gap: "gap-10" },
  { token: "11", value: "56px", padding: "p-11", gap: "gap-11" },
] as const;

export const Scale = () => (
  <div className="space-y-6 font-sans">
    <h2 className="text-500 font-bold border-b border-border pb-2 mb-4 font-heading">
      Spacing Scale
    </h2>
    <div className="space-y-4">
      {spacingTokens.map(({ token, value, padding }) => (
        <div
          key={token}
          className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border pb-4"
        >
          <div className="w-52 shrink-0">
            <p className="font-mono text-xs text-muted-foreground">
              theme.spacing.{token}
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">
              {padding} · {value}
            </p>
          </div>
          <div className="flex-1 flex items-center gap-3 min-w-0">
            {token === "0" ? (
              <div className="h-8 flex items-center">
                <span className="text-xs text-muted-foreground font-mono">no spacing</span>
              </div>
            ) : (
              <>
                <div
                  className="h-8 bg-foreground rounded-xsmall shrink-0"
                  style={{ width: value }}
                />
                <div className="flex items-stretch h-8 rounded-small border border-border overflow-hidden">
                  <div className="bg-muted" style={{ width: value }} />
                  <div className="bg-card px-3 flex items-center text-xs text-muted-foreground">
                    content
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Padding = () => (
  <div className="space-y-6 font-sans">
    <h2 className="text-500 font-bold border-b border-border pb-2 mb-4 font-heading">
      Padding Examples
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {spacingTokens
        .filter(({ token }) => token !== "0")
        .map(({ token, value, padding }) => (
          <div key={token} className="flex flex-col gap-2">
            <div className="rounded-medium border border-dashed border-border bg-muted/50 p-1">
              <div className={`bg-card border border-border rounded-small ${padding}`}>
                <div className="bg-foreground/10 rounded-xsmall text-center text-xs text-muted-foreground py-1">
                  {padding}
                </div>
              </div>
            </div>
            <p className="font-mono text-xs text-muted-foreground text-center">{value}</p>
          </div>
        ))}
    </div>
  </div>
);

export const Gap = () => (
  <div className="space-y-6 font-sans">
    <h2 className="text-500 font-bold border-b border-border pb-2 mb-4 font-heading">
      Gap Examples
    </h2>
    <div className="space-y-4">
      {spacingTokens
        .filter(({ token }) => token !== "0")
        .map(({ token, value, gap }) => (
          <div
            key={token}
            className="flex flex-col md:flex-row md:items-center gap-4 border-b border-border pb-4"
          >
            <div className="w-52 shrink-0 font-mono text-xs text-muted-foreground">
              {gap} · {value}
            </div>
            <div className={`flex ${gap}`}>
              <div className="w-12 h-12 bg-foreground/80 rounded-small" />
              <div className="w-12 h-12 bg-foreground/80 rounded-small" />
              <div className="w-12 h-12 bg-foreground/80 rounded-small" />
            </div>
          </div>
        ))}
    </div>
  </div>
);
