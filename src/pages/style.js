import styled from "styled-components"

export const Main = styled.main`
  /* background: #494949; */
`

export const Secation = styled.section`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;

  align-items:center;
  justify-content:center;
  /* background: #494949; */
`

export const TextMain = styled.h1`
  font-family:'Open Sans';
  font-weight:700;
  font-size: 40px;
  color:${({theme}) => theme.colors.gray1};
`
export const TextSecondary = styled.text`
  font-family:'Open Sans';
  font-weight:400;
  font-size: 40px;
  color:${({theme}) => theme.colors.gray3};
`

export const GenericImg = styled.img`
  width: 520px;
  height: 520px;
`

