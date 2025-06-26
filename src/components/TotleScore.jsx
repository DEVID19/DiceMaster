import { ScoreContainer } from "../styled/TotleScore_styled";

const TotleScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Totle Score</p>
    </ScoreContainer>
  );
};

export default TotleScore;
