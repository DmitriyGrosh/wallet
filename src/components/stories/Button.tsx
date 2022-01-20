import React from "react";
import "./button.scss";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  color: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  color,
  ...props
}: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        `button-color-${color}`,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <span className="typography">{label}</span>
    </button>
  );
};
