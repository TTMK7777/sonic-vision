// Sonic Mainnet Core Contract Addresses
// Reference: https://docs.soniclabs.com/sonic/build-on-sonic/contract-addresses

export const SONIC_CONTRACTS = {
  // Staking & Consensus
  SFC: '0xFC00FACE00000000000000000000000000000000' as const,

  // Utility
  Multicall3: '0xcA11bde05977b3631167028862bE2a173976CA11' as const,

  // Migration
  FTM_UPGRADE_PORTAL: '0x3561607590e28e0848ba3B67074C676D6D1C9953' as const,

  // Beets
  BEETS_VAULT_V2: '0xBA12222222228d8Ba445958a75a0704d566BF2C8' as const,
  BEETS_FEE_COLLECTOR: '0xce88686553686da562ce7cea497ce749da109f9f' as const,
} as const;

// Minimal ERC20 ABI for balance checks
export const ERC20_ABI = [
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

// SFC (Staking) ABI - Partial
export const SFC_ABI = [
  // Get stake info
  {
    inputs: [
      { name: 'delegator', type: 'address' },
      { name: 'toValidatorID', type: 'uint256' },
    ],
    name: 'getStake',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  // Get pending rewards
  {
    inputs: [
      { name: 'delegator', type: 'address' },
      { name: 'toValidatorID', type: 'uint256' },
    ],
    name: 'pendingRewards',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  // Get all staked amount for a delegator
  {
    inputs: [{ name: 'delegator', type: 'address' }],
    name: 'getStakedAmount',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  // Get validator info
  {
    inputs: [{ name: 'validatorID', type: 'uint256' }],
    name: 'getValidator',
    outputs: [
      { name: 'status', type: 'uint256' },
      { name: 'deactivatedTime', type: 'uint256' },
      { name: 'deactivatedEpoch', type: 'uint256' },
      { name: 'receivedStake', type: 'uint256' },
      { name: 'createdEpoch', type: 'uint256' },
      { name: 'createdTime', type: 'uint256' },
      { name: 'auth', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  // Current epoch
  {
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  // Last validator ID
  {
    inputs: [],
    name: 'lastValidatorID',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
