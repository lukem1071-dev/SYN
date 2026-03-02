import { NBAGame, MLBGame, NHLGame, Crypto, Stock, NewsItem, ScheduledGame } from './types';

export const mockNBAGames: NBAGame[] = [
  {
    id: '1',
    date: '2026-02-26',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    homeScore: 118,
    awayScore: 112,
    winner: 'Lakers',
    spread: 'LAL -3.5',
    overUnder: 225.5,
    totalPoints: 230
  },
  {
    id: '2',
    date: '2026-02-26',
    homeTeam: 'Celtics',
    awayTeam: 'Heat',
    homeScore: 105,
    awayScore: 108,
    winner: 'Heat',
    spread: 'MIA +2.5',
    overUnder: 218.5,
    totalPoints: 213
  },
  {
    id: '3',
    date: '2026-02-26',
    homeTeam: 'Bucks',
    awayTeam: 'Nets',
    homeScore: 124,
    awayScore: 119,
    winner: 'Bucks',
    spread: 'MIL -6.5',
    overUnder: 238.5,
    totalPoints: 243
  },
  {
    id: '4',
    date: '2026-02-26',
    homeTeam: 'Mavericks',
    awayTeam: 'Suns',
    homeScore: 115,
    awayScore: 120,
    winner: 'Suns',
    spread: 'PHX -1.5',
    overUnder: 232.5,
    totalPoints: 235
  },
  {
    id: '5',
    date: '2026-02-26',
    homeTeam: 'Nuggets',
    awayTeam: 'Clippers',
    homeScore: 110,
    awayScore: 107,
    winner: 'Nuggets',
    spread: 'DEN -4.5',
    overUnder: 220.5,
    totalPoints: 217
  },
  {
    id: '6',
    date: '2026-02-26',
    homeTeam: '76ers',
    awayTeam: 'Knicks',
    homeScore: 99,
    awayScore: 102,
    winner: 'Knicks',
    spread: 'NYK +3.5',
    overUnder: 208.5,
    totalPoints: 201
  }
];

export const mockMLBGames: MLBGame[] = [
  {
    id: '1',
    date: '2026-02-26',
    homeTeam: 'Yankees',
    awayTeam: 'Red Sox',
    homeScore: 5,
    awayScore: 3,
    winner: 'Yankees',
    spread: 'NYY -1.5',
    overUnder: 8.5,
    totalRuns: 8
  },
  {
    id: '2',
    date: '2026-02-26',
    homeTeam: 'Dodgers',
    awayTeam: 'Giants',
    homeScore: 2,
    awayScore: 4,
    winner: 'Giants',
    spread: 'SF +1.5',
    overUnder: 7.5,
    totalRuns: 6
  },
  {
    id: '3',
    date: '2026-02-26',
    homeTeam: 'Cubs',
    awayTeam: 'Cardinals',
    homeScore: 7,
    awayScore: 6,
    winner: 'Cubs',
    spread: 'CHC -1.5',
    overUnder: 9.5,
    totalRuns: 13
  },
  {
    id: '4',
    date: '2026-02-26',
    homeTeam: 'Astros',
    awayTeam: 'Rangers',
    homeScore: 3,
    awayScore: 8,
    winner: 'Rangers',
    spread: 'TEX +1.5',
    overUnder: 8.5,
    totalRuns: 11
  },
  {
    id: '5',
    date: '2026-02-26',
    homeTeam: 'Braves',
    awayTeam: 'Mets',
    homeScore: 4,
    awayScore: 4,
    winner: 'Tie',
    spread: 'ATL -1.5',
    overUnder: 7.5,
    totalRuns: 8
  },
  {
    id: '6',
    date: '2026-02-26',
    homeTeam: 'Mariners',
    awayTeam: 'Athletics',
    homeScore: 6,
    awayScore: 2,
    winner: 'Mariners',
    spread: 'SEA -1.5',
    overUnder: 7.5,
    totalRuns: 8
  }
];

export const mockNHLGames: NHLGame[] = [
  {
    id: '1',
    date: '2026-02-26',
    homeTeam: 'Maple Leafs',
    awayTeam: 'Canadiens',
    homeScore: 4,
    awayScore: 3,
    winner: 'Maple Leafs',
    spread: 'TOR -1.5',
    overUnder: 6.5,
    totalGoals: 7,
    period: 'OT'
  },
  {
    id: '2',
    date: '2026-02-26',
    homeTeam: 'Rangers',
    awayTeam: 'Bruins',
    homeScore: 2,
    awayScore: 5,
    winner: 'Bruins',
    spread: 'BOS -1.5',
    overUnder: 5.5,
    totalGoals: 7
  },
  {
    id: '3',
    date: '2026-02-26',
    homeTeam: 'Avalanche',
    awayTeam: 'Golden Knights',
    homeScore: 3,
    awayScore: 2,
    winner: 'Avalanche',
    spread: 'COL -1.5',
    overUnder: 6.5,
    totalGoals: 5
  },
  {
    id: '4',
    date: '2026-02-26',
    homeTeam: 'Lightning',
    awayTeam: 'Panthers',
    homeScore: 4,
    awayScore: 4,
    winner: 'Panthers',
    spread: 'FLA +1.5',
    overUnder: 6.5,
    totalGoals: 8,
    period: 'SO'
  },
  {
    id: '5',
    date: '2026-02-26',
    homeTeam: 'Oilers',
    awayTeam: 'Flames',
    homeScore: 6,
    awayScore: 3,
    winner: 'Oilers',
    spread: 'EDM -1.5',
    overUnder: 7.5,
    totalGoals: 9
  },
  {
    id: '6',
    date: '2026-02-26',
    homeTeam: 'Penguins',
    awayTeam: 'Capitals',
    homeScore: 1,
    awayScore: 3,
    winner: 'Capitals',
    spread: 'WSH +1.5',
    overUnder: 5.5,
    totalGoals: 4
  }
];

