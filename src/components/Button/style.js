import styled from "styled-components"

export const ButtonContainer = styled.button`
  border-radius:4px;
  background-color:${props => props.primary_1 ? props.theme.colors.green3 : props.theme.colors.white};
  width:172px;
  height:56px;
  padding:16px 24px;
  border:2px solid #24ED8F;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextButton = styled.text`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  display: flex;
 
`