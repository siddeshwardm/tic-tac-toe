import React from "react";

export default function Cell({ value, onClick, highlight }) {
  return (
    <div
      className={`cell ${highlight ? "highlight" : ""}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
