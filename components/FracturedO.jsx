import React from "react";

export function FracturedO({ size = 96, title = "Human Backstory fractured O" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={title}>
      <circle cx="50" cy="50" r="34" fill="none" stroke="#F2F2F3" strokeWidth="13" strokeDasharray="170 44" transform="rotate(-43 50 50)" />
      <path d="M72 20 L63 43" stroke="#C0413F" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
