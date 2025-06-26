import { Button } from "../styled/Button_styled";
import { Container } from "../styled/StartGame_styled";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices " />
      </div>
      <div className="content">
        <h1>Dice Masters </h1>
        <Button onClick={toggle}> Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
