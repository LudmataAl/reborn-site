'use client';

import React, { useState } from 'react';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletStatus, setWalletStatus] = useState('Not connected');
  const [isConnecting, setIsConnecting] = useState(false);

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
        paddingBottom: '40px',
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

      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          margin: '0 auto 18px auto',
          padding: '26px 20px',
          borderRadius: '24px',
          border: '1px solid rgba(212,175,55,0.22)',
          background:
            'linear-gradient(180deg, rgba(14,14,14,0.96), rgba(8,8,8,0.96))',
          boxShadow: '0 0 30px rgba(0,0,0,0.35)',
        }}
      >
        <div
          style={{
            color: '#D4AF37',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          Mining Model
        </div>

        <div
          style={{
            color: '#d0d0d0',
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'left',
          }}
        >
          REBORN uses a controlled emission structure with fixed 90-day cycles.
          Daily emissions decrease by 50% at every halving, starting from the
          official launch on June 25, 2026.
        </div>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          margin: '0 auto 18px auto',
          padding: '26px 20px',
          borderRadius: '24px',
          border: '1px solid rgba(212,175,55,0.22)',
          background:
            'linear-gradient(180deg, rgba(14,14,14,0.96), rgba(8,8,8,0.96))',
          boxShadow: '0 0 30px rgba(0,0,0,0.35)',
        }}
      >
        <div
          style={{
            color: '#D4AF37',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          Emission Plan
        </div>

        <div
          style={{
            color: '#d0d0d0',
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'left',
          }}
        >
          <div style={{ marginBottom: '8px' }}>• Phase 1 — 80,000 RBN / day</div>
          <div style={{ marginBottom: '8px' }}>• Phase 2 — 40,000 RBN / day</div>
          <div style={{ marginBottom: '8px' }}>• Phase 3 — 20,000 RBN / day</div>
          <div style={{ marginBottom: '8px' }}>• Phase 4 — 10,000 RBN / day</div>
          <div style={{ marginBottom: '8px' }}>• Phase 5 — 5,000 RBN / day</div>
          <div style={{ marginBottom: '8px' }}>• Phase 6 — 2,500 RBN / day</div>
          <div style={{ marginBottom: '8px' }}>• Phase 7 — 1,250 RBN / day</div>
          <div>• Phase 8 — 625 RBN / day</div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          margin: '0 auto 18px auto',
          padding: '26px 20px',
          borderRadius: '24px',
          border: '1px solid rgba(212,175,55,0.22)',
          background:
            'linear-gradient(180deg, rgba(14,14,14,0.96), rgba(8,8,8,0.96))',
          boxShadow: '0 0 30px rgba(0,0,0,0.35)',
        }}
      >
        <div
          style={{
            color: '#D4AF37',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          Halving Schedule
        </div>

        <div
          style={{
            color: '#d0d0d0',
            fontSize: '16px',
            lineHeight: '1.6',
            textAlign: 'left',
          }}
        >
          <div style={{ marginBottom: '8px' }}>• 23 September 2026</div>
          <div style={{ marginBottom: '8px' }}>• 22 December 2026</div>
          <div style={{ marginBottom: '8px' }}>• 22 March 2027</div>
          <div style={{ marginBottom: '8px' }}>• 20 June 2027</div>
          <div style={{ marginBottom: '8px' }}>• 18 September 2027</div>
          <div style={{ marginBottom: '8px' }}>• 17 December 2027</div>
          <div style={{ marginBottom: '8px' }}>• 17 March 2028</div>
          <div>• 15 June 2028</div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '360px',
          margin: '0 auto 18px auto',
          padding: '26px 20px',
          borderRadius: '24px',
          border: '1px solid rgba(212,175,55,0.22)',
          background:
            'linear-gradient(180deg, rgba(14,14,14,0.96), rgba(8,8,8,0.96))',
          boxShadow: '0 0 30px rgba(0,0,0,0.35)',
        }}
      >
        <div
          style={{
            color: '#D4AF37',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          Wallet Access
        </div>

        <div
          style={{
            color: '#bdbdbd',
            fontSize: '14px',
            lineHeight: '1.5',
            marginBottom: '16px',
          }}
        >
          Connect your wallet to unlock early access and prepare for the first
          REBORN wave.
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
