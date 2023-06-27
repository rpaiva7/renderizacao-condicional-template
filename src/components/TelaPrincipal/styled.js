import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;

  p {
    margin: 8px;
  }

  button {
    background-color: teal;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    border: none;
    color: white;
    margin-top: 32px;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const Titulo = styled.h1`
  margin: 16px;
  color: darkgrey;
  font-size: 35px;
`;
