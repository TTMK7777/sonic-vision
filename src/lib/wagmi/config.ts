import { http, createConfig } from 'wagmi';
import { injected, walletConnect } from 'wagmi/connectors';
import { sonicMainnet, sonicTestnet } from '../sonic/chain';

// WalletConnect Project ID (get from https://cloud.walletconnect.com)
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '';

export const wagmiConfig = createConfig({
  chains: [sonicMainnet, sonicTestnet],
  connectors: [
    injected(),
    ...(projectId
      ? [
          walletConnect({
            projectId,
            metadata: {
              name: 'Sonic Vision',
              description: 'Sonic Portfolio Dashboard',
              url: 'https://sonic-vision.vercel.app',
              icons: ['https://sonic-vision.vercel.app/icon.png'],
            },
          }),
        ]
      : []),
  ],
  transports: {
    [sonicMainnet.id]: http('https://rpc.soniclabs.com'),
    [sonicTestnet.id]: http('https://rpc.testnet.soniclabs.com'),
  },
});

// Type declaration
declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}
