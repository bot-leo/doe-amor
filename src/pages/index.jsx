import  Head  from "next/head"
import Image from 'next/image'

import { Button } from "../components/Button"
import { CardInfo } from "../components/CardInfo"
import { GenericText } from "../components/GenericText"

import theme from "../styles/theme"
import { ContainerExampleCards,
         ContentContainer,
         Main, 
         Section,
         SectionCollection,
         SectionExample,
         SectionGoals,
         SectionInformation,
         SectionValues } from "../styles/pages/Home"

export default function Home(){
  return(
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Main>

        <SectionCollection>
          <ContentContainer>
            <GenericText text={'Arrecadamos dinheiro para caridade.'}
                         weight={700}
                         color={theme.colors.gray1}
                         size={'40px'}/>
            
            <GenericText text={'Em troca, oferecemos experiências incríveis.'}
                         weight={400}
                         color={theme.colors.gray3}
                         size={'40px'}
                         />
          
            <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:40}}>
              <Button titleButotn={'Quero doar e concorrer'} primary_1/>
              <Button titleButotn={'Saiba mais'}/>
            </div>
          </ContentContainer>

        </SectionCollection>


        <SectionExample>
          <GenericText text={'Funciona assim'}
                       size={'40px'}
                       weight={700}
                       color={theme.colors.gray1}/>

          <ContainerExampleCards>

            <CardInfo srcImg={'/imgs/icons/icone-ticket.svg'}
                      mainInfo={'Você compra quantos bilhetes quiser'}
                      description={'São bilhetes nos valores 50, 100, 150 ou 200 reais'}/>
            
            <CardInfo srcImg={'/imgs/icons/icone-heart.svg'}
                      mainInfo={'Doa para instituições de caridade'}
                      description={'Trabalhamos com instituições de prevenção e tratamento de câncer de renome como o Hospital de Amor, antigo Hospital de Câncer de Barretos.'}/>
            
            <CardInfo srcImg={'/imgs/icons/icone-experience.svg'}
                      mainInfo={'E concorre a experiências incríveis'}
                      description={'Os sorteios acontecem sempre no primeiro sábado do mês.'}/>

          </ContainerExampleCards>
         
        </SectionExample>

        <SectionInformation>
        
        

          <ContentContainer>
            <GenericText text={'Concorra a experiências incríveis'}
                         weight={700}
                         color={theme.colors.purple1}/>

            <GenericText color={theme.colors.gray1} 
                         weight={400}
                         size={'40px'}>
              Você, um amigo<br/>
              <GenericText text={'e o Gustavo Lima'} weight={700} size={'40px'}/>
            </GenericText>

            
            <GenericText text={'Concorra a um encontro memorável com o cantor'}
                        color={theme.colors.gray3}
                        weight={400}
                        size={'40px'}/>

            <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:40}}>
              <Button titleButotn={'Quero doar e concorrer'} primary_1/>
              <Button titleButotn={'Saiba mais'}/>
            </div>
          </ContentContainer>
        </SectionInformation>

        <SectionValues>
            <GenericText text={'80%'}
                         color={theme.colors.green2}
                         size={'100px'}
                         weight={700}/>
            <div style={{marginLeft:20}}>
              <GenericText 
                        color={theme.colors.gray3}
                         size={'40px'}
                         weight={400}>
                dos valores arrecadados<br/>
                <GenericText text={'são doados para caridade'}  weight={700} size={'40px'}/>
              </GenericText>
              <div>
                <GenericText color={theme.colors.gray3}
                            weight={400}
                            text={"Entenda como os valores são divididos."}/>
                
                <GenericText text={'Clique aqui.'} 
                            weight={700} 
                            color={theme.colors.purple1}/>
              </div>
            </div>
        </SectionValues>
        
        <SectionGoals>
      
          <div style={{width:430}}>
            <div style={{marginTop:40}}>
              <GenericText 
                  text={'Nosso objetivo é doar R$ 18 milhões em 2021.'} 
                  size={'40px'} 
                  weight={700} 
                  color={theme.colors.gray1}/>

            </div>
            <div style={{marginTop:40}}>
              <GenericText 
                  text={'O nosso parceiro é o Hospital de amor de Barretos.'} 
                  size={'24px'} 
                  weight={400} 
                  color={theme.colors.gray3}/>

            </div>
            <div style={{marginTop:40}}>
              <img src="/imgs/logo-hospital-do-amor.png"/>
            </div>
            <div style={{marginTop:40}}>
              <GenericText 
                  text={'Anteriormente conhecido como Hospital de Câncer de Barretos, é uma instituição de saúde filantrópica especializada no tratamento e prevenção de câncer com sede em Barretos, São Paulo.'}
                  size={'16px'}
                  weight={400}
                  color={theme.colors.gray3}/>
            </div>
            
            
            <div style={{width:"100%", display:"flex", alignItems:"center", marginTop:40}}>
              <Button titleButotn={'Quero doar e concorrer'} primary_1/>
              <Button titleButotn={'Saiba mais'}/>
            </div>
          </div>
          {/* <GenericImg src="/imgs/imagem-garotinho-cancer.png" alt="Garotinha"/> */}
        </SectionGoals>
      </Main>
    </>
  )
}