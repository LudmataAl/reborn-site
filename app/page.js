export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "20px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "40px",
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "320px",
          height: "auto",
          display: "block",
          margin: "0 auto 10px auto",
          filter: "drop-shadow(0 0 45px rgba(212,175,55,0.5))",
        }}
      />

      <div
        style={{
          color: "#D4AF37",
          fontSize: "46px",
          fontWeight: "bold",
          letterSpacing: "4px",
          margin: "0",
        }}
      >
        REBORN
      </div>

      <div
        style={{
          marginTop: "6px",
          marginBottom: "28px",
          fontSize: "16px",
          color: "#aaa",
        }}
      >
        Rebuild the System
      </div>

      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(181,140,74,0.3)",
          borderRadius: "22px",
          padding: "24px 20px",
          maxWidth: "340px",
          margin: "0 auto 24px auto",
        }}
      >
        <h2
          style={{
            color: "#b58c4a",
            marginBottom: "14px",
            fontSize: "28px",
          }}
        >
          Mining System
        </h2>

        <p style={{ color: "#ccc", marginBottom: "10px", fontSize: "17px" }}>
          Halving every 90 days
        </p>

        <p style={{ color: "#ccc", fontSize: "17px" }}>
          Participation-based rewards
        </p>
      </div>

      <button
        style={{
          padding: "16px 34px",
          borderRadius: "14px",
          border: "none",
          background: "linear-gradient(180deg, #d4af37, #9a7436)",
          color: "#111",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 0 30px rgba(181,140,74,0.4)",
          cursor: "pointer",
        }}
      >
        Join Early Access
      </button>
    </div>
  );
}
