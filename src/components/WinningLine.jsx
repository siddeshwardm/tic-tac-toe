import React from "react";

export default function WinningLine({ winningLine, winner }) {
  if (!winner || winningLine.length === 0) return null;

  const base = {
    position: "absolute",
    backgroundColor: "#ff5252",
    height: "6px",
    width: "320px",
    top: "50%",
    left: "50%",
    borderRadius: "4px",
    transformOrigin: "center center",
    zIndex: 3,
    transition: "all 0.4s ease-in-out",
  };

  const getLineStyle = () => {
    switch (winningLine.toString()) {
      
      case "0,1,2":
        return { ...base, top: "57px", transform: "translate(-50%, -50%) rotate(0deg)" };
      case "3,4,5":
        return { ...base, top: "167px", transform: "translate(-50%, -50%) rotate(0deg)" };
      case "6,7,8":
        return { ...base, top: "277px", transform: "translate(-50%, -50%) rotate(0deg)" };

      
      case "0,3,6":
        return { ...base, left: "57px", width: "6px", height: "320px", transform: "translate(-50%, -50%) rotate(0deg)" };
      case "1,4,7":
        return { ...base, left: "167px", width: "6px", height: "320px", transform: "translate(-50%, -50%) rotate(0deg)" };
      case "2,5,8":
        return { ...base, left: "277px", width: "6px", height: "320px", transform: "translate(-50%, -50%) rotate(0deg)" };

      
      case "0,4,8":
        return { ...base, transform: "translate(-50%, -50%) rotate(45deg)", width: "450px" };
      case "2,4,6":
        return { ...base, transform: "translate(-50%, -50%) rotate(-45deg)", width: "450px" };
      default:
        return {};
    }
  };

  return <div style={getLineStyle()} />;
}
