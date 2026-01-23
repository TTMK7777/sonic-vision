// Sonic Mainnet Token Addresses
// Reference: https://docs.soniclabs.com/sonic/build-on-sonic/contract-addresses

export const SONIC_TOKENS = {
  // Native token (use 'native' for balance checks)
  S: {
    symbol: 'S',
    name: 'Sonic',
    decimals: 18,
    address: 'native' as const,
    logo: '/tokens/sonic.svg',
  },

  // Wrapped S
  wS: {
    symbol: 'wS',
    name: 'Wrapped Sonic',
    decimals: 18,
    address: '0x039e2fB66102314Ce7b64Ce5Ce3E5183bc94aD38' as const,
    logo: '/tokens/ws.svg',
  },

  // Beets Staked Sonic
  stS: {
    symbol: 'stS',
    name: 'Beets Staked Sonic',
    decimals: 18,
    address: '0xe5da20f15420ad15de0fa650600afc998bbe3955' as const,
    logo: '/tokens/sts.svg',
  },

  // Stablecoins
  USDC: {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    address: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894' as const,
    logo: '/tokens/usdc.svg',
  },

  USDT: {
    symbol: 'USDT',
    name: 'Tether USD (Bridged)',
    decimals: 6,
    address: '0x6047828dc181963ba44974801ff68e538da5eaf9' as const,
    logo: '/tokens/usdt.svg',
  },

  // Rings Protocol
  scUSD: {
    symbol: 'scUSD',
    name: 'Sonic USD (Rings)',
    decimals: 6,
    address: '0xd3DCe716f3eF535C5Ff8d041c1A41C3bd89b97aE' as const,
    logo: '/tokens/scusd.svg',
  },

  // ETH
  WETH: {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    address: '0x50c42dEAcD8Fc9773493ED674b675bE577f2634b' as const,
    logo: '/tokens/weth.svg',
  },

  // Euro
  EURC: {
    symbol: 'EURC',
    name: 'Euro Coin (Bridged)',
    decimals: 6,
    address: '0xe715cba7b5ccb33790cebff1436809d36cb17e57' as const,
    logo: '/tokens/eurc.svg',
  },
} as const;

// Token list for iteration
export const TOKEN_LIST = Object.values(SONIC_TOKENS);

// ERC20 tokens only (excluding native S)
export const ERC20_TOKENS = TOKEN_LIST.filter(t => t.address !== 'native');

// Get token by address
export function getTokenByAddress(address: string) {
  return TOKEN_LIST.find(
    t => t.address.toLowerCase() === address.toLowerCase()
  );
}

// Get token by symbol
export function getTokenBySymbol(symbol: string) {
  return TOKEN_LIST.find(
    t => t.symbol.toLowerCase() === symbol.toLowerCase()
  );
}

export type TokenInfo = typeof SONIC_TOKENS[keyof typeof SONIC_TOKENS];
