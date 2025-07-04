import styled from "styled-components";

/* Button styled */
export const Button = styled.button`
  min-width: 220px;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 18px;
  background: #000000;
  border: none;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
