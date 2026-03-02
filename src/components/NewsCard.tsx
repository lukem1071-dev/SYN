import { NewsItem } from '../types';
import { Newspaper, Radio, FlaskConical, TrendingUp, Trophy, Heart, GraduationCap } from 'lucide-react';

interface NewsCardProps {
  news: NewsItem;
}

const getNewsSourceBranding = (source: string) => {
  const branding: Record<string, { bg: string; icon: string; color: string }> = {
    'Financial Times': { bg: 'from-pink-600 to-pink-700', icon: 'trending', color: 'text-pink-400' },
    'TechCrunch': { bg: 'from-green-600 to-green-700', icon: 'newspaper', color: 'text-green-400' },
    'BBC News': { bg: 'from-red-600 to-red-700', icon: 'radio', color: 'text-red-400' },
    'Science Daily': { bg: 'from-blue-600 to-blue-700', icon: 'flask', color: 'text-blue-400' },
    'ESPN': { bg: 'from-red-700 to-red-800', icon: 'trophy', color: 'text-red-400' },
    'Reuters': { bg: 'from-orange-600 to-orange-700', icon: 'heart', color: 'text-orange-400' },
    'Space.com': { bg: 'from-indigo-600 to-purple-700', icon: 'flask', color: 'text-indigo-400' },
    'Education Weekly': { bg: 'from-teal-600 to-teal-700', icon: 'graduation', color: 'text-teal-400' },
  };
  return branding[source] || { bg: 'from-zinc-600 to-zinc-700', icon: 'newspaper', color: 'text-slate-400' };
};

const getSourceIcon = (iconType: string) => {
  const icons: Record<string, JSX.Element> = {
    'trending': <TrendingUp className="w-5 h-5 text-white" />,
    'newspaper': <Newspaper className="w-5 h-5 text-white" />,
    'radio': <Radio className="w-5 h-5 text-white" />,
    'flask': <FlaskConical className="w-5 h-5 text-white" />,
    'trophy': <Trophy className="w-5 h-5 text-white" />,
    'heart': <Heart className="w-5 h-5 text-white" />,
    'graduation': <GraduationCap className="w-5 h-5 text-white" />,
  };
  return icons[iconType] || icons['newspaper'];
};

export default function NewsCard({ news }: NewsCardProps) {
  const publishedDate = new Date(news.publishedAt);
  const timeAgo = getTimeAgo(publishedDate);
  const branding = getNewsSourceBranding(news.source);

  return (
    <div className="relative bg-goldWash rounded-xl p-8 w-[85vw] sm:w-[320px] md:w-[300px] lg:w-[280px] xl:w-[260px] flex-shrink-0 snap-center hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer border-2 border-gold shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.35)] overflow-hidden group border-l-[4px] border-l-navy">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${branding.bg} shadow-sm`}>
              {getSourceIcon(branding.icon)}
            </div>
            <span className={`text-xs font-bold ${branding.color} uppercase tracking-wide`}>
              {news.source}
            </span>
          </div>
          <span className="text-xs text-charcoal/50 font-light">{timeAgo}</span>
        </div>

        <h3 className="font-medium text-base leading-tight line-clamp-2 mb-3 text-charcoal">
          {news.headline}
        </h3>

        <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-3 mb-4 font-light">
          {news.summary}
        </p>

        <div className="pt-3 border-t border-gold/30">
          <button className="text-xs text-gold hover:text-gold/80 font-medium transition-opacity">
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
}

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  if (diffInHours < 1) {
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    return `${diffInMins}m ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  }
}
