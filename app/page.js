export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px"
      }}
    >
<img
  src="/reborn-logo.png"
  alt="REBORN logo"
  style={{
    width: "220px",
    maxWidth: "80vw",
    height: "auto",
    marginBottom: "25px"
  }}
/>

      <h1
        style={{
          color: "#b58c4a",
          fontSize: "48px",
          letterSpacing: "6px",
          margin: "0"
        }}
      >
        REBORN
      </h1>

      <p
        style={{
          color: "#d6c5a6",
          marginTop: "10px",
          marginBottom: "32px"
        }}
      >
        Rebuild the System
      </p>

      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(181,140,74,0.3)",
          borderRadius: "20px",
          padding: "24px",
          width: "100%",
          maxWidth: "340px",
          marginBottom: "24px"
        }}
      >
        <h2 style={{ color: "#b58c4a", marginTop: 0 }}>Mining System</h2>
        <p style={{ color: "#cccccc" }}>Halving every 90 days</p>
        <p style={{ color: "#cccccc" }}>Participation-based rewards</p>
      </div>

      <button
        style={{
          padding: "14px 28px",
          borderRadius: "12px",
          border: "none",
          background: "#b58c4a",
          color: "#111111",
          fontWeight: "bold",
          fontSize: "18px"
        }}
      >
        Join Early Access
      </button>
    </div>
  );
}
