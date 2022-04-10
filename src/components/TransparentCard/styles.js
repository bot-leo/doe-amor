import styled from "styled-components"

export const Container = styled.div`
  background-color: ${props => props.theme.colors.gray6};
  width: 290px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`


export const ContainerCelula = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-block: 5px;
`