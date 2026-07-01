import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Foundations/Typography",
};

export default meta;

export const Families = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">Heading (TASA Orbiter)</h3>
      <p className="font-heading text-600">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">Sans/Text (Inter)</h3>
      <p className="font-sans text-200">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div>
      <h3 className="text-sm font-semibold text-muted-foreground mb-2">Mono/Code (Menlo)</h3>
      <p className="font-mono text-100">The quick brown fox jumps over the lazy dog</p>
    </div>
  </div>
);

export const Weights = () => (
  <div className="space-y-4 font-sans">
    <div>
      <span className="text-xs text-muted-foreground font-mono block mb-1">font-regular (400)</span>
      <p className="font-regular text-300">Inter Regular</p>
    </div>
    <div>
      <span className="text-xs text-muted-foreground font-mono block mb-1">font-medium (500)</span>
      <p className="font-medium text-300">Inter Medium</p>
    </div>
    <div>
      <span className="text-xs text-muted-foreground font-mono block mb-1">font-semibold (600)</span>
      <p className="font-semibold text-300">Inter Semibold</p>
    </div>
    <div>
      <span className="text-xs text-muted-foreground font-mono block mb-1">font-bold (700)</span>
      <p className="font-bold text-300">Inter Bold</p>
    </div>
  </div>
);

const sizes = [
  "25", "50", "75", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100"
] as const;

export const Sizes = () => (
  <div className="space-y-6 font-sans">
    <h2 className="text-500 font-bold border-b border-border pb-2 mb-4 font-heading">Typography Sizes & Line Heights</h2>
    <div className="space-y-6">
      {sizes.map((size) => (
         <div key={size} className="flex flex-col md:flex-row md:items-center border-b border-border pb-4">
          <div className="w-40 shrink-0 font-mono text-xs text-muted-foreground mb-1 md:mb-0">
            Token: text-{size}
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