export const mockCryptos: Crypto[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 94250.32,
    change24h: 2847.56,
    changePercent24h: 3.12,
    marketCap: 1856000000000,
    volume24h: 45200000000
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3420.18,
    change24h: -125.43,
    changePercent24h: -3.54,
    marketCap: 411000000000,
    volume24h: 18300000000
  },
  {
    id: '3',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change24h: 0.00,
    changePercent24h: 0.02,
    marketCap: 138000000000,
    volume24h: 72100000000
  },
  {
    id: '4',
    name: 'BNB',
    symbol: 'BNB',
    price: 612.45,
    change24h: 18.72,
    changePercent24h: 3.15,
    marketCap: 89400000000,
    volume24h: 2100000000
  },
  {
    id: '5',
    name: 'Solana',
    symbol: 'SOL',
    price: 178.23,
    change24h: 9.87,
    changePercent24h: 5.86,
    marketCap: 85200000000,
    volume24h: 4800000000
  },
  {
    id: '6',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.628,
    change24h: -0.032,
    changePercent24h: -4.85,
    marketCap: 35600000000,
    volume24h: 1900000000
  },
  {
    id: '7',
    name: 'USD Coin',
    symbol: 'USDC',
    price: 1.00,
    change24h: 0.00,
    changePercent24h: -0.01,
    marketCap: 50200000000,
    volume24h: 8500000000
  },
  {
    id: '8',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.589,
    change24h: 0.023,
    changePercent24h: 4.06,
    marketCap: 20800000000,
    volume24h: 780000000
  },
  {
    id: '9',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.142,
    change24h: -0.008,
    changePercent24h: -5.33,
    marketCap: 20400000000,
    volume24h: 1200000000
  },
  {
    id: '10',
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 42.87,
    change24h: 2.14,
    changePercent24h: 5.25,
    marketCap: 17300000000,
    volume24h: 890000000
  }
];

export const mockNHLSchedule: ScheduledGame[] = [
  {
    id: 'h1',
    homeTeam: 'Canadiens',
    awayTeam: 'Maple Leafs',
    time: '7:00 PM ET',
    channel: 'ESPN+'
  },
  {
    id: 'h2',
    homeTeam: 'Bruins',
    awayTeam: 'Rangers',
    time: '7:30 PM ET',
    channel: 'TNT'
  },
  {
    id: 'h3',
    homeTeam: 'Golden Knights',
    awayTeam: 'Avalanche',
    time: '10:00 PM ET',
    channel: 'ESPN'
  },
  {
    id: 'h4',
    homeTeam: 'Panthers',
    awayTeam: 'Lightning',
    time: '7:00 PM ET',
    channel: 'Bally Sports'
  },
  {
    id: 'h5',
    homeTeam: 'Flames',
    awayTeam: 'Oilers',
    time: '9:00 PM ET',
    channel: 'Sportsnet'
  },
  {
    id: 'h6',
    homeTeam: 'Capitals',
    awayTeam: 'Penguins',
    time: '7:30 PM ET',
    channel: 'NBC Sports'
  }
];

export const mockStocks: Stock[] = [
  {
    ticker: 'SPY',
    price: 512.45,
    change: 3.24,
    changePercent: 0.64
  },
  {
    ticker: 'QQQ',
    price: 438.92,
    change: -2.15,
    changePercent: -0.49
  },
  {
    ticker: 'AAPL',
    price: 182.55,
    change: 1.87,
    changePercent: 1.03
  },
  {
    ticker: 'TSLA',
    price: 201.28,
    change: -5.42,
    changePercent: -2.62
  },
  {
    ticker: 'NVDA',
    price: 875.34,
    change: 12.56,
    changePercent: 1.46
  }
];

