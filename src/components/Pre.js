import React, { useState, useEffect } from "react";

function Pre({ load }) {
  const [progress, setProgress] = useState(12);
  const [statusText, setStatusText] = useState("INITIALIZING NEURAL CORE...");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        // Smooth progressive increments
        const jump = Math.floor(Math.random() * 14) + 8;
        const next = prev + jump;
        return next >= 100 ? 100 : next;
      });
    }, 85);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (progress < 30) {
      setStatusText("INITIALIZING NEURAL CORE...");
    } else if (progress < 65) {
      setStatusText("LOADING FULL STACK & AI ENGINE...");
    } else if (progress < 95) {
      setStatusText("SYNCING SOURABH BHAKAR WORKSPACE...");
    } else {
      setStatusText("SYSTEM READY // WELCOME");
    }
  }, [progress]);

  useEffect(() => {
    if (!load) {
      const exitTimer = setTimeout(() => {
        setVisible(false);
      }, 400);
      return () => clearTimeout(exitTimer);
    }
  }, [load]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(ellipse at center, #091226 0%, #030712 70%)",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        opacity: load ? 1 : 0,
        transform: load ? "scale(1)" : "scale(1.04)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: load ? "all" : "none",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {/* Background Cyber Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Center Holographic Reactor Unit */}
      <div
        style={{
          position: "relative",
          width: "120px",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer Orbit Ring (Electric Violet CCW) */}
        <div
          style={{
            position: "absolute",
            width: "116px",
            height: "116px",
            borderRadius: "50%",
            border: "2px dashed rgba(168, 85, 247, 0.4)",
            borderTopColor: "#a855f7",
            borderLeftColor: "#c084fc",
            animation: "pre-spin-ccw 3s linear infinite",
          }}
        />

        {/* Inner Laser Ring (Neon Cyan CW) */}
        <div
          style={{
            position: "absolute",
            width: "92px",
            height: "92px",
            borderRadius: "50%",
            border: "2px solid rgba(56, 189, 248, 0.15)",
            borderTopColor: "#38bdf8",
            borderRightColor: "#38bdf8",
            animation: "pre-spin-cw 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.35)",
          }}
        />

        {/* Center Monogram Glowing Core */}
        <div
          style={{
            position: "relative",
            width: "64px",
            height: "64px",
            borderRadius: "18px",
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(3, 7, 18, 0.95) 100%)",
            border: "1px solid rgba(56, 189, 248, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 30px rgba(56, 189, 248, 0.3), inset 0 0 15px rgba(56, 189, 248, 0.2)",
            animation: "pre-pulse 2s ease-in-out infinite",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/logo.png"
            alt="SB Logo Core"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Progress Metric & Status */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "280px",
          maxWidth: "85vw",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Terminal Header & Percentage */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.82rem",
            color: "#94a3b8",
            fontWeight: "600",
          }}
        >
          <span style={{ color: "#38bdf8", letterSpacing: "0.05em" }}>
            SOURABH // DEV
          </span>
          <span style={{ color: "#ffffff", fontFamily: "var(--font-mono)" }}>
            {progress}%
          </span>
        </div>

        {/* Glowing Progress Bar Track */}
        <div
          style={{
            width: "100%",
            height: "5px",
            background: "rgba(255, 255, 255, 0.08)",
            borderRadius: "9999px",
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(56, 189, 248, 0.2)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg, #38bdf8 0%, #a855f7 100%)",
              borderRadius: "9999px",
              boxShadow: "0 0 12px #38bdf8",
              transition: "width 0.15s ease",
            }}
          />
        </div>

        {/* Dynamic Terminal Subtext */}
        <div
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.74rem",
            color: "#7dd3fc",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            minHeight: "18px",
            marginTop: "2px",
          }}
        >
          &gt; {statusText}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes pre-spin-cw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pre-spin-ccw {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes pre-pulse {
          0%, 100% {
            box-shadow: 0 0 25px rgba(56, 189, 248, 0.3), inset 0 0 15px rgba(56, 189, 248, 0.2);
            border-color: rgba(56, 189, 248, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.3);
            border-color: rgba(168, 85, 247, 0.6);
          }
        }
      `}</style>
    </div>
  );
}

export default Pre;
