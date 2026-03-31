export default function Whitepaper() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "20px",
        maxWidth: "700px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#D4AF37", marginBottom: "20px" }}>
        REBORN Whitepaper
      </h1>

      <p style={{ color: "#aaa", marginBottom: "20px" }}>
        Version 1.0 — Launch Date: June 25, 2026
      </p>

      <h2 style={{ color: "#D4AF37" }}>Overview</h2>
      <p style={{ lineHeight: 1.6 }}>
        REBORN is a structured Web3 ecosystem focused on transparency,
        controlled emissions, and long-term value creation.
      </p>

      <h2 style={{ color: "#D4AF37", marginTop: "20px" }}>
        Halving Schedule
      </h2>

      {[
        "23 September 2026",
        "22 December 2026",
        "22 March 2027",
        "20 June 2027",
        "18 September 2027",
        "17 December 2027",
        "17 March 2028",
        "15 June 2028",
      ].map((date, i) => (
        <div key={i} style={{ color: "#ccc", marginBottom: "6px" }}>
          • {date}
        </div>
      ))}

      <h2 style={{ color: "#D4AF37", marginTop: "20px" }}>
        Philosophy
      </h2>
      <p>
        REBORN is built around transparency, structure, and decentralized access.
      </p>
    </div>
  );
          }
