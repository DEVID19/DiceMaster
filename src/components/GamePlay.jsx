import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotleScore from "./TotleScore";
// import { Button, OutlineButton } from "../styled/Button_styled";
import Rules from "./Rules";
import { Button, OutlineButton } from "../styled/Button_styled";
import { MainContainer } from "../styled/GamePlay_Styled";
// import { MainContainer } from "../styled/GamePlay_Styled";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotleScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;
