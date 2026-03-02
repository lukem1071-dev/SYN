import { Home, Settings } from 'lucide-react';

interface HeaderProps {
  currentView: 'dashboard' | 'settings';
  onNavigate: (view: 'dashboard' | 'settings') => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  return (
    <header className="relative bg-white sticky top-0 z-50 border-b border-champagne shadow-sm overflow-hidden">
      <div className="relative z-10 px-8 py-5 flex items-center justify-between">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
            currentView === 'dashboard'
              ? 'bg-gold/10 text-gold border border-gold/30'
              : 'text-charcoal/60 hover:text-charcoal hover:bg-champagne/50'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="font-medium">Home</span>
        </button>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold tracking-tight">
          <span className="text-gold">S</span>
          <span className="text-charcoal">Y</span>
          <span className="text-gold">N</span>
        </h1>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('settings')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              currentView === 'settings'
                ? 'bg-gold/10 text-gold border border-gold/30'
                : 'text-charcoal/60 hover:text-charcoal hover:bg-champagne/50'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span className="font-medium">Settings</span>
          </button>

          <div className="text-charcoal/50 text-sm font-light">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
