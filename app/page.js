export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        padding: "16px",
        paddingTop: "20px", // ⬅️ махнахме голямото разстояние
      }}
    >
      {/* LOGO */}
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "320px", // ⬅️ РЕАЛНО увеличение
          height: "auto",
          marginBottom: "10px",
          marginTop: "0px",
          filter: "drop-shadow(0 0 40px rgba(212,175,55,0.45))",
        }}
      />

      {/* TITLE */}
      <div
        style={{
          color: "#D4AF37",
          fontSize: "48px",
          letterSpacing: "4px",
          fontWeight: "bold",
          margin: 0,
          lineHeight: 1,
        }}
      >
        REBORN
      </div>

      {/* SUBTITLE */}
      <div
        style={{
          marginTop: "6px",
          fontSize: "16px",
          color: "#aaa",
          marginBottom: "24px",
        }}
      >
        Rebuild the System
      </div>

      {/* CARD */}
      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(181,140,74,0.3)",
          borderRadius: "20px",
          padding: "26px 20px",
          width: "100%",
          maxWidth: "340px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            color: "#b58c4a",
            marginBottom: "16px",
            fontSize: "28px",
          }}
        >
          Mining System
        </h2>

        <p style={{ color: "#ccc", marginBottom: "10px" }}>
          Halving every 90 days
        </p>

        <p style={{ color: "#ccc" }}>
          Participation-based rewards
        </p>
      </div>

      {/* BUTTON */}
      <button
        style={{
          padding: "16px 32px",
          borderRadius: "14px",
          border: "none",
          background: "linear-gradient(180deg, #c8a15d, #9a7436)",
          color: "#111",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 0 25px rgba(181,140,74,0.25)",
        }}
      >
        Join Early Access
      </button>
    </div>
  );
}
