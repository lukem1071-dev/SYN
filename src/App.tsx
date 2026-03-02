import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { UserSettings } from './types';
import { loadSettings, saveSettings } from './utils/storage';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'settings'>('dashboard');
  const [settings, setSettings] = useState<UserSettings>(loadSettings());

  const handleSaveSettings = (newSettings: UserSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  useEffect(() => {
    document.title = 'DailyFeed - Your Daily Information Dashboard';
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header currentView={currentView} onNavigate={setCurrentView} />

      {currentView === 'dashboard' && <Dashboard settings={settings} />}
      {currentView === 'settings' && (
        <Settings settings={settings} onSaveSettings={handleSaveSettings} />
      )}
    </div>
  );
}

export default App;
