import { Button } from "../../components/Button"
import { CardInfo } from "../../components/CardInfo"
import { GenericText } from "../../components/GenericText"
import ComponentHead from "../../components/ComponentHead"
import theme from "../../styles/theme"
import { Main, SectionFinaly, SectionPrimary, SectionSecundary } from "./style"

export default function HospitalAmor(){
  return(
    <>
      <ComponentHead title={'Hospital do Amor'} />
      <Main>
        <SectionPrimary>
          <img src="/imgs/logo-hospital-do-amor.png"/>
         <div style={{marginTop:40}}>
         <GenericText color={theme.colors.gray3}
                       weight={400}
                       size={"30px"}>
            Instituição de saúde<br/>
            filantrópica especializada no<br/>
            tratamento e prevenção de<br/>
            câncer com sede em<br/>
            Barretos, São Paulo.
          </GenericText>
         </div>
        </SectionPrimary>

        <SectionSecundary>
          <GenericText  color={theme.colors.gray3}
                       weight={400}
                       size={"20px"}>
            Com mais de 58 anos de história e reconhecimento internacional<br/>
            por sua excelência em tecnologia e cuidado humanizado, o<br/> 
            Hospital de Amor conta atualmente com mais de 5.300<br/>
            colaboradores atuando em suas dezenas de unidades de<br/>
            tratamento, prevenção, reabilitação e pesquisa, relacionadas à<br/>
            área oncológica, espalhadas pelo Brasil.
            <br/>
            <br/>
            <br/>
            O Hospital de Amor – HA é o maior hospital oncológico da América<br/>
            Latina com mais de 7 mil atendimentos diários, 100% gratuitos,<br/>
            com qualidade internacional e possui diversos convênios<br/>
            internacionais com instituições renomadas como o MD Anderson<br/>
            Children’s Cancer Hospital, da Universidade do Texas,
            <br/>
            <br/>
            <br/>
            O Hospital de Amor possui 13 unidades em diversos estados<br/>
            brasileiros, icluindo o Hospital Infantil, a única filial do MD<br/>
            Anderson do mundo.
            <br/>
            <br/>
            <br/>
            O Hospital de Amor conta com o Instituto de Ensino e Pesquisa –<br/>
            IEP, que possui o mais moderno e completo parque tecnológico<br/>
            de pesquisa da América Latina, incluindo o laboratório de biologia<br/>
            molecular e a unidade de pesquisa clínica onde são testados<br/> 
            novos fármacos do mundo todo. O IEP possui parcerias com<br/>
            instituições de referência internacional como Melinda e Bill Gates<br/> 
            Foundation e outras instituições líderes em pesquisa de câncer no<br/>
            mundo.
          </GenericText>
          <div style={{marginTop:80}}>

            <img src="/imgs/imagem-garotinho-cancer-3.png"/>
          </div>
        </SectionSecundary>

        <SectionFinaly>
          <GenericText text={"Para doar é só seguir esses passos"} color={theme.colors.gray1}
                       weight={700}
                       size={"40px"}/>
          
          <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-between"}}>
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

          <div style={{width:"100", display:"flex", justifyContent:"center", alignItems:"center", marginBlock:80}}>
           <Button titleButotn={'Quero concorrer e doar'} primary_1/>
          </div>
        </SectionFinaly>
      </Main>
    </>
  )
}