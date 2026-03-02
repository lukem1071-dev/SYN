import { Crypto } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoCardProps {
  crypto: Crypto;
}

const getCryptoIcon = (symbol: string): string => {
  const icons: Record<string, string> = {
    'BTC': '₿',
    'ETH': 'Ξ',
    'USDT': '₮',
    'BNB': 'BNB',
    'SOL': '◎',
    'XRP': 'XRP',
    'USDC': '$',
    'ADA': '₳',
    'DOGE': 'Ð',
    'AVAX': 'AVAX',
  };
  return icons[symbol] || symbol;
};

const formatPrice = (price: number): string => {
  if (price >= 1000) {
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } else if (price >= 1) {
    return `$${price.toFixed(2)}`;
  } else {
    return `$${price.toFixed(3)}`;
  }
};

const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1_000_000_000_000) {
    return `$${(marketCap / 1_000_000_000_000).toFixed(2)}T`;
  } else if (marketCap >= 1_000_000_000) {
    return `$${(marketCap / 1_000_000_000).toFixed(2)}B`;
  } else if (marketCap >= 1_000_000) {
    return `$${(marketCap / 1_000_000).toFixed(2)}M`;
  }
  return `$${marketCap.toFixed(2)}`;
};

const formatVolume = (volume: number): string => {
  if (volume >= 1_000_000_000) {
    return `$${(volume / 1_000_000_000).toFixed(2)}B`;
  } else if (volume >= 1_000_000) {
    return `$${(volume / 1_000_000).toFixed(2)}M`;
  }
  return `$${volume.toFixed(2)}`;
};

export default function CryptoCard({ crypto }: CryptoCardProps) {
  const isPositive = crypto.changePercent24h > 0;

  return (
    <div className="relative bg-goldWash rounded-xl p-8 w-[85vw] sm:w-[320px] md:w-[300px] lg:w-[280px] xl:w-[260px] flex-shrink-0 snap-center hover:scale-[1.02] transition-all duration-300 ease-out border-2 border-gold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.35)] overflow-hidden group cursor-pointer border-l-[4px] border-l-navy">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm bg-gradient-to-br from-orange-500 to-amber-600">
              {getCryptoIcon(crypto.symbol)}
            </div>
            <div>
              <h3 className="font-semibold text-charcoal">
                {crypto.name}
              </h3>
              <p className="text-xs text-charcoal/60 font-light">{crypto.symbol}</p>
            </div>
          </div>
          {isPositive ? (
            <TrendingUp className="w-5 h-5 text-green-500" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-500" />
          )}
        </div>

        <div className="mb-4">
          <div className="text-3xl font-semibold text-charcoal">
            {formatPrice(crypto.price)}
          </div>
          <div className={`flex items-center gap-2 mt-1 transition-all duration-300 ${isPositive ? 'text-emerald' : 'text-[#C0392B]'}`}>
            <span className="text-sm font-bold">
              {isPositive ? '+' : ''}{formatPrice(crypto.change24h)}
            </span>
            <span className="text-sm font-bold">
              ({isPositive ? '+' : ''}{crypto.changePercent24h.toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="space-y-2 pt-3 border-t border-gold/30">
          <div className="flex items-center justify-between">
            <span className="text-xs text-charcoal/60 font-light">Market Cap:</span>
            <span className="text-xs text-gold font-bold">{formatMarketCap(crypto.marketCap)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-charcoal/60 font-light">24h Volume:</span>
            <span className="text-xs text-emerald font-bold">{formatVolume(crypto.volume24h)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
