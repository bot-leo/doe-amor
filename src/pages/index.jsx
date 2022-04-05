import  Head  from "next/head"
import { Button } from "../components/Button"
import { CardInfo } from "../components/CardInfo"
import { GenericImg, Main, Secation, TextMain, TextSecondary } from "./style"

export default function Home(){
  return(
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Main>
        <Secation>
          <div style={{width:620}}>
            <TextMain>Arrecadamos dinheiro para caridade.</TextMain>
            <TextSecondary>Em troca, oferecemos experiências incríveis.</TextSecondary>

            <div style={{width:"100%", display:"flex", alignItems:"center"}}>
              <Button titleButotn={'Quero doar e concorrer'} primary_1/>
              <Button titleButotn={'Saiba mais'}/>
            </div>
          </div>

          <GenericImg src="/imgs/imagem-garotinha-cancer.png" alt="Garotinha"/>
        </Secation>
        <Secation>
         <div style={{width:"80%", }}>

          <TextMain>Funciona assim</TextMain>
          <div style={{marginTop:20, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>

            <CardInfo srcImg={'/imgs/icons/icone-ticket.svg'}
                      mainInfo={'Você compra quantos bilhetes quiser'}
                      description={'São bilhetes nos valores 50, 100, 150 ou 200 reais'}/>
            
            <CardInfo srcImg={'/imgs/icons/icone-heart.svg'}
                      mainInfo={'Doa para instituições de caridade'}
                      description={'Trabalhamos com instituições de prevenção e tratamento de câncer de renome como o Hospital de Amor, antigo Hospital de Câncer de Barretos.'}/>
            
            <CardInfo srcImg={'/imgs/icons/icone-experience.svg'}
                      mainInfo={'E concorre a experiências incríveis'}
                      description={'Os sorteios acontecem sempre no primeiro sábado do mês.'}/>

          </div>
         </div>
        
        </Secation>
        <Secation>
        
          <GenericImg src="/imgs/imagem-gustavo-lima-left.png" alt="Gustavo Lima"/>

          <div style={{width:620}}>
            <TextMain>Você, um amigo e o Gustavo Lima</TextMain>
            <TextSecondary>Concorra a um encontro memorável com o cantor.</TextSecondary>

            <div style={{width:"100%", display:"flex", alignItems:"center"}}>
              <Button titleButotn={'Quero doar e concorrer'} primary_1/>
              <Button titleButotn={'Saiba mais'}/>
            </div>
          </div>
        </Secation>
        <Secation>
        

          <div style={{width:620}}>
            <TextMain>Você, um amigo e o Gustavo Lima</TextMain>
            <TextSecondary>Concorra a um encontro memorável com o cantor.</TextSecondary>

            <div style={{width:"100%", display:"flex", alignItems:"center"}}>
              <Button titleButotn={'Quero doar e concorrer'} primary_1/>
              <Button titleButotn={'Saiba mais'}/>
            </div>
          </div>
          <GenericImg src="/imgs/imagem-garotinho-cancer.png" alt="Garotinha"/>
        </Secation>
      </Main>
    </>
  )
}