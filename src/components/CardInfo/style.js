import styled from "styled-components"

export const ContainerCard = styled.div`
  width: 290px;

  display: flex;
  flex-direction: column;

  align-items: center;;
`

export const ContainerIconCard = styled.div`
    transform: rotate(45deg);
    width: 160px;
    height: 160px;
    box-shadow:0px 24px 32px rgba(0, 0, 0, 0.04);
    border-radius:8px;

    display: flex;
    
    justify-content: center;
    align-items: center;
`

export const ImgCard = styled.img`
  transform: rotate(-45deg);
`


export const TitleCard = styled.h3`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;

  color:${({theme}) => theme.colors.gray1};
  text-align: center;

  margin-top: 45px;
  `

export const DescriptionTextCard = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color:${({theme}) => theme.colors.gray3};
  text-align: center;
  margin-top: 14px;
`