export const mockNBASchedule: ScheduledGame[] = [
  {
    id: 's1',
    homeTeam: 'Warriors',
    awayTeam: 'Lakers',
    time: '7:30 PM ET',
    channel: 'ESPN'
  },
  {
    id: 's2',
    homeTeam: 'Heat',
    awayTeam: 'Celtics',
    time: '8:00 PM ET',
    channel: 'TNT'
  },
  {
    id: 's3',
    homeTeam: 'Nets',
    awayTeam: 'Bucks',
    time: '8:30 PM ET',
    channel: 'NBA TV'
  },
  {
    id: 's4',
    homeTeam: 'Suns',
    awayTeam: 'Mavericks',
    time: '9:00 PM ET',
    channel: 'ESPN'
  },
  {
    id: 's5',
    homeTeam: 'Clippers',
    awayTeam: 'Nuggets',
    time: '10:00 PM ET',
    channel: 'TNT'
  },
  {
    id: 's6',
    homeTeam: 'Knicks',
    awayTeam: '76ers',
    time: '7:00 PM ET',
    channel: 'MSG'
  },
  {
    id: 's7',
    homeTeam: 'Raptors',
    awayTeam: 'Cavaliers',
    time: '7:30 PM ET',
    channel: 'NBA TV'
  },
  {
    id: 's8',
    homeTeam: 'Bulls',
    awayTeam: 'Pacers',
    time: '8:00 PM ET'
  }
];

export const mockMLBSchedule: ScheduledGame[] = [
  {
    id: 'm1',
    homeTeam: 'Red Sox',
    awayTeam: 'Yankees',
    time: '7:10 PM ET',
    channel: 'ESPN'
  },
  {
    id: 'm2',
    homeTeam: 'Giants',
    awayTeam: 'Dodgers',
    time: '10:15 PM ET',
    channel: 'MLB Network'
  },
  {
    id: 'm3',
    homeTeam: 'Cardinals',
    awayTeam: 'Cubs',
    time: '8:15 PM ET',
    channel: 'Fox Sports'
  },
  {
    id: 'm4',
    homeTeam: 'Rangers',
    awayTeam: 'Astros',
    time: '8:05 PM ET',
    channel: 'ESPN'
  },
  {
    id: 'm5',
    homeTeam: 'Mets',
    awayTeam: 'Braves',
    time: '7:20 PM ET',
    channel: 'SNY'
  },
  {
    id: 'm6',
    homeTeam: 'Athletics',
    awayTeam: 'Mariners',
    time: '9:40 PM ET',
    channel: 'MLB Network'
  },
  {
    id: 'm7',
    homeTeam: 'Blue Jays',
    awayTeam: 'Rays',
    time: '7:07 PM ET'
  },
  {
    id: 'm8',
    homeTeam: 'White Sox',
    awayTeam: 'Twins',
    time: '8:10 PM ET',
    channel: 'NBC Sports'
  }
];

export const mockNews: NewsItem[] = [
  {
    id: '1',
    headline: 'Markets Rally on Strong Economic Data',
    source: 'Financial Times',
    summary: 'Stock markets surged today following better-than-expected employment figures and GDP growth, signaling continued economic resilience.',
    publishedAt: '2026-02-27T08:30:00Z'
  },
  {
    id: '2',
    headline: 'Tech Giants Announce AI Partnership',
    source: 'TechCrunch',
    summary: 'Leading technology companies have formed a new alliance to develop ethical AI standards and share research findings.',
    publishedAt: '2026-02-27T07:15:00Z'
  },
  {
    id: '3',
    headline: 'Climate Summit Reaches Historic Agreement',
    source: 'BBC News',
    summary: 'World leaders at the Global Climate Summit have agreed on ambitious new carbon reduction targets for the next decade.',
    publishedAt: '2026-02-27T06:45:00Z'
  },
  {
    id: '4',
    headline: 'Breakthrough in Renewable Energy Storage',
    source: 'Science Daily',
    summary: 'Researchers have developed a new battery technology that could revolutionize solar and wind energy storage capabilities.',
    publishedAt: '2026-02-27T05:20:00Z'
  },
  {
    id: '5',
    headline: 'Major Sports League Expands Internationally',
    source: 'ESPN',
    summary: 'The league announced plans to add four new international teams over the next three years, marking its largest expansion ever.',
    publishedAt: '2026-02-27T04:00:00Z'
  },
  {
    id: '6',
    headline: 'Healthcare Innovation Reduces Treatment Costs',
    source: 'Reuters',
    summary: 'A new medical procedure has shown promising results in trials, potentially reducing treatment costs by up to 60%.',
    publishedAt: '2026-02-26T22:30:00Z'
  },
  {
    id: '7',
    headline: 'Space Exploration Reaches New Milestone',
    source: 'Space.com',
    summary: 'A successful mission has brought back samples from a distant asteroid, providing new insights into the solar system formation.',
    publishedAt: '2026-02-26T21:15:00Z'
  },
  {
    id: '8',
    headline: 'Education Reform Shows Positive Results',
    source: 'Education Weekly',
    summary: 'New teaching methods implemented in pilot programs have led to significant improvements in student performance across multiple subjects.',
    publishedAt: '2026-02-26T20:00:00Z'
  }
];
