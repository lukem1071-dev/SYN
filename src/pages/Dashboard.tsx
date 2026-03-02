import { useState, useEffect } from 'react';
import { UserSettings, NBAGame, MLBGame, NHLGame, NewsItem, Stock, Crypto } from '../types';
import { mockNBAGames, mockMLBGames, mockNHLGames, mockCryptos, mockStocks, mockNews, mockNBASchedule, mockMLBSchedule, mockNHLSchedule } from '../mockData';
import { fetchNBAScores, fetchMLBScores, fetchNHLScores } from '../services/espn';
import { fetchBingNews } from '../services/news';
import { fetchStockData } from '../services/alphaVantage';
import { fetchCryptoData } from '../services/crypto';
import CategoryRow from '../components/CategoryRow';
import NBACard from '../components/NBACard';
import MLBCard from '../components/MLBCard';
import NHLCard from '../components/NHLCard';
import CryptoCard from '../components/CryptoCard';
import StockCard from '../components/StockCard';
import NewsCard from '../components/NewsCard';
import TodaysGamesCard from '../components/TodaysGamesCard';
import ScheduleModal from '../components/ScheduleModal';

interface DashboardProps {
  settings: UserSettings;
}

export default function Dashboard({ settings }: DashboardProps) {
  const [showNBASchedule, setShowNBASchedule] = useState(false);
  const [showMLBSchedule, setShowMLBSchedule] = useState(false);
  const [showNHLSchedule, setShowNHLSchedule] = useState(false);

  const [nbaGames, setNBAGames] = useState<NBAGame[]>(mockNBAGames);
  const [mlbGames, setMLBGames] = useState<MLBGame[]>(mockMLBGames);
  const [nhlGames, setNHLGames] = useState<NHLGame[]>(mockNHLGames);
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [cryptos, setCryptos] = useState<Crypto[]>(mockCryptos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [nbaData, mlbData, nhlData, newsData, stockData, cryptoData] = await Promise.all([
          fetchNBAScores(),
          fetchMLBScores(),
          fetchNHLScores(),
          fetchBingNews(),
          fetchStockData(),
          fetchCryptoData()
        ]);

        if (nbaData.length > 0) setNBAGames(nbaData);
        if (mlbData.length > 0) setMLBGames(mlbData);
        if (nhlData.length > 0) setNHLGames(nhlData);
        if (newsData.length > 0) setNews(newsData);
        if (stockData.length > 0) setStocks(stockData);
        if (cryptoData.length > 0) setCryptos(cryptoData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
    const interval = setInterval(loadData, 300000);
    return () => clearInterval(interval);
  }, []);

  const filteredStocks = settings.stockTickers.length > 0
    ? stocks.filter(stock => settings.stockTickers.includes(stock.ticker))
    : stocks;

  return (
    <div className="min-h-screen bg-cream py-8">
      {loading && (
        <div className="text-center text-charcoal/60 py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
          <p className="mt-4 font-light">Loading data...</p>
        </div>
      )}

      {!loading && (
        <>
          {settings.enabledCategories.nba && (
            <CategoryRow title="NBA Scores">
              {nbaGames.map((game) => (
                <NBACard key={game.id} game={game} />
              ))}
              <TodaysGamesCard sport="NBA" onShowSchedule={() => setShowNBASchedule(true)} />
            </CategoryRow>
          )}

          {settings.enabledCategories.mlb && (
            <CategoryRow title="MLB Scores">
              {mlbGames.map((game) => (
                <MLBCard key={game.id} game={game} />
              ))}
              <TodaysGamesCard sport="MLB" onShowSchedule={() => setShowMLBSchedule(true)} />
            </CategoryRow>
          )}

          {settings.enabledCategories.nhl && (
            <CategoryRow title="NHL Scores">
              {nhlGames.map((game) => (
                <NHLCard key={game.id} game={game} />
              ))}
              <TodaysGamesCard sport="NHL" onShowSchedule={() => setShowNHLSchedule(true)} />
            </CategoryRow>
          )}

          {settings.enabledCategories.crypto && (
            <CategoryRow title="Cryptocurrency">
              {cryptos.map((crypto) => (
                <CryptoCard key={crypto.id} crypto={crypto} />
              ))}
            </CategoryRow>
          )}

          {settings.enabledCategories.stocks && filteredStocks.length > 0 && (
            <CategoryRow title="Stocks">
              {filteredStocks.map(stock => (
                <StockCard key={stock.ticker} stock={stock} />
              ))}
            </CategoryRow>
          )}

          {settings.enabledCategories.news && (
            <CategoryRow title="Top News">
              {news.map(newsItem => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))}
            </CategoryRow>
          )}
        </>
      )}

      {!settings.enabledCategories.nba &&
        !settings.enabledCategories.mlb &&
        !settings.enabledCategories.nhl &&
        !settings.enabledCategories.crypto &&
        !settings.enabledCategories.stocks &&
        !settings.enabledCategories.news && (
          <div className="text-center text-charcoal/50 py-20">
            <p className="text-xl font-light">No categories enabled.</p>
            <p className="mt-2 font-light">Go to Settings to enable some categories.</p>
          </div>
        )}

      <ScheduleModal
        isOpen={showNBASchedule}
        onClose={() => setShowNBASchedule(false)}
        games={mockNBASchedule}
        sport="NBA"
      />

      <ScheduleModal
        isOpen={showMLBSchedule}
        onClose={() => setShowMLBSchedule(false)}
        games={mockMLBSchedule}
        sport="MLB"
      />

      <ScheduleModal
        isOpen={showNHLSchedule}
        onClose={() => setShowNHLSchedule(false)}
        games={mockNHLSchedule}
        sport="NHL"
      />
    </div>
  );
}
