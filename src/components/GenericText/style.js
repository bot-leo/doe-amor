import styled from "styled-components"

export const SingleText = styled.h5`
  font-size:${props => props.size ? props.size : '16px'};
  font-family: 'Open-sans', sans-serif;
  font-weight:${props => props.weight ? props.weight : 0};

  color: ${props => props.color ? props.color : props.theme.colors.black};
  

`