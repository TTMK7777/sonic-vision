# Sonic Vision

A portfolio dashboard for the [Sonic](https://soniclabs.com) blockchain — track your token balances, staking rewards, and DeFi positions in one place.

## Features

- **Portfolio Overview** — View total asset value and individual token balances for your connected wallet
- **Multi-token Support** — Tracks native S, wS, stS (Beets Staked Sonic), USDC, USDT, scUSD, WETH, and EURC
- **Wallet Connect** — Connects via WalletConnect with support for all major EVM-compatible wallets
- **Staking Dashboard** — Monitor validator delegations and staking positions *(coming soon)*
- **Yield Rankings** — Compare APY across Sonic DeFi protocols *(coming soon)*
- **Airdrop Tracker** — Estimate Sonic Points and Gems rewards *(coming soon)*

## Tech Stack

| Category | Library |
|----------|---------|
| Framework | [Next.js](https://nextjs.org) 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Charts | Recharts 2 |
| Wallet | wagmi 2, viem 2, WalletConnect |
| Data Fetching | TanStack Query 5 |

## Getting Started

### Prerequisites

- Node.js 18+
- A WalletConnect Project ID (free at [cloud.walletconnect.com](https://cloud.walletconnect.com))

### Installation

```bash
git clone https://github.com/TTMK7777/sonic-vision.git
cd sonic-vision
npm install
```

### Configuration

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | Yes | WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com) |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Dashboard page
├── components/
│   ├── dashboard/          # Dashboard UI components
│   │   ├── TotalAssets.tsx # Total portfolio value card
│   │   └── TokenList.tsx   # Token balance list
│   ├── layout/             # Header, navigation
│   ├── providers/          # React context providers (wagmi, query)
│   └── wallet/             # Wallet connect button and modal
├── hooks/
│   └── usePortfolio.ts     # Portfolio data fetching hook
└── lib/
    ├── sonic/
    │   ├── chain.ts        # Sonic Mainnet / Testnet chain definitions
    │   ├── tokens.ts       # Sonic token registry (addresses, decimals)
    │   └── contracts.ts    # ERC20 ABI and contract helpers
    └── wagmi/              # wagmi client configuration
```

## Supported Tokens

| Token | Name | Type |
|-------|------|------|
| S | Sonic | Native |
| wS | Wrapped Sonic | ERC20 |
| stS | Beets Staked Sonic | ERC20 |
| USDC | USD Coin | ERC20 |
| USDT | Tether USD (Bridged) | ERC20 |
| scUSD | Sonic USD (Rings) | ERC20 |
| WETH | Wrapped Ether | ERC20 |
| EURC | Euro Coin (Bridged) | ERC20 |

## License

MIT
