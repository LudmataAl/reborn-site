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
        justifyContent: "center",
        textAlign: "center",
        padding: "12px",
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "150px",
          maxWidth: "70vw",
          height: "auto",
          marginBottom: "10px",
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
        }}
      >
        REBORN
      </div>

      <div
        style={{
          marginTop: "6px",
          fontSize: "15px",
          color: "#aaa",
          letterSpacing: "1px",
        }}
      >
        Rebuild the System
      </div>
    </div>
  );
}
