'use client';

import { useState } from 'react';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletStatus, setWalletStatus] = useState('Not connected');
  const [isConnecting, setIsConnecting] = useState(false);

  async function connectWallet() {
    if (typeof window === 'undefined' || typeof window.ethereum === 'undefined') {
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
      }
    } catch (error) {
      setWalletStatus('Connection failed');
    } finally {
      setIsConnecting(false);
    }
  }

  const shortAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : '';

  const cardStyle = {
    width: '100
