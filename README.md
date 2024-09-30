# Live Football World Cup Scoreboard

## Project Overview

This project is a simple **Live Football World Cup Scoreboard** implemented in **TypeScript**. The scoreboard tracks ongoing football matches, allowing the following operations:
- Start a new game (initial score 0–0)
- Update the score of a game
- Finish a game
- Retrieve a summary of all ongoing games, ordered by total score (highest first). For matches with the same score, the most recently started game appears first.

The project is structured as a library and follows **SOLID principles**, **Test-Driven Development (TDD)**, and best practices for clean code. The code is started by writing the test cases in tests/Scoreboard.test.ts to define the expected behavior of the scoreboard using TDD approach.

## Assumptions

1. **In-memory storage**:
   - All matches are stored in an in-memory array, and no database or external storage is used.
   - The scoreboard does not persist data between sessions.
   
2. **Simple data structure**:
   - Matches are represented by the `Match` class, and the scoreboard management logic is handled by the `Scoreboard` class.
   
3. **Match uniqueness**:
   - The scoreboard assumes that each match is uniquely identified by its home and away teams. If the same teams play more than once, it’s treated as an error (handled in future extensions).
   
4. **Sorting criteria**:
   - The match summary is sorted by the total score of each match (home score + away score).
   - If multiple matches have the same total score, the most recently started match appears first.
   
5. **No handling for duplicate teams in multiple matches**:
   - The system does not currently handle multiple instances of the same team playing different matches simultaneously. Future extensions could manage unique match IDs for such cases.

6. **Test-driven approach**:
   - Unit tests were written using **Jest** to validate the functionality of the scoreboard.

## Features

1. **Start a new game**:
   - A new match starts with a score of 0–0.
   - Requires specifying the home and away teams.

2. **Update score**:
   - Update the score of an ongoing match by providing the home and away scores.

3. **Finish a game**:
   - Remove a match from the scoreboard once it is finished.

4. **Get a summary of games**:
   - Get a list of ongoing games ordered by total score.
   - Matches with the same total score are ordered by the most recently started match.

## Usage

### Prerequisites

Make sure you have **Node.js** installed on your system along with **npm**.

### TDD
   - Set up Jest for Testing
   - Write Tests First
   - Write the Code to Make the Tests Pass
   - Run the Tests Again
   - Refactor (If Needed)

### Installation and Testing

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd football-scoreboard
2. Install the dependencies:
   npm insall
3. to run the project use:
   npx ts-node src/index.ts
4. To run the tests, use:
   npm run test
