/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ariaLabel?: string;
};

type ButtonAsButton = CommonProps & {
  as?: "button";
  type?: "button" | "submit" | "reset";
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

type ButtonAsAnchor = CommonProps & {
  as: "a";
  href: string;
  target?: string;
  rel?: string;
};

export type UniversalButtonProps = ButtonAsButton | ButtonAsAnchor;

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const iconSize = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const baseStyles = {
  root:
    "inline-flex items-center cursor-pointer justify-center rounded-xl font-medium transition-all " +
    "hover:shadow-lg/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
    "disabled:opacity-60 disabled:cursor-not-allowed select-none gap-2",
  sizes: {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  },
  variants: {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
    secondary:
      "bg-transparent text-gray-900 hover:bg-gray-200 border border-gray-300 focus-visible:ring-gray-400",
    ghost:
      "bg-transparent text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  },
};

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  UniversalButtonProps
>(function UniversalButton(props, ref) {
  const {
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
    className,
    children,
    leftIcon,
    rightIcon,
    ariaLabel,
    ...rest
  } = props;

  const isAnchor = (props as ButtonAsAnchor).as === "a";

  const classes = cx(
    baseStyles.root,
    baseStyles.sizes[size],
    (baseStyles.variants as any)[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const iconClass = cx("flex items-center justify-center", iconSize[size]);

  const content = (
    <div className="flex items-center gap-2">
      {loading ? (
        <svg
          className={cx("animate-spin", iconClass)}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.25"
          />
          <path
            d="M22 12a10 10 0 00-10-10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        leftIcon && <span className={iconClass}>{leftIcon}</span>
      )}

      <span className={loading ? "opacity-0" : ""}>{children}</span>

      {!loading && rightIcon && (
        <span className={iconClass}>{rightIcon}</span>
      )}
    </div>
  );

  if (isAnchor) {
    const { href, target, rel, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-label={ariaLabel}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  const { type = "button", onClick, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-label={ariaLabel}
      {...buttonRest}
    >
      {content}
    </button>
  );
});

export default Button;
