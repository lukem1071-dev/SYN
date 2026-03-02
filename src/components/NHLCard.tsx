import { NHLGame } from '../types';
import { Trophy } from 'lucide-react';

interface NHLCardProps {
  game: NHLGame;
}

const getNHLTeamColors = (team: string): string => {
  const colors: Record<string, string> = {
    'Maple Leafs': 'from-blue-600 to-blue-700',
    'Canadiens': 'from-red-600 to-blue-700',
    'Rangers': 'from-blue-600 to-red-600',
    'Bruins': 'from-yellow-500 to-gray-900',
    'Avalanche': 'from-red-700 to-blue-800',
    'Golden Knights': 'from-gray-700 to-yellow-600',
    'Lightning': 'from-blue-500 to-blue-600',
    'Panthers': 'from-red-600 to-blue-700',
    'Oilers': 'from-orange-600 to-blue-700',
    'Flames': 'from-red-600 to-yellow-500',
    'Penguins': 'from-yellow-500 to-gray-900',
    'Capitals': 'from-red-600 to-blue-700',
  };
  return colors[team] || 'from-gray-600 to-gray-700';
};

export default function NHLCard({ game }: NHLCardProps) {
  const isHomeWinner = game.winner === game.homeTeam;
  const isAwayWinner = game.winner === game.awayTeam;
  const overHit = game.totalGoals > game.overUnder;

  return (
    <div className="relative bg-goldWash rounded-xl p-8 w-[85vw] sm:w-[320px] md:w-[300px] lg:w-[280px] xl:w-[260px] flex-shrink-0 snap-center hover:scale-[1.02] transition-all duration-300 ease-out border-2 border-gold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.35)] overflow-hidden group cursor-pointer border-l-[4px] border-l-navy">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-charcoal/60 font-light text-sm">
            {new Date(game.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            {game.period && <span className="ml-2 text-gold font-medium">({game.period})</span>}
          </div>
          <Trophy className="w-5 h-5 text-gold" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm bg-gradient-to-br ${getNHLTeamColors(game.awayTeam)}`}>
                {game.awayTeam.split(' ').pop()?.substring(0, 3).toUpperCase()}
              </div>
              <span className={`font-medium ${isAwayWinner ? 'text-charcoal' : 'text-charcoal/60 font-light'}`}>
                {game.awayTeam}
              </span>
            </div>
            <span className={`text-2xl font-bold ${isAwayWinner ? 'text-gold' : 'text-charcoal/40'}`}>
              {game.awayScore}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm bg-gradient-to-br ${getNHLTeamColors(game.homeTeam)}`}>
                {game.homeTeam.split(' ').pop()?.substring(0, 3).toUpperCase()}
              </div>
              <span className={`font-medium ${isHomeWinner ? 'text-charcoal' : 'text-charcoal/60 font-light'}`}>
                {game.homeTeam}
              </span>
            </div>
            <span className={`text-2xl font-bold ${isHomeWinner ? 'text-gold' : 'text-charcoal/40'}`}>
              {game.homeScore}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gold/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-charcoal/60 font-light">Spread:</span>
            <span className="text-xs text-navy font-bold">{game.spread}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-charcoal/60 font-light">O/U:</span>
            <span className="text-xs text-gold font-bold">
              {game.overUnder} ({overHit ? 'Over' : 'Under'})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-charcoal/60 font-light">Total:</span>
            <span className="text-xs text-emerald font-bold">{game.totalGoals}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
