import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Container({children, className="", id}: ContainerProps) {
    return (
        <div id={id} className={`max-w-6xl mx-auto px-6 sm:px-8 ${className}`}>
            {children}
        </div>
    );
}