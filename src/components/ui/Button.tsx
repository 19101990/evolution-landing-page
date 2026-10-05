import React from "react"

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "outline";
    className?: string;
    download?: boolean;
}

export function Button({
    children,
    href = "/Zaprogramuj swoją ewolucję - Igor Kiełbowski.pdf",
    variant = "primary",
    className = "",
    download = true,
}: ButtonProps) {
    const baseStyles =
    "inline-flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase transition-all duration-200 rounded active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[#FF6B00] hover:bg-[#ff7b1a] text-black shadow-lg shadow-orange-950/40 hover:shadow-orange-600/30",
    outline:
      "border border-cyan-500/40 bg-cyan-950/20 text-cyan-400 hover:bg-cyan-500/20",
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if(href) {
    return (
        <a
            href={href}
            download={download}
            className={combinedStyles}
        >
                    {children}
        </a>
    )
  }

  return <button className={combinedStyles}>{children}</button>
}