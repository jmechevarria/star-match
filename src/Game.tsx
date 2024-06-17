import NumberButton from "./components/number/NumberButton";
import mathUtils from "./utils/math";
import StarsDisplay from "./components/stars-display/StarsDisplay";
import { GameStatus, NumberStatus } from "./types";
import PlayAgain from "./components/play-again/PlayAgain";
import useGameState from "./hooks/GameState";

type Props = {
  startNewGame: () => void;
};

const Game = ({ startNewGame }: Props) => {
  const {
    availableNumbers,
    secondsLeft,
    candidateNumbers,
    stars,
    setGameState,
  } = useGameState();

  const gameStatus: GameStatus =
    availableNumbers.length === 0
      ? GameStatus.WON
      : secondsLeft === 0
      ? GameStatus.LOST
      : GameStatus.ACTIVE;

  const numberStatus = (number: number): NumberStatus => {
    if (candidateNumbers.includes(number)) {
      if (mathUtils.sum(candidateNumbers) === stars) return NumberStatus.USED;
      if (mathUtils.sum(candidateNumbers) > stars) return NumberStatus.WRONG;
      else return NumberStatus.CANDIDATE;
    }

    if (availableNumbers.includes(number)) return NumberStatus.AVAILABLE;

    return NumberStatus.USED;
  };

  const onNumberClicked = (number: number, status: NumberStatus) => {
    if (gameStatus !== GameStatus.ACTIVE || status === NumberStatus.USED)
      return;

    setGameState(number, status);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus === GameStatus.ACTIVE ? (
            <StarsDisplay count={stars} />
          ) : (
            <PlayAgain onClick={startNewGame} gameStatus={gameStatus} />
          )}
        </div>
        <div className="right">
          {mathUtils.range(1, 9).map((i: number) => (
            <NumberButton
              key={i}
              label={String(i)}
              status={numberStatus(i)}
              onClickP={onNumberClicked}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
