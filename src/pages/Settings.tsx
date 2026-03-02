import { useState } from 'react';
import { UserSettings } from '../types';
import { X, Plus, Save } from 'lucide-react';

interface SettingsProps {
  settings: UserSettings;
  onSaveSettings: (settings: UserSettings) => void;
}

export default function Settings({ settings, onSaveSettings }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState<UserSettings>(settings);
  const [newTicker, setNewTicker] = useState('');
  const [saved, setSaved] = useState(false);

  const handleToggleCategory = (category: keyof UserSettings['enabledCategories']) => {
    setLocalSettings({
      ...localSettings,
      enabledCategories: {
        ...localSettings.enabledCategories,
        [category]: !localSettings.enabledCategories[category],
      },
    });
  };

  const handleAddTicker = () => {
    const ticker = newTicker.trim().toUpperCase();
    if (ticker && !localSettings.stockTickers.includes(ticker)) {
      setLocalSettings({
        ...localSettings,
        stockTickers: [...localSettings.stockTickers, ticker],
      });
      setNewTicker('');
    }
  };

  const handleRemoveTicker = (ticker: string) => {
    setLocalSettings({
      ...localSettings,
      stockTickers: localSettings.stockTickers.filter(t => t !== ticker),
    });
  };

  const handleSave = () => {
    onSaveSettings(localSettings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream py-8 px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-charcoal">Settings</h1>

        <div className="relative bg-white rounded-lg p-5 mb-5 border border-champagne shadow-md overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>

          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-3 text-charcoal">Categories</h2>
            <p className="text-charcoal/60 font-light mb-4 text-sm">Toggle which categories appear on your dashboard</p>

            <div className="space-y-3">
              {Object.entries(localSettings.enabledCategories).map(([key, enabled]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-cream/50 rounded-lg border border-champagne shadow-md/50">
                  <span className="font-medium capitalize text-charcoal text-sm">
                    {key === 'nba' ? 'NBA Scores' : key === 'mlb' ? 'MLB Scores' : key === 'nhl' ? 'NHL Scores' : key === 'crypto' ? 'Cryptocurrency' : key === 'stocks' ? 'Stocks' : 'News'}
                  </span>
                  <button
                    onClick={() => handleToggleCategory(key as keyof UserSettings['enabledCategories'])}
                    className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
                      enabled ? 'bg-gold' : 'bg-champagne'
                    }`}
                  >
                    <span
                      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                        enabled ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-lg p-5 mb-5 border border-champagne shadow-md overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-3 text-charcoal">Stock Tickers</h2>
            <p className="text-charcoal/60 font-light mb-4 text-sm">Manage which stock tickers to display</p>

            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={newTicker}
                onChange={(e) => setNewTicker(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTicker()}
                placeholder="Add ticker (e.g., MSFT)"
                className="flex-1 bg-cream/50 text-charcoal px-3 py-2 text-sm rounded border border-champagne shadow-md focus:outline-none focus:border-gold"
              />
              <button
                onClick={handleAddTicker}
                className="bg-gold hover:bg-gold/90 text-charcoal px-4 py-2 text-sm rounded flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {localSettings.stockTickers.map(ticker => (
                <div
                  key={ticker}
                  className="bg-cream/50 px-3 py-1.5 rounded-lg flex items-center gap-2 border border-champagne shadow-md/50"
                >
                  <span className="font-semibold text-charcoal text-sm">{ticker}</span>
                  <button
                    onClick={() => handleRemoveTicker(ticker)}
                    className="text-charcoal/60 font-light hover:text-red-500 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {localSettings.stockTickers.length === 0 && (
              <p className="text-charcoal/50 font-light text-center py-3 text-sm">No tickers added yet</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className={`px-6 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-sm transition-all ${
              saved
                ? 'bg-gold text-charcoal'
                : 'bg-gold hover:bg-gold/90 text-charcoal'
            }`}
          >
            <Save className="w-4 h-4" />
            {saved ? 'Saved!' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}
