export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "150px",
          height: "auto",
          marginBottom: "10px",
          filter: "drop-shadow(0 0 30px rgba(212,175,55,0.4))",
        }}
      />

      <h1
        style={{
          color: "#D4AF37",
          fontSize: "40px",
          letterSpacing: "4px",
          margin: "0",
        }}
      >
        REBORN
      </h1>

      <p
        style={{
          marginTop: "6px",
          fontSize: "15px",
          color: "#aaa",
          letterSpacing: "1px",
        }}
      >
        Rebuild the System
      </p>
    </div>
  );
}
