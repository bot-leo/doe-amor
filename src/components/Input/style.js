import styled from "styled-components"

export const ContainerInput = styled.div`
  width: 100%;
`

export const LabelInput = styled.label`

`
export const InputPrimary = styled.input`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.gray3 };

  
  width: 100%;
  height: 56px;

  color: ${props=> props.theme.colors.gray5};
  font-size: 16px;
  font-family: 'Open sans', sans-serif;

  padding-left: 16px;

  
  :focus {
  outline: 3px solid ${props=> props.theme.colors.purple1}};
  color:${props => props.theme.colors.gray1}
`