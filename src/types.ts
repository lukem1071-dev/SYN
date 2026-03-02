export interface NBAGame {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: string;
  spread: string;
  overUnder: number;
  totalPoints: number;
}

export interface MLBGame {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: string;
  spread: string;
  overUnder: number;
  totalRuns: number;
}

export interface NHLGame {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: string;
  spread: string;
  overUnder: number;
  totalGoals: number;
  period?: string;
}

export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  marketCap: number;
  volume24h: number;
}

export interface Stock {
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface NewsItem {
  id: string;
  headline: string;
  source: string;
  summary: string;
  publishedAt: string;
}

export interface ScheduledGame {
  id: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  channel?: string;
}

export interface UserSettings {
  stockTickers: string[];
  enabledCategories: {
    nba: boolean;
    mlb: boolean;
    nhl: boolean;
    crypto: boolean;
    stocks: boolean;
    news: boolean;
  };
}
