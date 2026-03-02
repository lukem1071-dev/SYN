import { NBAGame } from '../types';
import { Trophy } from 'lucide-react';

interface NBACardProps {
  game: NBAGame;
}

const getNBATeamColors = (team: string): string => {
  const colors: Record<string, string> = {
    'Lakers': 'from-purple-600 to-yellow-500',
    'Warriors': 'from-blue-500 to-yellow-400',
    'Celtics': 'from-green-600 to-green-700',
    'Heat': 'from-red-600 to-yellow-600',
    'Bucks': 'from-green-700 to-green-800',
    'Nets': 'from-gray-800 to-gray-900',
    'Mavericks': 'from-blue-600 to-blue-700',
    'Suns': 'from-orange-500 to-purple-600',
    'Nuggets': 'from-blue-500 to-yellow-500',
    'Clippers': 'from-red-600 to-blue-600',
    '76ers': 'from-blue-600 to-red-600',
    'Knicks': 'from-blue-600 to-orange-500',
  };
  return colors[team] || 'from-gray-600 to-gray-700';
};

export default function NBACard({ game }: NBACardProps) {
  const isHomeWinner = game.winner === game.homeTeam;
  const isAwayWinner = game.winner === game.awayTeam;
  const overHit = game.totalPoints > game.overUnder;

  return (
    <div className="relative bg-goldWash rounded-xl p-8 w-[85vw] sm:w-[320px] md:w-[300px] lg:w-[280px] xl:w-[260px] flex-shrink-0 snap-center hover:scale-[1.02] transition-all duration-300 ease-out border-2 border-gold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.35)] overflow-hidden group cursor-pointer border-l-[4px] border-l-navy">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-charcoal/60 text-sm font-light">
            {new Date(game.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
          <Trophy className="w-5 h-5 text-gold" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm bg-gradient-to-br ${getNBATeamColors(game.awayTeam)}`}>
                {game.awayTeam.substring(0, 3).toUpperCase()}
              </div>
              <span className={`font-medium ${isAwayWinner ? 'text-charcoal' : 'text-charcoal/50'}`}>
                {game.awayTeam}
              </span>
            </div>
            <span className={`text-2xl font-semibold ${isAwayWinner ? 'text-gold' : 'text-charcoal/40'}`}>
              {game.awayScore}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm bg-gradient-to-br ${getNBATeamColors(game.homeTeam)}`}>
                {game.homeTeam.substring(0, 3).toUpperCase()}
              </div>
              <span className={`font-medium ${isHomeWinner ? 'text-charcoal' : 'text-charcoal/50'}`}>
                {game.homeTeam}
              </span>
            </div>
            <span className={`text-2xl font-semibold ${isHomeWinner ? 'text-gold' : 'text-charcoal/40'}`}>
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
            <span className="text-xs text-emerald font-bold">{game.totalPoints}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
