import { NBAGame, MLBGame, NHLGame } from '../types';

const ESPN_BASE_URL = 'https://site.api.espn.com/apis/site/v2/sports';

async function fetchESPN(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`ESPN API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching from ESPN:', error);
    return null;
  }
}

export async function fetchNBAScores(): Promise<NBAGame[]> {
  const data = await fetchESPN(`${ESPN_BASE_URL}/basketball/nba/scoreboard`);
  if (!data?.events) return [];

  return data.events.map((event: any, index: number) => {
    const competition = event.competitions[0];
    const homeTeam = competition.competitors.find((c: any) => c.homeAway === 'home');
    const awayTeam = competition.competitors.find((c: any) => c.homeAway === 'away');

    const homeScore = parseInt(homeTeam?.score || '0');
    const awayScore = parseInt(awayTeam?.score || '0');
    const winner = homeScore > awayScore ? homeTeam?.team?.displayName :
                   awayScore > homeScore ? awayTeam?.team?.displayName : 'Tie';

    return {
      id: event.id || `nba-${index}`,
      date: event.date,
      homeTeam: homeTeam?.team?.displayName || 'TBD',
      awayTeam: awayTeam?.team?.displayName || 'TBD',
      homeScore,
      awayScore,
      winner,
      spread: competition.odds?.[0]?.details || 'N/A',
      overUnder: parseFloat(competition.odds?.[0]?.overUnder || '0'),
      totalPoints: homeScore + awayScore
    };
  });
}

export async function fetchMLBScores(): Promise<MLBGame[]> {
  const data = await fetchESPN(`${ESPN_BASE_URL}/baseball/mlb/scoreboard`);
  if (!data?.events) return [];

  return data.events.map((event: any, index: number) => {
    const competition = event.competitions[0];
    const homeTeam = competition.competitors.find((c: any) => c.homeAway === 'home');
    const awayTeam = competition.competitors.find((c: any) => c.homeAway === 'away');

    const homeScore = parseInt(homeTeam?.score || '0');
    const awayScore = parseInt(awayTeam?.score || '0');
    const winner = homeScore > awayScore ? homeTeam?.team?.displayName :
                   awayScore > homeScore ? awayTeam?.team?.displayName : 'Tie';

    return {
      id: event.id || `mlb-${index}`,
      date: event.date,
      homeTeam: homeTeam?.team?.displayName || 'TBD',
      awayTeam: awayTeam?.team?.displayName || 'TBD',
      homeScore,
      awayScore,
      winner,
      spread: competition.odds?.[0]?.details || 'N/A',
      overUnder: parseFloat(competition.odds?.[0]?.overUnder || '0'),
      totalRuns: homeScore + awayScore
    };
  });
}

export async function fetchNHLScores(): Promise<NHLGame[]> {
  const data = await fetchESPN(`${ESPN_BASE_URL}/hockey/nhl/scoreboard`);
  if (!data?.events) return [];

  return data.events.map((event: any, index: number) => {
    const competition = event.competitions[0];
    const homeTeam = competition.competitors.find((c: any) => c.homeAway === 'home');
    const awayTeam = competition.competitors.find((c: any) => c.homeAway === 'away');

    const homeScore = parseInt(homeTeam?.score || '0');
    const awayScore = parseInt(awayTeam?.score || '0');
    const winner = homeScore > awayScore ? homeTeam?.team?.displayName :
                   awayScore > homeScore ? awayTeam?.team?.displayName : 'Tie';

    const status = event.status?.type?.detail || '';
    const period = status.includes('OT') ? 'OT' : status.includes('SO') ? 'SO' : undefined;

    return {
      id: event.id || `nhl-${index}`,
      date: event.date,
      homeTeam: homeTeam?.team?.displayName || 'TBD',
      awayTeam: awayTeam?.team?.displayName || 'TBD',
      homeScore,
      awayScore,
      winner,
      spread: competition.odds?.[0]?.details || 'N/A',
      overUnder: parseFloat(competition.odds?.[0]?.overUnder || '0'),
      totalGoals: homeScore + awayScore,
      period
    };
  });
}
