'use client';

import { usePortfolio } from '@/hooks/usePortfolio';

export function TotalAssets() {
  const { totalValue, isLoading } = usePortfolio();

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-24 mb-2"></div>
          <div className="h-10 bg-white/20 rounded w-48"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-100 mb-1">Total Portfolio Value</p>
          <p className="text-4xl font-bold">{formatUSD(totalValue)}</p>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-lg">
            <svg
              className="w-4 h-4 text-green-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-sm text-green-300">--</span>
          </div>
          <p className="text-xs text-blue-200 mt-1">24h change</p>
        </div>
      </div>
    </div>
  );
}
