export class Match {
    constructor(
      public homeTeam: string,
      public awayTeam: string,
      public homeScore: number = 0,
      public awayScore: number = 0,
      public startTime: Date = new Date()
    ) {}
  
    getTotalScore(): number {
      return this.homeScore + this.awayScore;
    }
  
    updateScore(homeScore: number, awayScore: number): void {
      this.homeScore = homeScore;
      this.awayScore = awayScore;
    }
  }
  