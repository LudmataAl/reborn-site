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
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "230px",
          height: "auto",
          marginTop: "0",
          marginBottom: "12px",
          filter: "drop-shadow(0 0 34px rgba(212,175,55,0.38))",
        }}
      />

      <div
        style={{
          color: "#D4AF37",
          fontSize: "46px",
          letterSpacing: "3px",
          fontWeight: "bold",
          lineHeight: "1",
          margin: "0",
        }}
      >
        REBORN
      </div>

      <div
        style={{
          marginTop: "8px",
          marginBottom: "28px",
          fontSize: "15px",
          color: "#aaa",
          letterSpacing: "1px",
          lineHeight: "1.2",
        }}
      >
        Rebuild the System
      </div>

      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(181,140,74,0.3)",
          borderRadius: "22px",
          padding: "26px 22px",
          width: "100%",
          maxWidth: "340px",
          marginBottom: "22px",
        }}
      >
        <h2
          style={{
            color: "#b58c4a",
            marginTop: "0",
            marginBottom: "16px",
            fontSize: "30px",
          }}
        >
          Mining System
        </h2>

        <p
          style={{
            color: "#ccc",
            margin: "0 0 12px 0",
            fontSize: "17px",
            lineHeight: "1.45",
          }}
        >
          Halving every 90 days
        </p>

        <p
          style={{
            color: "#ccc",
            margin: "0",
            fontSize: "17px",
            lineHeight: "1.45",
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
          boxShadow: "0 0 24px rgba(181,140,74,0.22)",
          cursor: "pointer",
        }}
      >
        Join Early Access
      </button>
    </div>
  );
}
