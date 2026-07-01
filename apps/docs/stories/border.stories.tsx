import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Foundations/Border",
};

export default meta;

const radiusTokens = [
  { token: "none", className: "rounded-none" },
  { token: "2xsmall", className: "rounded-2xsmall" },
  { token: "xsmall", className: "rounded-xsmall" },
  { token: "small", className: "rounded-small" },
  { token: "medium", className: "rounded-medium" },
  { token: "large", className: "rounded-large" },
  { token: "xlarge", className: "rounded-xlarge" },
  { token: "2xlarge", className: "rounded-2xlarge" },
  { token: "max", className: "rounded-max" },
  { token: "round", className: "rounded-round" },
] as const;

const widthTokens = [
  { token: "none", className: "border-0" },
  { token: "thinner", className: "border-thinner" },
  { token: "thin", className: "border-thin" },
  { token: "thick", className: "border-thick" },
  { token: "thicker", className: "border-thicker" },
] as const;

export const Radius = () => (
  <div className="space-y-6 font-sans">
    <h2 className="text-500 font-bold border-b border-border pb-2 mb-4 font-heading">Border Radius</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {radiusTokens.map(({ token, className }) => (
        <div key={token} className="flex flex-col items-center gap-2">
          <div
            className={`w-20 h-20 bg-muted border border-thin border-border ${className}`}
          />
          <span className="font-mono text-xs text-muted-foreground text-center">
            border.radius.{token}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{className}</span>
        </div>
      ))}
    </div>
  </div>
);

export const Width = () => (
  <div className="space-y-6 font-sans">
    <h2 className="text-500 font-bold border-b border-border pb-2 mb-4 font-heading">Border Width</h2>
    <div className="space-y-6">
      {widthTokens.map(({ token, className }) => (
        <div key={token} className="flex flex-col md:flex-row md:items-center border-b border-border pb-4 gap-4">
          <div className="w-48 shrink-0">
            <p className="font-mono text-xs text-muted-foreground">border.width.{token}</p>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">{className}</p>
          </div>
          <div className={`w-32 h-16 rounded-medium bg-muted ${className} border-border`} />
        </div>
      ))}
    </div>
  </div>
);
