'use client';

import React, { useMemo, useState } from 'react';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletStatus, setWalletStatus] = useState('Not connected');
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Starter Access');

  async function connectWallet() {
    if (typeof window === 'undefined' || !window.ethereum) {
      setWalletStatus('MetaMask not found');
      return;
    }

    try {
      setIsConnecting(true);

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts && accounts.length > 0) {
        const address = accounts[0];
        setWalletAddress(address);
        setWalletStatus('Connected');
      } else {
        setWalletStatus('No wallet selected');
      }
    } catch (e) {
      setWalletStatus('Connection failed');
    } finally {
      setIsConnecting(false);
    }
  }

  const shortAddress = walletAddress
    ? walletAddress.slice(0, 6) + '...' + walletAddress.slice(-4)
    : '';

  const packages = [
    {
      name: 'Starter Access',
      price: '$50',
      tier: 'Tier I',
      tokenAllocation: 100,
      miningPower: 1,
      description:
        'Entry-level pre-launch access for early community participation.',
      details: [
        'Wallet-based early access',
        'Pre-launch active status',
        'Reward eligibility after June 25, 2026',
      ],
    },
    {
      name: 'Pro Access',
      price: '$200',
      tier: 'Tier II',
      tokenAllocation: 400,
      miningPower: 4,
      description:
        'Higher participation tier with stronger ecosystem positioning before launch.',
      details: [
        'Priority ecosystem tier',
        'Enhanced participation status',
        'Reward eligibility after June 25, 2026',
      ],
    },
    {
      name: 'Elite Access',
      price: '$500',
      tier: 'Tier III',
      tokenAllocation: 1000,
      miningPower: 10,
      description:
        'Premium pre-launch tier for maximum early positioning in the REBORN ecosystem.',
      details: [
        'Highest pre-launch tier',
        'Premium access status',
        'Reward eligibility after June 25, 2026',
      ],
    },
  ];

  const halvingRows = [
    ['Phase 1', '25 Jun 2026 – 22 Sep 2026', 80000, '23 September 2026'],
    ['Phase 2', '23 Sep 2026 – 21 Dec 2026', 40000, '22 December 2026'],
    ['Phase 3', '22 Dec 2026 – 21 Mar 2027', 20000, '22 March 2027'],
    ['Phase 4', '22 Mar 2027 – 19 Jun 2027', 10000, '20 June 2027'],
    ['Phase 5', '20 Jun 2027 – 17 Sep 2027', 5000, '18 September 2027'],
    ['Phase 6', '18 Sep 2027 – 16 Dec 2027', 2500, '17 December 2027'],
    ['Phase 7', '17 Dec 2027 – 16 Mar 2028', 1250, '17 March 2028'],
    ['Phase 8', '17 Mar 2028 – 14 Jun 2028', 625, '15 June 2028'],
  ];

  const difficultyBands = [
    { label: '0 – 999 Total Power', min: 0, max: 999, value: 1.0 },
    { label: '1,000 – 2,499 Total Power', min: 1000, max: 2499, value: 0.92 },
    { label: '2,500 – 4,999 Total Power', min: 2500, max: 4999, value: 0.84 },
    { label: '5,000 – 9,999 Total Power', min: 5000, max: 9999, value: 0.76 },
    { label: '10,000+ Total Power', min: 10000, max: Infinity, value: 0.68 },
  ];

  const emissionBars = useMemo(() => {
    const maxEmission = 80000;
    return halvingRows.map((row) => ({
      phase: row[0],
      emission: row[2],
      width: (row[2] / maxEmission) * 100,
    }));
  }, []);

  const difficultyBars = [
    { label: '500', value: 1.0 },
    { label: '1,500', value: 0.92 },
    { label: '3,500', value: 0.84 },
    { label: '7,000', value: 0.76 },
    { label: '12,000', value: 0.68 },
  ];

  const currentDailyEmission = 80000;
  const assumedTotalActivePower = 3500;

  const selectedPackageData =
    packages.find((pkg) => pkg.name === selectedPackage) || packages[0];

  const currentDifficulty =
    difficultyBands.find(
      (band) =>
        assumedTotalActivePower >= band.min &&
        assumedTotalActivePower <= band.max
    )?.value || 1;

  const estimatedDailyReward =
    (selectedPackageData.miningPower / assumedTotalActivePower) *
    currentDailyEmission *
    currentDifficulty;

  const estimatedMonthlyReward = estimatedDailyReward * 30;

  const cardStyle = {
    width: '100%',
    maxWidth: '360px',
    margin: '0 auto 18px auto',
    padding: '26px 20px',
    borderRadius: '24px',
    border: '1px solid rgba(212,175,55,0.22)',
    background:
      'linear-gradient(180deg, rgba(14,14,14,0.96), rgba(8,8,8,0.96))',
    boxShadow: '0 0 30px rgba(0,0,0,0.35)',
  };

  const wideCardStyle = {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto 18px auto',
    padding: '28px 20px',
    borderRadius: '24px',
    border: '1px solid rgba(212,175,55,0.22)',
    background:
      'linear-gradient(180deg, rgba(14,14,14,0.96), rgba(8,8,8,0.96))',
    boxShadow: '0 0 30px rgba(0,0,0,0.35)',
  };

  const sectionTitle = {
    color: '#D4AF37',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const bodyText = {
    color: '#d0d0d0',
    fontSize: '16px',
    lineHeight: '1.6',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(212,175,55,0.14), transparent 26%), linear-gradient(180deg, #060606 0%, #000000 100%)',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '18px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '44px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: '360px',
          maxWidth: '92vw',
          height: 'auto',
          display: 'block',
          margin: '0 auto 6px auto',
          filter: 'drop-shadow(0 0 46px rgba(212,175,55,0.38))',
        }}
      />

      <div
        style={{
          color: '#D4AF37',
          fontSize: '54px',
          fontWeight: 'bold',
          letterSpacing: '4px',
          lineHeight: '1',
          margin: '0',
        }}
      >
        REBORN
      </div>

      <div
        style={{
          marginTop: '6px',
          marginBottom: '26px',
          fontSize: '17px',
          color: '#bdbdbd',
          letterSpacing: '1px',
        }}
      >
        Rebuild the System
      </div>

      <div style={cardStyle}>
        <div style={sectionTitle}>Mining Model</div>
        <div style={{ ...bodyText, textAlign: 'left' }}>
          REBORN uses a transparent participation-based reward model.
          Every package carries predefined mining power. Estimated daily rewards
          depend on four variables: user mining power, total active mining power,
          current daily emission, and current difficulty index.
          <br />
          <br />
          <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>
            Estimated Daily Reward =
          </span>{' '}
          (User Mining Power / Total Active Mining Power) × Daily Emission ×
          Difficulty Index
        </div>
      </div>

      <div style={cardStyle}>
        <div style={sectionTitle}>Difficulty Model</div>
        <div style={{ ...bodyText, textAlign: 'left', marginBottom: '14px' }}>
          Mining difficulty adjusts dynamically based on total active ecosystem
          participation. As more packages become active, the difficulty index
          may reduce estimated individual rewards while the published emission
          model remains fixed.
        </div>

        <div style={{ ...bodyText, textAlign: 'left', fontSize: '14px' }}>
          {difficultyBands.map((band) => (
            <div key={band.label} style={{ marginBottom: '8px' }}>
              • {band.label} → Difficulty {band.value.toFixed(2)}
            </div>
          ))}
        </div>
      </div>

      <div style={wideCardStyle}>
        <div
          style={{
            color: '#D4AF37',
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '14px',
          }}
        >
          Emission & Halving Schedule
        </div>

        <div
          style={{
            color: '#bdbdbd',
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: '18px',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          All halving dates are calculated from the official launch date of
          June 25, 2026, using fixed 90-day cycles.
        </div>

        <div
          style={{
            minWidth: '760px',
            border: '1px solid rgba(212,175,55,0.10)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1.8fr 1fr 1.1fr',
              background: 'rgba(212,175,55,0.08)',
              color: '#D4AF37',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            <div style={{ padding: '12px' }}>Phase</div>
            <div style={{ padding: '12px' }}>Period</div>
            <div style={{ padding: '12px' }}>Daily Emission</div>
            <div style={{ padding: '12px' }}>Next Halving</div>
          </div>

          {halvingRows.map((row, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1.8fr 1fr 1.1fr',
                borderTop:
                  index === 0 ? 'none' : '1px solid rgba(255,255,255,0.05)',
                fontSize: '14px',
                color: '#d5d5d5',
              }}
            >
              <div style={{ padding: '12px' }}>{row[0]}</div>
              <div style={{ padding: '12px' }}>{row[1]}</div>
              <div style={{ padding: '12px', color: '#D4AF37' }}>
                {row[2].toLocaleString()} RBN / day
              </div>
              <div style={{ padding: '12px' }}>{row[3]}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={wideCardStyle}>
        <div
          style={{
            color: '#D4AF37',
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '18px',
          }}
        >
          Emission Chart
        </div>

        <div style={{ display: 'grid', gap: '12px' }}>
          {emissionBars.map((bar) => (
            <div key={bar.phase} style={{ textAlign: 'left' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                  color: '#d8d8d8',
                  fontSize: '14px',
                }}
              >
                <span>{bar.phase}</span>
                <span>{bar.emission.toLocaleString()} RBN</span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${bar.width}%`,
                    height: '100%',
                    background:
                      'linear-gradient(90deg, #d4af37, #9a7436)',
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={wideCardStyle}>
        <div
          style={{
            color: '#D4AF37',
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '18px',
          }}
        >
          Difficulty Chart
        </div>

        <div style={{ display: 'grid', gap: '12px' }}>
          {difficultyBars.map((bar) => (
            <div key={bar.label} style={{ textAlign: 'left' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                  color: '#d8d8d8',
                  fontSize: '14px',
                }}
              >
                <span>{bar.label} Total Power</span>
                <span>{bar.value.toFixed(2)}</span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '12px',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${bar.value * 100}%`,
                    height: '100%',
                    background:
                      'linear-gradient(90deg, #d4af37, #9a7436)',
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={cardStyle}>
        <div style={sectionTitle}>Wallet Access</div>

        <div
          style={{
            color: '#bdbdbd',
            fontSize: '14px',
            lineHeight: '1.5',
            marginBottom: '16px',
            textAlign: 'left',
          }}
        >
          Connect your wallet to unlock pre-launch access, secure your place,
          and prepare for the first REBORN emission cycle.
        </div>

        <div
          style={{
            padding: '14px',
            marginBottom: '12px',
            borderRadius: '12px',
            border: '1px solid #333',
            background: '#0a0a0a',
            fontSize: '14px',
            color: '#fff',
            textAlign: 'left',
          }}
        >
          {walletStatus}
          {shortAddress ? ' • ' + shortAddress : ''}
        </div>

        <button
          onClick={connectWallet}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(180deg, #d4af37, #9a7436)',
            color: '#111',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 0 20px rgba(212,175,55,0.25)',
            cursor: 'pointer',
          }}
        >
          {isConnecting
            ? 'Connecting...'
            : walletAddress
            ? 'Wallet Connected'
            : 'Connect Wallet'}
        </button>
      </div>

      <div style={wideCardStyle}>
        <div
          style={{
            color: '#D4AF37',
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '12px',
          }}
        >
          Pre-Launch Access
        </div>

        <div
          style={{
            color: '#bdbdbd',
            fontSize: '15px',
            lineHeight: '1.6',
            maxWidth: '720px',
            margin: '0 auto 24px auto',
          }}
        >
          Secure your position before the official launch. Choose your access
          tier, connect your wallet, and activate your participation status
          ahead of the first REBORN emission cycle. Reward eligibility begins
          after the official launch date of June 25, 2026.
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(212,175,55,0.18)',
                background:
                  'linear-gradient(180deg, rgba(18,18,18,0.96), rgba(10,10,10,0.96))',
                padding: '22px 18px',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  color: '#D4AF37',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '6px',
                }}
              >
                {pkg.name}
              </div>

              <div
                style={{
                  color: '#fff',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                {pkg.price}
              </div>

              <div
                style={{
                  color: '#9d9d9d',
                  fontSize: '13px',
                  marginBottom: '14px',
                }}
              >
                {pkg.tier}
              </div>

              <div
                style={{
                  color: '#cfcfcf',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '14px',
                }}
              >
                {pkg.description}
              </div>

              <div
                style={{
                  color: '#d9d9d9',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  marginBottom: '14px',
                }}
              >
                {pkg.details.map((item) => (
                  <div key={item} style={{ marginBottom: '6px' }}>
                    • {item}
                  </div>
                ))}
              </div>

              <div
                style={{
                  color: '#d7d7d7',
                  fontSize: '14px',
                  lineHeight: '1.7',
                  marginBottom: '18px',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(212,175,55,0.10)',
                }}
              >
                <div style={{ marginBottom: '6px' }}>
                  <strong style={{ color: '#D4AF37' }}>Token Allocation:</strong>{' '}
                  {pkg.tokenAllocation.toLocaleString()} RBN
                </div>
                <div>
                  <strong style={{ color: '#D4AF37' }}>Mining Power:</strong>{' '}
                  {pkg.miningPower}x
                </div>
              </div>

              <button
                onClick={() => setSelectedPackage(pkg.name)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(180deg, #d4af37, #9a7436)',
                  color: '#111',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  boxShadow: '0 0 18px rgba(212,175,55,0.22)',
                  cursor: 'pointer',
                }}
              >
                Activate Access
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '18px',
            padding: '14px',
            borderRadius: '12px',
            border: '1px solid rgba(212,175,55,0.14)',
            background: 'rgba(255,255,255,0.02)',
            color: '#d3d3d3',
            fontSize: '14px',
            lineHeight: '1.6',
            textAlign: 'left',
          }}
        >
          <strong style={{ color: '#D4AF37' }}>Selected Package:</strong>{' '}
          {selectedPackage || 'None selected'}
          <br />
          <strong style={{ color: '#D4AF37' }}>Mining Status:</strong> Starts on
          June 25, 2026
          <br />
          <strong style={{ color: '#D4AF37' }}>Reward Eligibility:</strong>{' '}
          Begins after official launch under the published emission schedule.
        </div>
      </div>

      <div style={wideCardStyle}>
        <div
          style={{
            color: '#D4AF37',
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '12px',
          }}
        >
          Reward Calculator Preview
        </div>

        <div
          style={{
            color: '#bdbdbd',
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: '20px',
            maxWidth: '720px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          This preview uses the currently selected package, Phase 1 emission,
          and an assumed total active mining power of 3,500. Displayed values
          are estimates only and do not represent guaranteed returns.
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
          }}
        >
          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(212,175,55,0.10)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
              Selected Tier
            </div>
            <div style={{ color: '#fff' }}>{selectedPackageData.name}</div>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(212,175,55,0.10)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
              Mining Power
            </div>
            <div style={{ color: '#fff' }}>{selectedPackageData.miningPower}x</div>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(212,175,55,0.10)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
              Current Difficulty
            </div>
            <div style={{ color: '#fff' }}>{currentDifficulty.toFixed(2)}</div>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(212,175,55,0.10)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
              Current Daily Emission
            </div>
            <div style={{ color: '#fff' }}>
              {currentDailyEmission.toLocaleString()} RBN
            </div>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(212,175,55,0.10)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
              Estimated Daily Reward
            </div>
            <div style={{ color: '#fff' }}>{estimatedDailyReward.toFixed(2)} RBN</div>
          </div>

          <div
            style={{
              padding: '16px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(212,175,55,0.10)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: '#D4AF37', marginBottom: '6px', fontWeight: 'bold' }}>
              Estimated Monthly Reward
            </div>
            <div style={{ color: '#fff' }}>{estimatedMonthlyReward.toFixed(2)} RBN</div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          margin: '8px auto 0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <a href="/whitepaper" style={{ textDecoration: 'none' }}>
          <button
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '12px',
              border: '1px solid rgba(212,175,55,0.28)',
              background: 'transparent',
              color: '#D4AF37',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            View Whitepaper
          </button>
        </a>

        <button
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(180deg, #d4af37, #9a7436)',
            color: '#111',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 0 20px rgba(212,175,55,0.25)',
            cursor: 'pointer',
          }}
        >
          Join Early Access
        </button>
      </div>
    </div>
  );
      }
