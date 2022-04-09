import styled from "styled-components"

export const Container = styled.footer`
 

`

export const ContainerPrimary = styled.div`
  padding-block: 5%;
  padding-inline: 150px;
  
  background-color: ${props => props.theme.colors.gray6};
`




export const ContainerSecondary = styled.div`
  padding-block: 2%;
  padding-inline: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`