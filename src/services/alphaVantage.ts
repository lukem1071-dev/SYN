import { Stock } from '../types';

const ALPHA_VANTAGE_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
const FINNHUB_KEY = import.meta.env.VITE_FINNHUB_KEY;
const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';
const YAHOO_FINANCE_API = 'https://query1.finance.yahoo.com/v8/finance/chart';

const STOCK_TICKERS = ['SPY', 'AAPL', 'TSLA', 'NVDA', 'GOOGL', 'AMZN'];

interface FinnhubQuote {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
}

interface YahooFinanceResponse {
  chart: {
    result: [{
      meta: {
        symbol: string;
        regularMarketPrice: number;
        previousClose: number;
      };
    }];
  };
}

interface AlphaVantageQuote {
  'Global Quote': {
    '01. symbol': string;
    '05. price': string;
    '09. change': string;
    '10. change percent': string;
  };
}

async function fetchFromFinnhub(): Promise<Stock[]> {
  if (!FINNHUB_KEY) {
    console.warn('Finnhub API key not configured');
    return [];
  }

  try {
    const promises = STOCK_TICKERS.map(async (ticker) => {
      const url = `${FINNHUB_BASE_URL}/quote?symbol=${ticker}&token=${FINNHUB_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.warn(`Failed to fetch ${ticker} from Finnhub`);
          return null;
        }

        const data: FinnhubQuote = await response.json();

        if (!data.c || data.c === 0) {
          console.warn(`No data received for ${ticker}`);
          return null;
        }

        return {
          ticker,
          price: data.c,
          change: data.d,
          changePercent: data.dp,
        };
      } catch (error) {
        console.warn(`Error fetching ${ticker}:`, error);
        return null;
      }
    });

    const results = await Promise.all(promises);
    return results.filter((stock): stock is Stock => stock !== null);
  } catch (error) {
    console.error('Error fetching stock data from Finnhub:', error);
    return [];
  }
}

async function fetchFromYahooFinance(): Promise<Stock[]> {
  try {
    const promises = STOCK_TICKERS.map(async (ticker) => {
      const url = `${YAHOO_FINANCE_API}/${ticker}?interval=1d&range=1d`;

      const response = await fetch(url);
      if (!response.ok) {
        console.warn(`Failed to fetch ${ticker} from Yahoo Finance`);
        return null;
      }

      const data: YahooFinanceResponse = await response.json();

      if (!data.chart?.result?.[0]?.meta) {
        console.warn(`No data received for ${ticker}`);
        return null;
      }

      const meta = data.chart.result[0].meta;
      const price = meta.regularMarketPrice;
      const previousClose = meta.previousClose;
      const change = price - previousClose;
      const changePercent = (change / previousClose) * 100;

      return {
        ticker: meta.symbol,
        price,
        change,
        changePercent,
      };
    });

    const results = await Promise.all(promises);
    return results.filter((stock): stock is Stock => stock !== null);
  } catch (error) {
    console.error('Error fetching stock data from Yahoo Finance:', error);
    return [];
  }
}

async function fetchFromAlphaVantage(): Promise<Stock[]> {
  if (!ALPHA_VANTAGE_KEY) {
    return [];
  }

  try {
    const promises = STOCK_TICKERS.map(async (ticker) => {
      const url = `${ALPHA_VANTAGE_BASE_URL}?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${ALPHA_VANTAGE_KEY}`;

      const response = await fetch(url);
      const data: AlphaVantageQuote = await response.json();

      if (!data['Global Quote'] || !data['Global Quote']['05. price']) {
        return null;
      }

      const quote = data['Global Quote'];
      const price = parseFloat(quote['05. price']);
      const change = parseFloat(quote['09. change']);
      const changePercentStr = quote['10. change percent'].replace('%', '');
      const changePercent = parseFloat(changePercentStr);

      return {
        ticker: quote['01. symbol'],
        price,
        change,
        changePercent,
      };
    });

    const results = await Promise.all(promises);
    return results.filter((stock): stock is Stock => stock !== null);
  } catch (error) {
    console.error('Error fetching stock data from Alpha Vantage:', error);
    return [];
  }
}

export async function fetchStockData(): Promise<Stock[]> {
  if (FINNHUB_KEY) {
    const finnhubData = await fetchFromFinnhub();
    if (finnhubData.length > 0) {
      return finnhubData;
    }
  }

  const yahooData = await fetchFromYahooFinance();
  if (yahooData.length > 0) {
    return yahooData;
  }

  if (ALPHA_VANTAGE_KEY) {
    const alphaVantageData = await fetchFromAlphaVantage();
    if (alphaVantageData.length > 0) {
      return alphaVantageData;
    }
  }

  console.warn('No stock data available from any source');
  return [];
}
