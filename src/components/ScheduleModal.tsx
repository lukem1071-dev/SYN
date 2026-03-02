import { X, Calendar, Tv } from 'lucide-react';
import { ScheduledGame } from '../types';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  games: ScheduledGame[];
  sport: 'NBA' | 'MLB';
}

export default function ScheduleModal({ isOpen, onClose, games, sport }: ScheduleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm" onClick={onClose}>
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden border-2 border-gold shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative z-10">
          <div className="flex items-center justify-between p-6 border-b border-gold/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center shadow-sm">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-charcoal">
                Today's {sport} Games
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg bg-cream hover:bg-champagne flex items-center justify-center transition-colors border border-champagne"
            >
              <X className="w-5 h-5 text-charcoal/60" />
            </button>
          </div>

          <div className="p-6 max-h-[calc(80vh-100px)] overflow-y-auto">
            <div className="space-y-3">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="relative bg-goldWash rounded-xl p-4 border-2 border-gold hover:border-gold/80 transition-all hover:scale-[1.01] overflow-hidden group border-l-[4px] border-l-navy"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-charcoal/60">
                          {game.awayTeam}
                        </span>
                        <span className="text-charcoal/40">@</span>
                        <span className="text-sm font-semibold text-charcoal">
                          {game.homeTeam}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-charcoal/60">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{game.time}</span>
                        </div>
                        {game.channel && (
                          <div className="flex items-center gap-1.5">
                            <Tv className="w-3.5 h-3.5" />
                            <span>{game.channel}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
