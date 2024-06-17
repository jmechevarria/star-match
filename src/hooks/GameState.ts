import { useEffect, useState } from "react";
import mathUtils from "../utils/math";
import { NumberStatus } from "../types";

const useGameState = () => {
  const [stars, setStars] = useState(mathUtils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(
    mathUtils.range(1, 9)
  );
  const [candidateNumbers, setCandidateNumbers] = useState<number[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft > 0 && availableNumbers.length) {
      const timer = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  const setGameState = (number: number, status: NumberStatus) => {
    if (status === NumberStatus.AVAILABLE) {
      const newAvailableNums = availableNumbers.filter((n) => n !== number);
      const newCandidateNums = [...candidateNumbers, number];

      setAvailableNumbers(newAvailableNums);
      if (mathUtils.sum(newCandidateNums) === stars) {
        setCandidateNumbers([]);
        const newStars = mathUtils.randomSumIn(newAvailableNums, 9);
        console.log(newStars);
        setStars(newStars);
      } else {
        setCandidateNumbers(newCandidateNums);
      }
    } else {
      // WRONG or CANDIDATE
      const newAvailableNums = [...availableNumbers, number];
      const newCandidateNums = candidateNumbers.filter((n) => n !== number);

      setAvailableNumbers(newAvailableNums);
      setCandidateNumbers(newCandidateNums);
    }
  };

  return {
    availableNumbers,
    candidateNumbers,
    secondsLeft,
    stars,
    setGameState,
  };
};

export default useGameState;
