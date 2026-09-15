import React from "react";

function Pre({ load }) {
  if (!load) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#030712",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "3px solid rgba(56, 189, 248, 0.15)",
          borderTopColor: "#38bdf8",
          borderRightColor: "#a855f7",
          animation: "spin-loader 0.8s linear infinite",
          boxShadow: "0 0 25px rgba(56, 189, 248, 0.4)",
        }}
      />
      <style>{`
        @keyframes spin-loader {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.9rem",
          color: "#7dd3fc",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Initializing Cyber Experience...
      </div>
    </div>
  );
}

export default Pre;
