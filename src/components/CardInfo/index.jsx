import { ContainerCard, 
         ContainerIconCard,
         DescriptionTextCard,
         ImgCard,
         TitleCard} from "./style"

export function CardInfo({srcImg, 
                          mainInfo, 
                          description,
                          imgDescription}){
  return(
    <ContainerCard>
      <ContainerIconCard>
        <ImgCard src={srcImg} alt={imgDescription}/>
      </ContainerIconCard>

      <TitleCard>{mainInfo}</TitleCard>

      <DescriptionTextCard>{description}</DescriptionTextCard>
    </ContainerCard>
  )
}