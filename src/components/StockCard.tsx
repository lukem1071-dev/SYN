import { Stock } from '../types';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface StockCardProps {
  stock: Stock;
}

const getStockLogo = (ticker: string) => {
  const logos: Record<string, { bg: string; text: string }> = {
    'SPY': { bg: 'from-blue-500 to-blue-700', text: 'SPY' },
    'AAPL': { bg: 'from-gray-600 to-gray-800', text: '' },
    'TSLA': { bg: 'from-red-600 to-red-800', text: 'T' },
    'NVDA': { bg: 'from-green-600 to-green-800', text: 'N' },
    'BTC': { bg: 'from-orange-500 to-orange-700', text: '₿' },
    'GOOGL': { bg: 'from-blue-600 to-blue-800', text: 'G' },
  };
  return logos[ticker] || { bg: 'from-zinc-600 to-zinc-800', text: ticker.charAt(0) };
};

export default function StockCard({ stock }: StockCardProps) {
  const isPositive = stock.change >= 0;
  const logo = getStockLogo(stock.ticker);

  return (
    <div className="relative bg-goldWash rounded-xl p-8 w-[85vw] sm:w-[320px] md:w-[300px] lg:w-[280px] xl:w-[260px] flex-shrink-0 snap-center hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-gold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.35)] overflow-hidden group border-l-[4px] border-l-navy">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${logo.bg} shadow-sm`}>
              {stock.ticker === 'AAPL' ? (
                <DollarSign className="w-6 h-6 text-white" />
              ) : (
                <span className="text-white font-bold text-sm">{logo.text}</span>
              )}
            </div>
            <h3 className="text-2xl font-semibold text-charcoal">
              {stock.ticker}
            </h3>
          </div>
          {isPositive ? (
            <TrendingUp className="w-7 h-7 text-green-400" />
          ) : (
            <TrendingDown className="w-7 h-7 text-red-400" />
          )}
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-semibold text-charcoal">
            ${stock.price.toFixed(2)}
          </div>

          <div className={`flex items-center gap-2 font-bold transition-all duration-300 ${isPositive ? 'text-emerald' : 'text-[#C0392B]'}`}>
            <span className="text-lg">
              {isPositive ? '+' : ''}{stock.change.toFixed(2)}
            </span>
            <span className="text-sm">
              ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gold/30">
          <span className="text-xs text-charcoal/60 font-light">Daily Change</span>
        </div>
      </div>
    </div>
  );
}
