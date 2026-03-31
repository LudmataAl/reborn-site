export default function Whitepaper() {
  const halvingRows = [
    {
      phase: "Phase 1",
      period: "25 Jun 2026 – 22 Sep 2026",
      emission: "80,000 RBN / day",
      halving: "23 September 2026",
    },
    {
      phase: "Phase 2",
      period: "23 Sep 2026 – 21 Dec 2026",
      emission: "40,000 RBN / day",
      halving: "22 December 2026",
    },
    {
      phase: "Phase 3",
      period: "22 Dec 2026 – 21 Mar 2027",
      emission: "20,000 RBN / day",
      halving: "22 March 2027",
    },
    {
      phase: "Phase 4",
      period: "22 Mar 2027 – 19 Jun 2027",
      emission: "10,000 RBN / day",
      halving: "20 June 2027",
    },
    {
      phase: "Phase 5",
      period: "20 Jun 2027 – 17 Sep 2027",
      emission: "5,000 RBN / day",
      halving: "18 September 2027",
    },
    {
      phase: "Phase 6",
      period: "18 Sep 2027 – 16 Dec 2027",
      emission: "2,500 RBN / day",
      halving: "17 December 2027",
    },
    {
      phase: "Phase 7",
      period: "17 Dec 2027 – 16 Mar 2028",
      emission: "1,250 RBN / day",
      halving: "17 March 2028",
    },
    {
      phase: "Phase 8",
      period: "17 Mar 2028 – 14 Jun 2028",
      emission: "625 RBN / day",
      halving: "15 June 2028",
    },
  ];

  const sectionTitle = {
    color: "#D4AF37",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 14px 0",
    letterSpacing: "0.5px",
  };

  const paragraph = {
    color: "#cfcfcf",
    fontSize: "16px",
    lineHeight: "1.75",
    margin: 0,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(212,175,55,0.10), transparent 22%), linear-gradient(180deg, #050505 0%, #000000 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "24px 16px 50px",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              color: "#D4AF37",
              fontSize: "44px",
              fontWeight: "bold",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            REBORN Whitepaper
          </div>

          <div
            style={{
              color: "#b9b9b9",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            Version 1.0
            <br />
            Official Launch Date: June 25, 2026
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Executive Summary</div>
            <p style={paragraph}>
              REBORN is a structured Web3 ecosystem built around transparency,
              controlled token emissions, wallet-based access, and a long-term
              development model. The project is designed as a premium digital
              brand with a clear launch framework, published halving dates, and
              a predefined emission schedule from day one.
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Vision</div>
            <p style={paragraph}>
              REBORN is built around the principle “Rebuild the System.” The
              goal is to create a digital ecosystem where brand identity,
              token structure, predictable emissions, and community participation
              are aligned from the start. The project is not built around vague
              promises, but around a public framework that users can review
              before participating.
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Core Principles</div>
            <div
              style={{
                display: "grid",
                gap: "10px",
                color: "#d6d6d6",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              <div>• Full transparency on launch timing and emission logic</div>
              <div>• Public halving schedule based on fixed 90-day cycles</div>
              <div>• Controlled reward emissions instead of uncontrolled supply</div>
              <div>• Wallet-based access and ecosystem participation</div>
              <div>• Long-term product structure instead of short-term hype</div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Token Overview</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "10px",
                color: "#d7d7d7",
                fontSize: "15px",
              }}
            >
              <div>
                <span style={{ color: "#D4AF37", fontWeight: "bold" }}>
                  Token Name:
                </span>{" "}
                REBORN
              </div>
              <div>
                <span style={{ color: "#D4AF37", fontWeight: "bold" }}>
                  Symbol:
                </span>{" "}
                RBN
              </div>
              <div>
                <span style={{ color: "#D4AF37", fontWeight: "bold" }}>
                  Network:
                </span>{" "}
                Ethereum
              </div>
              <div>
                <span style={{ color: "#D4AF37", fontWeight: "bold" }}>
                  Launch Date:
                </span>{" "}
                June 25, 2026
              </div>
              <div>
                <span style={{ color: "#D4AF37", fontWeight: "bold" }}>
                  Max Supply:
                </span>{" "}
                100,000,000 RBN
              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Token Allocation</div>
            <div
              style={{
                display: "grid",
                gap: "10px",
                color: "#d3d3d3",
                fontSize: "15px",
              }}
            >
              <div>• 40% — Reward / Ecosystem Emissions</div>
              <div>• 20% — Liquidity & Market Structure</div>
              <div>• 15% — Treasury / Development</div>
              <div>• 10% — Team / Operations</div>
              <div>• 10% — Marketing / Community Growth</div>
              <div>• 5% — Strategic Reserve / Burn Support</div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
              overflowX: "auto",
            }}
          >
            <div style={sectionTitle}>Emission & Halving Schedule</div>
            <p style={{ ...paragraph, marginBottom: "18px" }}>
              REBORN follows a fixed 90-day emission cycle. Each cycle reduces
              daily emissions by 50%, creating a transparent and predictable
              long-term model.
            </p>

            <div
              style={{
                minWidth: "760px",
                border: "1px solid rgba(212,175,55,0.10)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1.8fr 1fr 1.1fr",
                  background: "rgba(212,175,55,0.08)",
                  color: "#D4AF37",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                <div style={{ padding: "12px" }}>Phase</div>
                <div style={{ padding: "12px" }}>Period</div>
                <div style={{ padding: "12px" }}>Daily Emission</div>
                <div style={{ padding: "12px" }}>Next Halving</div>
              </div>

              {halvingRows.map((row, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1.8fr 1fr 1.1fr",
                    borderTop:
                      index === 0 ? "none" : "1px solid rgba(255,255,255,0.05)",
                    fontSize: "14px",
                    color: "#d5d5d5",
                  }}
                >
                  <div style={{ padding: "12px" }}>{row.phase}</div>
                  <div style={{ padding: "12px" }}>{row.period}</div>
                  <div style={{ padding: "12px", color: "#D4AF37" }}>
                    {row.emission}
                  </div>
                  <div style={{ padding: "12px" }}>{row.halving}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "14px",
                color: "#8e8e8e",
                fontSize: "12px",
                lineHeight: "1.6",
              }}
            >
              All halving dates are calculated from the official launch date of
              June 25, 2026, using fixed 90-day cycles. Minor timing differences
              may occur depending on final on-chain implementation.
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Wallet Access</div>
            <p style={paragraph}>
              REBORN is designed with wallet-based access in mind. Users connect
              compatible Ethereum wallets to enter the ecosystem, unlock early
              access flows, and prepare for future dashboard and participation
              features. MetaMask and Ethereum-compatible wallets are the primary
              entry points in the first stage.
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Roadmap</div>
            <div
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#D4AF37",
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Phase A — Launch
                </div>
                <div style={{ ...paragraph, fontSize: "15px" }}>
                  Website launch, wallet connection, public whitepaper, early
                  access onboarding, emission transparency.
                </div>
              </div>

              <div>
                <div
                  style={{
                    color: "#D4AF37",
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Phase B — Access Expansion
                </div>
                <div style={{ ...paragraph, fontSize: "15px" }}>
                  User growth, dashboard preview, ecosystem structure, interface
                  refinement, stronger community identity.
                </div>
              </div>

              <div>
                <div
                  style={{
                    color: "#D4AF37",
                    fontWeight: "bold",
                    marginBottom: "6px",
                  }}
                >
                  Phase C — Utility Layer
                </div>
                <div style={{ ...paragraph, fontSize: "15px" }}>
                  Utility extensions, access tiers, ecosystem integration,
                  additional participation logic and token-based features.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              padding: "24px 20px",
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(7,7,7,0.96))",
            }}
          >
            <div style={sectionTitle}>Transparency & Risk Disclosure</div>
            <p style={paragraph}>
              REBORN is an early-stage Web3 ecosystem. Participation may involve
              market, technical, liquidity, and adoption risks. No guaranteed
              returns are promised. The project is built around transparency,
              structured emissions, and clear public communication regarding
              launch timing, supply logic, and future development stages.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "18px 12px 0",
              color: "#D4AF37",
              fontSize: "18px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            REBORN — Rebuild the System
          </div>
        </div>
      </div>
    </div>
  );
                }
