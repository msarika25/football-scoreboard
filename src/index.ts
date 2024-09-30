import { Scoreboard } from './Scoreboard';

// Create a new scoreboard
const scoreboard = new Scoreboard();

// Start games with slight delays to simulate time differences
scoreboard.startGame('Mexico', 'Canada');
scoreboard.updateScore('Mexico', 'Canada', 0, 5);  // Ensure the score for Mexico vs. Canada is updated

setTimeout(() => {
  scoreboard.startGame('Spain', 'Brazil');
  scoreboard.updateScore('Spain', 'Brazil', 10, 2);
}, 10);

setTimeout(() => {
  scoreboard.startGame('Germany', 'France');
  scoreboard.updateScore('Germany', 'France', 2, 2);
}, 20);

setTimeout(() => {
  scoreboard.startGame('Uruguay', 'Italy');
  scoreboard.updateScore('Uruguay', 'Italy', 6, 6);
}, 30);

setTimeout(() => {
  scoreboard.startGame('Argentina', 'Australia');
  scoreboard.updateScore('Argentina', 'Australia', 3, 1);

  // Now print the summary after all games are started and updated
  const summary = scoreboard.getSummary();
  summary.forEach((match, index) => {
    console.log(`${index + 1}. ${match.homeTeam} ${match.homeScore} - ${match.awayTeam} ${match.awayScore}`);
  });
}, 40);
