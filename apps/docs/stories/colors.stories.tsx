import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Foundations/Colors",
};

export default meta;

const colorScales = [
  { name: "brand", label: "Brand (Purple)" },
  { name: "neutral", label: "Neutral" },
  { name: "positive", label: "Positive (Green)" },
  { name: "negative", label: "Negative (Red)" },
  { name: "notice", label: "Notice (Amber)" },
  { name: "information", label: "Information (Blue)" },
] as const;

const scaleSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const alertSwatches = [
  { label: "information · subtle", bgClass: "bg-alert-information-subtle-bg", fgClass: "text-alert-information-subtle-fg", token: "alert.information.subtle.bg" },
  { label: "information · intense", bgClass: "bg-alert-information-intense-bg", fgClass: "text-alert-information-intense-fg", token: "alert.information.intense.bg" },
  { label: "negative · subtle", bgClass: "bg-alert-negative-subtle-bg", fgClass: "text-alert-negative-subtle-fg", token: "alert.negative.subtle.bg" },
  { label: "negative · intense", bgClass: "bg-alert-negative-intense-bg", fgClass: "text-alert-negative-intense-fg", token: "alert.negative.intense.bg" },
  { label: "notice · subtle", bgClass: "bg-alert-notice-subtle-bg", fgClass: "text-alert-notice-subtle-fg", token: "alert.notice.subtle.bg" },
  { label: "notice · intense", bgClass: "bg-alert-notice-intense-bg", fgClass: "text-alert-notice-intense-fg", token: "alert.notice.intense.bg" },
  { label: "positive · subtle", bgClass: "bg-alert-positive-subtle-bg", fgClass: "text-alert-positive-subtle-fg", token: "alert.positive.subtle.bg" },
  { label: "positive · intense", bgClass: "bg-alert-positive-intense-bg", fgClass: "text-alert-positive-intense-fg", token: "alert.positive.intense.bg" },
  { label: "neutral · subtle", bgClass: "bg-alert-neutral-subtle-bg", fgClass: "text-alert-neutral-subtle-fg", token: "alert.neutral.subtle.bg" },
  { label: "neutral · intense", bgClass: "bg-alert-neutral-intense-bg", fgClass: "text-alert-neutral-intense-fg", token: "alert.neutral.intense.bg" },
  { label: "primary · subtle", bgClass: "bg-alert-primary-subtle-bg", fgClass: "text-alert-primary-subtle-fg", token: "alert.primary.subtle.bg" },
  { label: "primary · intense", bgClass: "bg-alert-primary-intense-bg", fgClass: "text-alert-primary-intense-fg", token: "alert.primary.intense.bg" },
] as const;

export const ColorScales = () => (
  <div className="space-y-8 font-sans">
    <h2 className="mb-4 border-b border-border pb-2 font-heading text-500 font-bold">
      Color Scales
    </h2>
    {colorScales.map(({ name, label }) => (
      <div key={name} className="space-y-3">
        <h3 className="font-heading text-300 font-semibold">{label}</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">
          {scaleSteps.map((step) => (
            <div key={step} className="space-y-1">
              <div
                className={`h-14 rounded-small border border-border bg-${name}-${step}`}
                style={{ backgroundColor: `var(--color-${name}-${step})` }}
              />
              <p className="font-mono text-50 text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const SurfaceColors = () => (
  <div className="space-y-6 font-sans">
    <h2 className="mb-4 border-b border-border pb-2 font-heading text-500 font-bold">
      Surface & Gradient
    </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {[
        { token: "surface.page", className: "bg-surface-page text-foreground border border-border" },
        { token: "surface.sidebar", className: "bg-surface-sidebar text-foreground border border-border" },
        { token: "surface.card", className: "bg-surface-card text-foreground border border-border" },
      ].map(({ token, className }) => (
        <div key={token} className={`rounded-medium p-5 ${className}`}>
          <p className="font-heading text-200 font-semibold">{token}</p>
        </div>
      ))}
    </div>
    <div
      className="rounded-large p-8 text-foreground"
      style={{
        background: "linear-gradient(180deg, var(--color-gradient-page-from), var(--color-gradient-page-to))",
      }}
    >
      <p className="font-heading text-300 font-semibold">Page Gradient</p>
      <p className="mt-1 font-mono text-75 text-muted-foreground">
        gradient.page.from → gradient.page.to
      </p>
    </div>
  </div>
);

export const AlertIntents = () => (
  <div className="space-y-6 font-sans">
    <h2 className="mb-4 border-b border-border pb-2 font-heading text-500 font-bold">
      Alert Intent Colors
    </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {alertSwatches.map(({ label, bgClass, fgClass, token }) => (
        <div key={label} className={`rounded-medium p-5 ${bgClass} ${fgClass}`}>
          <p className="font-heading text-200 font-semibold capitalize">{label}</p>
          <p className="mt-1 font-mono text-75 opacity-80">{token}</p>
        </div>
      ))}
    </div>
  </div>
);

export const SemanticColors = () => (
  <div className="space-y-6 font-sans">
    <h2 className="mb-4 border-b border-border pb-2 font-heading text-500 font-bold">
      Semantic Surface Colors
    </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {[
        { token: "background", className: "bg-background text-foreground border border-border" },
        { token: "foreground", className: "bg-foreground text-background" },
        { token: "primary", className: "bg-primary text-primary-foreground" },
        { token: "secondary", className: "bg-secondary text-secondary-foreground" },
        { token: "muted", className: "bg-muted text-muted-foreground" },
        { token: "destructive", className: "bg-destructive text-destructive-foreground" },
        { token: "accent", className: "bg-accent text-accent-foreground" },
        { token: "card", className: "bg-card text-card-foreground border border-border" },
        { token: "border", className: "bg-border text-foreground" },
      ].map(({ token, className }) => (
        <div key={token} className={`rounded-medium p-5 ${className}`}>
          <p className="font-heading text-200 font-semibold">{token}</p>
          <p className="mt-1 font-mono text-75 opacity-80">--{token}</p>
        </div>
      ))}
    </div>
  </div>
);

export const LayoutTokens = () => (
  <div className="space-y-6 font-sans">
    <h2 className="mb-4 border-b border-border pb-2 font-heading text-500 font-bold">
      Layout Tokens
    </h2>
    <div className="rounded-medium border border-border bg-muted/30 p-5">
      <p className="font-mono text-xs text-muted-foreground">size.alert-max</p>
      <p className="mt-2 font-mono text-100">584px</p>
      <div className="mt-4 h-3 max-w-alert rounded-xsmall bg-primary/20" />
    </div>
  </div>
);
