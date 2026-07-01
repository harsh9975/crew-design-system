import type { Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Foundations/Motion",
  tags: ["!autodocs"],
};

export default meta;

const easingTokens = [
  { token: "linear", className: "ease-linear", value: "cubic-bezier(0, 0, 0, 0)" },
  { token: "entrance", className: "ease-entrance", value: "cubic-bezier(0, 0, 0.2, 1)" },
  { token: "exit", className: "ease-exit", value: "cubic-bezier(0.17, 0, 1, 1)" },
  { token: "standard", className: "ease-standard", value: "cubic-bezier(0.3, 0, 0.2, 1)" },
  { token: "emphasized", className: "ease-emphasized", value: "cubic-bezier(0.5, 0, 0, 1)" },
  { token: "overshoot", className: "ease-overshoot", value: "cubic-bezier(0.5, 0, 0.3, 1.5)" },
  { token: "shake", className: "ease-shake", value: "cubic-bezier(1, 0.5, 0, 0.5)" },
] as const;

const durationTokens = [
  { token: "2xquick", className: "duration-2xquick", value: "80ms", ms: 80 },
  { token: "xquick", className: "duration-xquick", value: "160ms", ms: 160 },
  { token: "quick", className: "duration-quick", value: "200ms", ms: 200 },
  { token: "moderate", className: "duration-moderate", value: "280ms", ms: 280 },
  { token: "xmoderate", className: "duration-xmoderate", value: "360ms", ms: 360 },
  { token: "gentle", className: "duration-gentle", value: "480ms", ms: 480 },
  { token: "xgentle", className: "duration-xgentle", value: "640ms", ms: 640 },
  { token: "2xgentle", className: "duration-2xgentle", value: "960ms", ms: 960 },
] as const;

const delayTokens = [
  { token: "2xquick", className: "delay-2xquick", value: "80ms", ms: 80 },
  { token: "xquick", className: "delay-xquick", value: "160ms", ms: 160 },
  { token: "moderate", className: "delay-moderate", value: "280ms", ms: 280 },
  { token: "gentle", className: "delay-gentle", value: "480ms", ms: 480 },
  { token: "xgentle", className: "delay-xgentle", value: "960ms", ms: 960 },
  { token: "long", className: "delay-long", value: "2000ms", ms: 2000 },
  { token: "xlong", className: "delay-xlong", value: "3000ms", ms: 3000 },
  { token: "2xlong", className: "delay-2xlong", value: "5000ms", ms: 5000 },
] as const;

const resizeEasings = [
  { token: "emphasized", className: "ease-emphasized", value: "cubic-bezier(0.5, 0, 0, 1)" },
  { token: "overshoot", className: "ease-overshoot", value: "cubic-bezier(0.5, 0, 0.3, 1.5)" },
] as const;

const motionStyles = `
  @keyframes motion-slide-loop {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(280px); }
  }

  @keyframes motion-scale-loop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.5); }
  }

  @keyframes motion-fade-loop {
    0%, 15%, 85%, 100% { opacity: 0.2; transform: translateY(6px); }
    35%, 65% { opacity: 1; transform: translateY(0); }
  }
`;

function MotionStyles() {
  return <style>{motionStyles}</style>;
}

function MotionTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-border rounded-medium overflow-hidden font-sans">
      {children}
    </div>
  );
}

function MotionRow({
  label,
  sublabel,
  children,
  index,
}: {
  label: string;
  sublabel?: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className={`flex border-b border-border last:border-b-0 ${
        index % 2 === 0 ? "bg-card" : "bg-muted/30"
      }`}
    >
      <div className="w-[42%] min-w-[260px] p-5 flex flex-col justify-center border-r border-border">
        <p className="font-mono text-100 text-foreground">{label}</p>
        {sublabel ? (
          <p className="font-mono text-xs text-muted-foreground mt-1">{sublabel}</p>
        ) : null}
      </div>
      <div className="flex-1 relative h-20 flex items-center px-6">{children}</div>
    </div>
  );
}

function LoopSlide({
  timingFunction,
  duration = "2800ms",
}: {
  timingFunction: string;
  duration?: string;
}) {
  return (
    <div
      className="w-10 h-10 rounded-small bg-primary"
      style={{
        animation: `motion-slide-loop ${duration} ${timingFunction} infinite`,
      }}
    />
  );
}

function LoopScale({
  timingFunction,
  duration = "960ms",
}: {
  timingFunction: string;
  duration?: string;
}) {
  return (
    <div
      className="w-14 h-14 rounded-round bg-primary"
      style={{
        animation: `motion-scale-loop ${duration} ${timingFunction} infinite`,
      }}
    />
  );
}

function LoopFade({ delay }: { delay: string }) {
  return (
    <div
      className="w-full max-w-xs h-10 rounded-small bg-primary"
      style={{
        animation: "motion-fade-loop 2400ms cubic-bezier(0, 0, 0.2, 1) infinite",
        animationDelay: delay,
      }}
    />
  );
}

export const Easings = () => (
  <>
    <MotionStyles />
    <MotionTable>
      {easingTokens.map(({ token, className, value }, index) => (
        <MotionRow
          key={token}
          index={index}
          label={value}
          sublabel={`motion.easing.${token} · ${className}`}
        >
          <LoopSlide timingFunction={value} />
        </MotionRow>
      ))}
    </MotionTable>
  </>
);

export const Durations = () => (
  <>
    <MotionStyles />
    <MotionTable>
      {durationTokens.map(({ token, className, value, ms }, index) => (
        <MotionRow
          key={token}
          index={index}
          label={value}
          sublabel={`motion.duration.${token} · ${className}`}
        >
          <LoopSlide
            timingFunction="cubic-bezier(0.3, 0, 0.2, 1)"
            duration={`${ms * 4}ms`}
          />
        </MotionRow>
      ))}
    </MotionTable>
  </>
);

export const Delays = () => (
  <>
    <MotionStyles />
    <MotionTable>
      {delayTokens.map(({ token, className, value }, index) => (
        <MotionRow
          key={token}
          index={index}
          label={value}
          sublabel={`motion.delay.${token} · ${className}`}
        >
          <LoopFade delay={value} />
        </MotionRow>
      ))}
    </MotionTable>
  </>
);

export const Resize = () => (
  <>
    <MotionStyles />
    <MotionTable>
      {resizeEasings.map(({ token, className, value }, index) => (
        <MotionRow
          key={token}
          index={index}
          label={value}
          sublabel={`motion.easing.${token} · ${className} · duration-gentle`}
        >
          <div className="flex-1 flex items-center justify-center">
            <LoopScale timingFunction={value} duration="960ms" />
          </div>
        </MotionRow>
      ))}
    </MotionTable>
  </>
);
