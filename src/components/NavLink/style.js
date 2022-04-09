import styled from 'styled-components'

export const TextLink = styled.a`
  font-family: 'Open-sans', sans-serif;
  color:${props => props.color ? props.color : props.theme.colors.gray3};
  font-size:${props => props.size ? props.size : '16px'};
  font-weight:${props => props.weight ? props.weight : 400};

  cursor: pointer;

  :hover{
    color:${props => props.colorHover ? props.colorHover : props.theme.colors.gray1};
  }
`