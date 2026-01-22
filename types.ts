
export enum Screen {
  CONFIG = 'CONFIG',
  PLAYERS = 'PLAYERS',
  BRACKET = 'BRACKET',
  REPORT = 'REPORT',
  HISTORY = 'HISTORY'
}

export interface Player {
  id: string;
  name: string;
  points: number;
  rank: 'Elite' | 'Pro' | 'Amateur';
  stars: number;
  avatar: string;
  online: boolean;
}

export interface Match {
  id: string;
  player1Id: string | null;
  player2Id: string | null;
  p1Sets: number;
  p2Sets: number;
  p1Points: number;
  p2Points: number;
  status: 'SCHEDULED' | 'LIVE' | 'FINISHED';
  round: number;
  nextMatchId: string | null;
  position: 'top' | 'bottom';
}

export interface TournamentReport {
  id: string;
  name: string;
  date: string;
  winner: string;
  winnerAvatar: string;
  playersCount: number;
  format: string;
  fullMatches: Match[]; // Añadido para reporte detallado
  fullPlayers: Player[]; // Añadido para reporte detallado
}
