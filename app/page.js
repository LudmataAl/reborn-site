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
        padding: "12px",
        paddingTop: "70px",
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "150px",
          maxWidth: "70vw",
          height: "auto",
          marginBottom: "14px",
          filter: "drop-shadow(0 0 28px rgba(212,175,55,0.35))",
        }}
      />

      <div
        style={{
          color: "#D4AF37",
          fontSize: "40px",
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
          marginTop: "8px",
          fontSize: "15px",
          color: "#aaa",
          letterSpacing: "1px",
          marginBottom: "42px",
        }}
      >
        Rebuild the System
      </div>

      <div
        style={{
          background: "#0a0a0a",
          border: "1px solid rgba(181,140,74,0.3)",
          borderRadius: "20px",
          padding: "25px",
          width: "100%",
          maxWidth: "320px",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#b58c4a",
            marginTop: 0,
            marginBottom: "18px",
            fontSize: "28px",
          }}
        >
          Mining System
        </h2>

        <p
          style={{
            color: "#ccc",
            margin: "0 0 14px 0",
            fontSize: "16px",
            lineHeight: 1.45,
          }}
        >
          Halving every 90 days
        </p>

        <p
          style={{
            color: "#ccc",
            margin: 0,
            fontSize: "16px",
            lineHeight: 1.45,
          }}
        >
          Participation-based rewards
        </p>
      </div>
    </div>
  );
}
