import { useState } from "react";
import Game from "../../Game";

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);

  return (
    <Game key={gameId} startNewGame={() => setGameId((prev) => prev + 1)} />
  );
};

export default StarMatch;
