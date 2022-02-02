import styled from "styled-components";

export const StyledInput = styled.input`
  margin-bottom: 16px;
  padding: 17px 29px;
  width: 330px;
  font-size: 14px;
  line-height: 16px;
  border:  1px solid #B4B4BB;
  border: ${border => border};
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: #aaaaaa;
  }
`