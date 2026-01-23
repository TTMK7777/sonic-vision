'use client';

import { ConnectButton } from '@/components/wallet/ConnectButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Sonic Vision
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/yields"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Yields
            </a>
            <a
              href="/airdrop"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Airdrop
            </a>
          </nav>

          {/* Wallet */}
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
