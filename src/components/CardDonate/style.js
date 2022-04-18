import styled from "styled-components"

export const ContainerCard = styled.div`
  background-color: ${props => props.theme.colors.gray6};
  
  width: 224px;
  height: 208px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  margin:15px;
`


export const ContentCardDonate = styled.div`
  display:flex; 
  flex-direction:column; 
  align-items:center;
`

export const FooterCardDonate = styled.div`
  position:absolute;
  margin-top:200px;
`

export const IconCardDonate = styled.img`
  width:56px;
  height:56px;
`

export const ContainerStart = styled.div`
 position: absolute;
 top:165px;
 
 background-color: ${props => props.theme.colors.yallow};
 width: 13%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding-inline: 16px;
 padding-block: 6px;
 border-radius: 4px;
`