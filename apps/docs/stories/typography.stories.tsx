import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Foundations/Typography",
};

export default meta;

const familyTokens = [
  { token: "heading", className: "font-heading", label: "Heading (TASA Orbiter)" },
  { token: "sans", className: "font-sans", label: "Sans/Text (Inter)" },
  { token: "mono", className: "font-mono", label: "Mono/Code (Menlo)" },
] as const;

const weightTokens = [
  { token: "regular", className: "font-regular", value: "400" },
  { token: "medium", className: "font-medium", value: "500" },
  { token: "semibold", className: "font-semibold", value: "600" },
  { token: "bold", className: "font-bold", value: "700" },
] as const;

const sizes = [
  "25", "50", "75", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100"
] as const;

export const Families = () => (
  <div className="space-y-6">
    {familyTokens.map(({ token, className, label }) => (
      <div key={token}>
        <p className="font-mono text-xs text-muted-foreground mb-1">
          typography.family.{token} · {className}
        </p>
        <h3 className="text-sm font-semibold text-muted-foreground mb-2">{label}</h3>
        <p className={`${className} text-600`}>The quick brown fox jumps over the lazy dog</p>
      </div>
    ))}
  </div>
);

export const Weights = () => (
  <div className="space-y-4 font-sans">
    {weightTokens.map(({ token, className, value }) => (
      <div key={token}>
        <span className="text-xs text-muted-foreground font-mono block mb-1">
          typography.weight.{token} · {className} · {value}
        </span>
        <p className={`${className} text-300`}>Inter {token.charAt(0).toUpperCase() + token.slice(1)}</p>
      </div>
    ))}
  </div>
);

export const Sizes = () => (
  <div className="space-y-6 font-sans">
    <h2 className="text-500 font-bold border-b border-border pb-2 mb-4 font-heading">Typography Sizes & Line Heights</h2>
    <div className="space-y-6">
      {sizes.map((size) => (
         <div key={size} className="flex flex-col md:flex-row md:items-center border-b border-border pb-4">
          <div className="w-52 shrink-0 mb-1 md:mb-0">
            <p className="font-mono text-xs text-muted-foreground">typography.size.{size}</p>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">text-{size}</p>
          </div>
          <div className="grow">
            <p className={`text-${size} font-heading`}>
              TASA Orbiter text-{size}
            </p>
            <p className={`text-${size} font-sans text-muted-foreground mt-1`}>
              Inter text-{size} - Pack my box with five dozen liquor jugs.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
