import theme from "../../styles/theme"
import { GenericText } from "../GenericText"
import { ContainerCelula } from "./styles"


export function CelulaCard({textValue, value, type}){
  function selectType(type){
    switch(type){
      case 'saida':
        return theme.colors.red
        case 'entrada':
          return theme.colors.green1
        default:
          theme.colors.gray1
    }
  }
  return(
    <ContainerCelula>
      <GenericText text={textValue}
                   weight={400}
                   color={theme.colors.gray1}
                   style={{textAlign:'initial',}}/>
      <GenericText text={value}
                   weight={700}
                   color={selectType(type)}/>
    </ContainerCelula>
  )
}