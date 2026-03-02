import { Calendar } from 'lucide-react';

interface TodaysGamesCardProps {
  sport: 'NBA' | 'MLB' | 'NHL';
  onShowSchedule: () => void;
}

export default function TodaysGamesCard({ sport, onShowSchedule }: TodaysGamesCardProps) {
  return (
    <div
      onClick={onShowSchedule}
      className="relative bg-goldWash rounded-xl p-8 w-[85vw] sm:w-[320px] md:w-[300px] lg:w-[280px] xl:w-[260px] flex-shrink-0 snap-center hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-gold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.35)] overflow-hidden group flex items-center justify-center border-l-[4px] border-l-navy"
    >
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center shadow-sm">
            <Calendar className="w-8 h-8 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-charcoal mb-2">
          Today's Games
        </h3>

        <p className="text-sm text-charcoal/60 font-light">
          View full {sport} schedule
        </p>
      </div>
    </div>
  );
}
