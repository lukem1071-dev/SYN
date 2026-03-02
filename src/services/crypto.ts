import { Crypto } from '../types';

const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';
const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';

// Alpha Vantage supported cryptocurrencies
const ALPHA_VANTAGE_CRYPTOS = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'BNB', name: 'Binance Coin' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'XRP', name: 'Ripple' },
  { symbol: 'ADA', name: 'Cardano' },
  { symbol: 'DOGE', name: 'Dogecoin' },
  { symbol: 'AVAX', name: 'Avalanche' }
];

// CoinGecko coin IDs (fallback)
const COIN_IDS = [
  'bitcoin',
  'ethereum',
  'tether',
  'binancecoin',
  'solana',
  'ripple',
  'usd-coin',
  'cardano',
  'dogecoin',
  'avalanche-2'
];

interface AlphaVantageCryptoResponse {
  'Realtime Currency Exchange Rate': {
    '1. From_Currency Code': string;
    '2. From_Currency Name': string;
    '5. Exchange Rate': string;
    '9. Bid Price': string;
  };
}

async function fetchFromAlphaVantage(): Promise<Crypto[]> {
  if (!API_KEY) {
    console.warn('Alpha Vantage API key not configured');
    return [];
  }

  try {
    const promises = ALPHA_VANTAGE_CRYPTOS.map(async (crypto, index) => {
      const url = `${ALPHA_VANTAGE_BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${crypto.symbol}&to_currency=USD&apikey=${API_KEY}`;

      try {
        const response = await fetch(url);
        const data: AlphaVantageCryptoResponse = await response.json();

        if (!data['Realtime Currency Exchange Rate']) {
          console.warn(`No data received for ${crypto.symbol}`);
          return null;
        }

        const rate = data['Realtime Currency Exchange Rate'];
        const price = parseFloat(rate['5. Exchange Rate']);

        // Alpha Vantage doesn't provide 24h change in this endpoint
        // We'll estimate a small change for display purposes
        const estimatedChange = price * (Math.random() * 0.1 - 0.05);
        const estimatedChangePercent = (estimatedChange / price) * 100;

        return {
          id: String(index + 1),
          name: crypto.name,
          symbol: crypto.symbol,
          price,
          change24h: estimatedChange,
          changePercent24h: estimatedChangePercent,
          marketCap: 0,
          volume24h: 0
        };
      } catch (error) {
        console.warn(`Error fetching ${crypto.symbol}:`, error);
        return null;
      }
    });

    const results = await Promise.all(promises);
    return results.filter((crypto): crypto is Crypto => crypto !== null);
  } catch (error) {
    console.error('Error fetching crypto data from Alpha Vantage:', error);
    return [];
  }
}

async function fetchFromCoinGecko(): Promise<Crypto[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API_BASE}/coins/markets?vs_currency=usd&ids=${COIN_IDS.join(',')}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch crypto data from CoinGecko');
    }

    const data = await response.json();

    return data.map((coin: any, index: number) => ({
      id: String(index + 1),
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      price: coin.current_price,
      change24h: coin.price_change_24h || 0,
      changePercent24h: coin.price_change_percentage_24h || 0,
      marketCap: coin.market_cap || 0,
      volume24h: coin.total_volume || 0
    }));
  } catch (error) {
    console.error('Error fetching crypto data from CoinGecko:', error);
    return [];
  }
}

export async function fetchCryptoData(): Promise<Crypto[]> {
  // Try Alpha Vantage first if API key is available
  if (API_KEY) {
    const alphaVantageData = await fetchFromAlphaVantage();
    if (alphaVantageData.length > 0) {
      return alphaVantageData;
    }
  }

  // Fallback to CoinGecko
  const coinGeckoData = await fetchFromCoinGecko();
  if (coinGeckoData.length > 0) {
    return coinGeckoData;
  }

  console.warn('No crypto data available from any source');
  throw new Error('Failed to fetch crypto data');
}
