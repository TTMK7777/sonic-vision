'use client';

import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { sonicMainnet } from '@/lib/sonic/chain';
import { formatEther } from 'viem';

export function ConnectButton() {
  const { address, isConnected, chain } = useAccount();
  const { connectors, connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  // Get native S balance
  const { data: balance } = useBalance({
    address,
    chainId: sonicMainnet.id,
  });

  // Format address for display
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  // Format balance
  const formatBalance = (bal: typeof balance) => {
    if (!bal) return '0';
    const value = parseFloat(formatEther(bal.value));
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-3">
        {/* Balance */}
        <div className="hidden sm:flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg">
          <span className="text-sm font-medium text-gray-700">
            {formatBalance(balance)} S
          </span>
        </div>

        {/* Address & Disconnect */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
            {/* Chain indicator */}
            <div
              className={`w-2 h-2 rounded-full ${
                chain?.id === sonicMainnet.id ? 'bg-green-500' : 'bg-yellow-500'
              }`}
            />
            <span className="text-sm font-medium text-blue-700">
              {formatAddress(address)}
            </span>
          </div>

          <button
            onClick={() => disconnect()}
            className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
          >
            Disconnect
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          disabled={isPending}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Connecting...
            </span>
          ) : (
            `Connect ${connector.name === 'Injected' ? 'Wallet' : connector.name}`
          )}
        </button>
      ))}
    </div>
  );
}
