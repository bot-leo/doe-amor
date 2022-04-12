
import React from "react";
import { Button } from "../components/Button";
import ComponentHead from "../components/ComponentHead"
import { GenericText } from "../components/GenericText"
import { Main, SectionInfoPremio, SectionMain,SectionDate, SectionHelp} from "../styles/pages/Experiencia"
import theme from "../styles/theme";

export default function Experiencia(){

  return(
    <>
      <ComponentHead title={'Experiencia'}/>
        <Main>
          <SectionMain>
            <div style={{width:400, marginBottom:40}}>
            <GenericText size={'40px'}
                         color={theme.colors.gray1}
                         weight={400}
                         >
            Doe para o<br/>
            Hospital do amor e<br/>
            concorra, junto com<br/>
            um amigo, a um encontro memorável<br/>
            com o cantor<br/>
            <GenericText size={'40px'}
                         color={theme.colors.gray1}
                         weight={700}>
            Gustavo Lima.
            </GenericText>
            </GenericText>
            </div>
            <Button titleButotn={'Quero doar e concorrer'} 
                    primary_1/>
          </SectionMain>
          
          <SectionInfoPremio>
            <GenericText text={'O que o ganhador terá direito'}
                         size={'30px'}
                         color={theme.colors.gray1}
                         weight={700}/>
            <div style={{width:"60%", marginTop:'40px', marginBottom:"80px"}}>
              <GenericText size={'20px'}
                           color={theme.colors.gray3}
                           weight={400}>
              1.Você e seu convidado irão a um show do Gustavo Lima em seu jatinho e ficarão com ele no camarim. 
              <br/>
              <br/>
              2.Assistirão ao show bem de perto, do palco. Esta é a sua chance de conhecer o maior cantor da atualidade em um nível pessoal – falar sobre música, a vida e muito mais! Vôos, translado, alimentação e hotel estão incluídos!
              <br/>
              <br/>
              O carismas do cantor Gustavo Lima não mente e nem nós: você vai ter uma experiência única ao lado do cantor Gustavo Lima. Você e seu convidado irão a um show do Gustavo Lima em seu jatinho e ficarão com ele no camarim. Assistirão ao show bem de perto, do palco. Esta é a sua chance de conhecer o maior cantor da atualidade em um nível pessoal – falar sobre música, a vida e muito mais! Voos, translado, alimentação e hotel estão incluídos!
              </GenericText>
            </div>

            <img src="/imgs/imagem-gustavo-lima-3.png"/>

          </SectionInfoPremio>

          <SectionDate>
            <div>
              <GenericText text={'Sorteio'}
                           size={'30px'}
                           color={theme.colors.gray3}
                           weight={400}/>
                            <br/>
              <GenericText text={'1 março 2021'}
                           size={'30px'}
                           color={theme.colors.gray1}
                           weight={700}/>
            </div>

            <div style={{ marginLeft:127}}>
              <GenericText text={'Vencedor'}
                          size={'30px'}
                          color={theme.colors.gray3}
                          weight={400}/> 
                          <br/>
              <GenericText text={'31 março 2021'}
                           size={'30px'}
                           color={theme.colors.gray1}
                           weight={700}/>
            </div>
          </SectionDate>

          
        <SectionHelp>
          <GenericText text={'Quem você vai ajudar:'}
                        size={'30px'}
                        color={theme.colors.gray1}
                        weight={400}/>
          <GenericText text={'Hospital de Amor'}
                        size={'30px'}
                        color={theme.colors.gray1}
                        weight={700}/>
          <div style={{marginTop:24}}>
            <img src="/imgs/logo-hospital-do-amor.png"/>
          </div>
          <GenericText  size={'20px'}
                           color={theme.colors.gray3}
                           weight={400}
                           style={{marginTop:40, marginBottom:80}}>
            O Hospital de Amor – HA é o maior hospital oncológico da América Latina com mais de 7 mil atendimentos diários, 100% gratuitos, com qualidade internacional e possui diversos convênios internacionais com instituições renomadas como o MD Anderson Children’s Cancer Hospital, da Universidade do Texas.
            <br/>
            <br/>
            Possui 13 unidades em diversos estados brasileiros, icluindo o Hospital Infantil, a única filial do MD Anderson do mundo.
          </GenericText>
        </SectionHelp>

          
        </Main>
    </>
  )
}