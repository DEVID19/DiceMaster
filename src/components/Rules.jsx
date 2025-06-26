import { RulesContainer } from "../styled/Rules_styled";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice masters</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected <br /> number is equal to dice <br />
          number you will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
