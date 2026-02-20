# Sonic Vision

A portfolio dashboard for the [Sonic blockchain](https://soniclabs.com) built with Next.js 15, wagmi v2, and viem. Connect your wallet to view your token balances, track staking positions, and monitor DeFi yields — all in one place.

## Features

- **Portfolio Overview** — Real-time token balances for S, wS, stS, USDC, USDT, scUSD, WETH, and EURC
- **USD Value Estimation** — Aggregated portfolio value with per-token USD breakdown
- **Multi-wallet Support** — Injected wallets (MetaMask, Rabby, etc.) and WalletConnect
- **Sonic Mainnet & Testnet** — Switchable between both networks
- **Staking Dashboard** _(coming soon)_ — Validator delegation tracking via SFC contract
- **Yield Rankings** _(coming soon)_ — APY comparison across Sonic DeFi protocols
- **Airdrop Tracker** _(coming soon)_ — Sonic Points and Gems estimation

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Wallet / Chain | wagmi v2, viem |
| Data Fetching | TanStack Query v5 |
| Wallet Modal | WalletConnect / Web3Modal |
| Charts | Recharts |
| Styling | Tailwind CSS v3 |
| Language | TypeScript 5 |
| Chain | Sonic Mainnet (Chain ID 146) / Testnet (Chain ID 14601) |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/TTMK7777/sonic-vision.git
cd sonic-vision
npm install
```

### Environment Variables

Copy the example file and fill in the required value:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | Recommended | WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com). Without this, only injected wallets (e.g. MetaMask) will be available. |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Start

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Web3 providers
│   └── page.tsx            # Dashboard page
├── components/
│   ├── dashboard/
│   │   ├── TotalAssets.tsx # Aggregated portfolio value
│   │   └── TokenList.tsx   # Per-token balance list
│   ├── layout/
│   │   └── Header.tsx      # Top navigation bar
│   ├── providers/
│   │   └── Web3Provider.tsx# wagmi + TanStack Query providers
│   └── wallet/
│       └── ConnectButton.tsx
├── hooks/
│   └── usePortfolio.ts     # Portfolio data hook (balances + USD values)
└── lib/
    ├── sonic/
    │   ├── chain.ts        # Sonic Mainnet & Testnet chain definitions
    │   ├── contracts.ts    # Core contract addresses and ABIs (ERC20, SFC)
    │   └── tokens.ts       # Supported token registry
    └── wagmi/
        └── config.ts       # wagmi configuration
```

## Supported Tokens

| Symbol | Name | Type |
|--------|------|------|
| S | Sonic (native) | Native |
| wS | Wrapped Sonic | ERC20 |
| stS | Beets Staked Sonic | ERC20 |
| USDC | USD Coin | Stablecoin |
| USDT | Tether USD (Bridged) | Stablecoin |
| scUSD | Sonic USD (Rings) | Stablecoin |
| WETH | Wrapped Ether | ERC20 |
| EURC | Euro Coin (Bridged) | ERC20 |

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import the project in Vercel
3. Set the `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` environment variable in the Vercel dashboard
4. Deploy

## Roadmap

- [ ] Live price feeds via CoinGecko API
- [ ] Staking position tracking (SFC contract integration)
- [ ] Yield ranking across Sonic DeFi protocols
- [ ] Airdrop / Sonic Points estimation
- [ ] Portfolio history and charts

## License

MIT
