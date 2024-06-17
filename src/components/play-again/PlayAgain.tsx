import { GameStatus } from "../../types";

type Props = {
  onClick: () => void;
  gameStatus: GameStatus;
};

const PlayAgain = ({ onClick, gameStatus }: Props) => {
  return (
    <div className="game-done">
      <div className="message">
        {gameStatus === GameStatus.LOST ? "Game over" : "Winner!"}
      </div>
      <button onClick={onClick}>Play again</button>
    </div>
  );
};

export default PlayAgain;
