          export default function Whitepaper() {
  const sectionTitle = {
    color: "#D4AF37",
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "14px",
    marginTop: "28px",
  };

  const text = {
    color: "#d0d0d0",
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "12px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        padding: "20px",
        fontFamily: "Arial",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <h1 style={{ color: "#D4AF37", fontSize: "34px" }}>
          REBORN Whitepaper
        </h1>

        <p style={{ ...text, marginBottom: "20px" }}>
          Launch Date: June 25, 2026
        </p>

        {/* ===================== */}
        {/* MINING MODEL */}
        {/* ===================== */}

        <div style={sectionTitle}>Mining Model</div>

        <p style={text}>
          REBORN uses a transparent participation-based mining system. Users
          participate through ecosystem access tiers rather than hardware mining.
        </p>

        <p style={text}>
          Rewards depend on:
        </p>

        <ul style={text}>
          <li>User Mining Power</li>
          <li>Total Active Mining Power</li>
          <li>Daily Emission</li>
          <li>Difficulty Index</li>
        </ul>

        <p style={{ ...text, color: "#D4AF37" }}>
          Reward Formula:
        </p>

        <p style={text}>
          (User Mining Power / Total Active Mining Power) × Daily Emission × Difficulty Index
        </p>

        {/* ===================== */}
        {/* DIFFICULTY */}
        {/* ===================== */}

        <div style={sectionTitle}>Difficulty Model</div>

        <p style={text}>
          Difficulty adjusts dynamically based on network participation.
        </p>

        <ul style={text}>
          <li>0 – 999 → 1.00</li>
          <li>1,000 – 2,499 → 0.92</li>
          <li>2,500 – 4,999 → 0.84</li>
          <li>5,000 – 9,999 → 0.76</li>
          <li>10,000+ → 0.68</li>
        </ul>

        {/* ===================== */}
        {/* EMISSION */}
        {/* ===================== */}

        <div style={sectionTitle}>Emission Model</div>

        <ul style={text}>
          <li>80,000 → 40,000 → 20,000 → 10,000 → 5,000 → 2,500 → 1,250 → 625</li>
        </ul>

        {/* ===================== */}
        {/* HALVING */}
        {/* ===================== */}

        <div style={sectionTitle}>Halving Schedule</div>

        <ul style={text}>
          <li>September 2026</li>
          <li>December 2026</li>
          <li>March 2027</li>
          <li>June 2027</li>
          <li>September 2027</li>
          <li>December 2027</li>
          <li>March 2028</li>
          <li>June 2028</li>
        </ul>

        {/* ===================== */}
        {/* TOKENOMICS */}
        {/* ===================== */}

        <div style={sectionTitle}>Tokenomics</div>

        <p style={text}>
          Total Supply: 100,000,000 RBN
        </p>

        <ul style={text}>
          <li>40% — Mining Rewards</li>
          <li>20% — Liquidity</li>
          <li>15% — Treasury</li>
          <li>10% — Team</li>
          <li>10% — Marketing</li>
          <li>5% — Reserve</li>
        </ul>

        <p style={text}>
          All allocations are structured to support long-term ecosystem growth,
          liquidity stability, and operational sustainability.
        </p>

        {/* ===================== */}
        {/* PACKAGES */}
        {/* ===================== */}

        <div style={sectionTitle}>Access Packages</div>

        <ul style={text}>
          <li>Starter — 100 RBN / 1x Power</li>
          <li>Pro — 400 RBN / 4x Power</li>
          <li>Elite — 1000 RBN / 10x Power</li>
        </ul>

        <p style={text}>
          Mining activation begins after official launch.
        </p>

        {/* ===================== */}
        {/* FAQ */}
        {/* ===================== */}

        <div style={sectionTitle}>FAQ</div>

        <p style={text}>
          <strong>When does mining start?</strong><br />
          Mining begins on June 25, 2026.
        </p>

        <p style={text}>
          <strong>Is mining guaranteed profit?</strong><br />
          No. Rewards are based on participation and network conditions.
        </p>

        <p style={text}>
          <strong>What is Mining Power?</strong><br />
          It represents your share of the reward pool.
        </p>

        <p style={text}>
          <strong>Can rewards change?</strong><br />
          Yes. Rewards depend on total network activity and difficulty.
        </p>

        <p style={text}>
          <strong>What happens after halving?</strong><br />
          Daily emissions are reduced by 50%.
        </p>

        <p style={text}>
          <strong>Do I need hardware?</strong><br />
          No. Mining is ecosystem-based.
        </p>

        {/* ===================== */}
        {/* DISCLAIMER */}
        {/* ===================== */}

        <div style={sectionTitle}>Important Notice</div>

        <p style={text}>
          All values are estimated and not guaranteed. Participation involves
          risk and variability depending on ecosystem activity.
        </p>

      </div>
    </div>
  );
}    
