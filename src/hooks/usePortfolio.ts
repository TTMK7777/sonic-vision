'use client';

import { useAccount, useBalance, useReadContracts } from 'wagmi';
import { formatUnits } from 'viem';
import { sonicMainnet } from '@/lib/sonic/chain';
import { ERC20_TOKENS, SONIC_TOKENS, type TokenInfo } from '@/lib/sonic/tokens';
import { ERC20_ABI } from '@/lib/sonic/contracts';

export interface TokenBalance {
  token: TokenInfo;
  balance: bigint;
  formatted: string;
  usdValue: number;
}

export interface PortfolioData {
  balances: TokenBalance[];
  totalValue: number;
  isLoading: boolean;
  error: Error | null;
}

// Placeholder prices (TODO: Replace with CoinGecko API)
const TOKEN_PRICES: Record<string, number> = {
  S: 0.55,
  wS: 0.55,
  stS: 0.57,
  USDC: 1.0,
  USDT: 1.0,
  scUSD: 1.0,
  WETH: 3500,
  EURC: 1.05,
};

export function usePortfolio(): PortfolioData {
  const { address, isConnected } = useAccount();

  // Native S balance
  const {
    data: nativeBalance,
    isLoading: isNativeLoading,
    error: nativeError,
  } = useBalance({
    address,
    chainId: sonicMainnet.id,
  });

  // ERC20 balances
  const erc20Contracts = ERC20_TOKENS.map((token) => ({
    address: token.address as `0x${string}`,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
    chainId: sonicMainnet.id,
  }));

  const {
    data: erc20Balances,
    isLoading: isErc20Loading,
    error: erc20Error,
  } = useReadContracts({
    contracts: erc20Contracts,
    query: {
      enabled: isConnected && !!address,
    },
  });

  // Process balances
  const balances: TokenBalance[] = [];

  // Add native S balance
  if (nativeBalance) {
    const formatted = parseFloat(formatUnits(nativeBalance.value, 18));
    balances.push({
      token: SONIC_TOKENS.S,
      balance: nativeBalance.value,
      formatted: formatted.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
      }),
      usdValue: formatted * (TOKEN_PRICES.S || 0),
    });
  }

  // Add ERC20 balances
  if (erc20Balances) {
    ERC20_TOKENS.forEach((token, index) => {
      const result = erc20Balances[index];
      if (result && result.status === 'success' && result.result) {
        const balance = result.result as bigint;
        if (balance > 0n) {
          const formatted = parseFloat(formatUnits(balance, token.decimals));
          balances.push({
            token,
            balance,
            formatted: formatted.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: token.decimals > 6 ? 4 : 2,
            }),
            usdValue: formatted * (TOKEN_PRICES[token.symbol] || 0),
          });
        }
      }
    });
  }

  // Calculate total value
  const totalValue = balances.reduce((sum, b) => sum + b.usdValue, 0);

  return {
    balances,
    totalValue,
    isLoading: isNativeLoading || isErc20Loading,
    error: nativeError || erc20Error || null,
  };
}
