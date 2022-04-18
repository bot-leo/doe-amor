import theme from "../../styles/theme"
import { Button } from "../Button"
import { GenericText } from "../GenericText"
import { ContainerCard, 
         ContainerStart, 
         ContentCardDonate, 
         FooterCardDonate,
         IconCardDonate } from "./style"


export function CardDonate({donateVaue, 
                            ticketQtd, 
                            startDonate,
                            onClickButtonCard}){
  function ComponentStar(){
    return(
      <ContainerStart>
        <GenericText text={'Mais vendido'}/>
      </ContainerStart>
    )
  }
  
  return(
    <ContainerCard>
      { startDonate ? (<ComponentStar/>) : null}
      <ContentCardDonate>

        <IconCardDonate src={'/imgs/icons/icone-ticket.svg'}/>
        <GenericText text={`R$${donateVaue}`}
                     size={'30px'}/>
        <GenericText weight={400}
                     color={theme.colors.gray3}
                     style={{display:"flex", marginTop:10 }}
                     >Vale<GenericText style={{marginInline:4}}>
                          { ticketQtd  || 0} 
                     </GenericText>bilhete</GenericText>
                     
      </ContentCardDonate>


    <FooterCardDonate>
     <Button titleButotn='Quero Esse' onClick={onClickButtonCard}/>
    </FooterCardDonate>
  </ContainerCard>
  )
}