import { UserSettings } from '../types';

const SETTINGS_KEY = 'dailyfeed_settings';

export const defaultSettings: UserSettings = {
  stockTickers: ['AAPL', 'TSLA', 'NVDA', 'SPY', 'BTC', 'GOOGL'],
  enabledCategories: {
    nba: true,
    mlb: true,
    nhl: true,
    crypto: true,
    stocks: true,
    news: true,
  },
};

export function loadSettings(): UserSettings {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading settings:', error);
  }
  return defaultSettings;
}

export function saveSettings(settings: UserSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
  }
}
