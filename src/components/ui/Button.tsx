import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "px-8 py-3 rounded-full font-medium text-sm transition-colors";
  const variants = {
    primary: "bg-accent text-foreground hover:bg-accent-hover",
    outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
