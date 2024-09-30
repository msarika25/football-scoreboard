import { Scoreboard } from '../src/Scoreboard';

describe('Scoreboard', () => {
  let scoreboard: Scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard();
  });

  it('should start a new game and add it to the scoreboard', () => {
    scoreboard.startGame('Mexico', 'Canada');
    const summary = scoreboard.getSummary();
    expect(summary.length).toBe(1);
    expect(summary[0].homeTeam).toBe('Mexico');
    expect(summary[0].awayTeam).toBe('Canada');
    expect(summary[0].homeScore).toBe(0);
    expect(summary[0].awayScore).toBe(0);
  });

  it('should update the score of an existing game', () => {
    scoreboard.startGame('Mexico', 'Canada');
    scoreboard.updateScore('Mexico', 'Canada', 1, 3);
    const summary = scoreboard.getSummary();
    expect(summary[0].homeScore).toBe(1);
    expect(summary[0].awayScore).toBe(3);
  });

  it('should finish a game and remove it from the scoreboard', () => {
    scoreboard.startGame('Mexico', 'Canada');
    scoreboard.finishGame('Mexico', 'Canada');
    const summary = scoreboard.getSummary();
    expect(summary.length).toBe(0);
  });

  it('should return games ordered by total score', () => {
    scoreboard.startGame('Mexico', 'Canada');
    scoreboard.startGame('Spain', 'Brazil');
    scoreboard.updateScore('Mexico', 'Canada', 1, 2);
    scoreboard.updateScore('Spain', 'Brazil', 4, 2);
    const summary = scoreboard.getSummary();
    expect(summary[0].homeTeam).toBe('Spain');
    expect(summary[1].homeTeam).toBe('Mexico');
  });
});
