import React from "react";

const ALLOWED = ["FACT", "CONSENSUS", "HYPOTHESIS", "INFERENCE"];

export function EvidenceLabel({ type = "FACT" }) {
  const value = ALLOWED.includes(type) ? type : "FACT";
  const accent = value === "HYPOTHESIS" || value === "INFERENCE";

  return (
    <span style={{
      display: "inline-flex",
      padding: "0.3em 0.55em",
      border: "1px solid #F2F2F3",
      background: "#0A0A0A",
      color: accent ? "#C0413F" : "#F2F2F3",
      fontFamily: '"Barlow Condensed", sans-serif',
      fontWeight: 900,
      textTransform: "uppercase"
    }}>
      {value}
    </span>
  );
}
