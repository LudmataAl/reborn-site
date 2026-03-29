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
        paddingTop: "40px",
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "220px",
          maxWidth: "78vw",
          height: "auto",
          marginBottom: "18px",
          filter: "drop-shadow(0 0 30px rgba(212,175,55,0.35))",
        }}
      />

      <div
        style={{
          color: "#D4AF37",
          fontSize: "52px",
          letterSpacing: "4px",
          fontWeight: "bold",
          margin: 0,
          lineHeight: 1.05,
        }}
      >
        REBORN
      </div>

      <div
        style={{
          marginTop: "10px",
          fontSize: "17px",
          color: "#aaa",
          letterSpacing: "1px",
          marginBottom: "34px",
        }}
      >
        Rebuild the System
      </div>

      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(181,140,74,0.3)",
          borderRadius: "22px",
          padding: "28px 24px",
          width: "100%",
          maxWidth: "340px",
          marginBottom: "26px",
        }}
      >
        <h2
          style={{
            color: "#b58c4a",
            marginTop: 0,
            marginBottom: "18px",
            fontSize: "30px",
          }}
        >
          Mining System
        </h2>

        <p
          style={{
            color: "#ccc",
            margin: "0 0 14px 0",
            fontSize: "17px",
            lineHeight: 1.45,
          }}
        >
          Halving every 90 days
        </p>

        <p
          style={{
            color: "#ccc",
            margin: 0,
            fontSize: "17px",
            lineHeight: 1.45,
          }}
        >
          Participation-based rewards
        </p>
      </div>

      <button
        style={{
          padding: "16px 34px",
          borderRadius: "14px",
          border: "none",
          background: "linear-gradient(180deg, #c8a15d, #9a7436)",
          color: "#111",
          fontWeight: "bold",
          fontSize: "18px",
          boxShadow: "0 0 20px rgba(181,140,74,0.2)",
          cursor: "pointer",
        }}
      >
        Join Early Access
      </button>
    </div>
  );
}
