import styled from "styled-components";

export const StyledSignUpDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100%;

  .form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-family: Arial Black;
    font-weight: 900;
    font-size: 36px;
    line-height: 51px;
  }

  p {
    margin-top: 16px;
    margin-bottom: 26px;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    line-height: 15px;

    .link {
      color: red;
      text-decoration: none;

      &:hover {
        color: #69abfa;
      }
    }
  }
`