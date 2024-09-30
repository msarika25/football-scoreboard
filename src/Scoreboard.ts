import { Match } from './Match';

export class Scoreboard {
  private matches: Match[] = [];

  startGame(homeTeam: string, awayTeam: string): void {
    const match = new Match(homeTeam, awayTeam);
    this.matches.push(match);
  }

  updateScore(homeTeam: string, awayTeam: string, homeScore: number, awayScore: number): void {
    const match = this.findMatch(homeTeam, awayTeam);
    if (match) {
      match.updateScore(homeScore, awayScore);
    }
  }

  finishGame(homeTeam: string, awayTeam: string): void {
    this.matches = this.matches.filter(
      (match) => !(match.homeTeam === homeTeam && match.awayTeam === awayTeam)
    );
  }

  getSummary(): Match[] {
    return this.matches
      .slice() // Create a shallow copy to avoid mutating the original array
      .sort((a, b) => {
        const totalScoreA = a.getTotalScore();
        const totalScoreB = b.getTotalScore();

        // Sort by total score first (descending order)
        if (totalScoreB !== totalScoreA) {
          return totalScoreB - totalScoreA;
        }

        // If scores are the same, sort by start time (most recent first)
        return b.startTime.getTime() - a.startTime.getTime();
      });
  }

  private findMatch(homeTeam: string, awayTeam: string): Match | undefined {
    return this.matches.find(
      (match) => match.homeTeam === homeTeam && match.awayTeam === awayTeam
    );
  }
}
