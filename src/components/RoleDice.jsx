import { DiceContainer } from "../styled/RoleDice_styled";
const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dices/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
