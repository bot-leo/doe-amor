import theme from "../../styles/theme"
import { GenericText } from "../GenericText"
import { NavLink } from "../NavLink"
import { Container, 
         ContainerPrimary, 
         ContainerSecondary } from "./style"

export function Footer(){
  return(
    <Container>

      <ContainerPrimary>

        <div>
          <GenericText size={'40px'}
                       weight={700}
                       color={theme.colors.gray1}>
                         Regras oficiais</GenericText>
          <div style={{display:"flex",alignItems:"baseline"}}>
          <GenericText weight={400}
                       color={theme.colors.gray1}
                       style={{marginTop:8}}
                       text={'Entenda todos os detalhes dos sorteios.'}/>
          <NavLink textLink={"Acesse aqui."} 
                   color={theme.colors.purple1} 
                   colorHover={"none"} 
                   weight={700}
                   href={'/RegrasOficiais'}/>
          </div>
        </div>

        <div style={{marginTop:56}}>
          <GenericText size={'40px'}
                        color={theme.colors.gray1}>
                          Nossos parceiros</GenericText>
          
          <div style={{display:"flex", 
                       flexDirection:"row", 
                       width:"100%", 
                       justifyContent:"space-between", 
                       marginTop:40, flexWrap:"wrap"}}>
            <img src="/imgs/imagem-kpmg-logo.png" style={{width:290, height:150}}/>
            <img src="/imgs/imagem-festa-piao-barreto-logo.png" style={{width:210, height:150}}/>
            <img src="/imgs/imagem-hospital-do-amor.png" style={{width:290, height:150}}/>
          </div>
        </div>

        <GenericText size={'30px'}
                     color={theme.colors.gray1}>
                       Sorteios seguros</GenericText>
        <div style={{marginTop:40, 
                      display:"flex", 
                      flexDirection:"row", 
                      flexWrap:"wrap"}}>
          <div >
            <GenericText text={'Sorteios autorizados'}
                          size={'20px'}/>
            <GenericText weight={400}
                          color={theme.colors.gray3}>
                            Sorteios autorizados pela Secretaria de Avaliação,<br/>
                          Planejamento, Energia e Loteria do Ministério da<br/>
                            Economia (Secap/ME), conforme Lei nº 14.027/2020
                          </GenericText>
            <GenericText text={'Ver certificado'}/>
          </div>

          <div style={{}}>
            <GenericText text={'Processo auditado'}/>
            <div style={{display:"flex"}}>
              <img src="/imgs/imagem-kpmg-logo.png" style={{width:180, height:80}}/>
              <img src="/imgs/imagem-caixa-logo.png"/>
            </div>
          </div>
        </div>

      </ContainerPrimary>


      <ContainerSecondary>
        <div style={{width:290}}>
          <img src="/imgs/logo-doeamor.svg" style={{width:120, }} />
          
          <div style={{marginTop:16}}>

            <GenericText text={'Copyright © 2021, DoeAmor, ONG. Todos os direitos reservados.'}  
                        weight={400}
                        color={theme.colors.gray3}/>
          </div>
        </div>
        <div  style={{width:195}}>
          <GenericText text={'Acesse também'}/>
          <div style={{marginTop:16}}>
            <NavLink textLink={'Regras oficiais'} href={'/RegrasOficiais'}/><br/>
            <div style={{marginTop:16}}>
              <NavLink textLink={'Transparência'} href={'/Transparencia'}/><br/>
            </div>
            <div style={{marginTop:16}}>
              <NavLink textLink={'Termos de uso'} href={'/RegrasOficiais'}/><br/>
            </div>
            <div style={{marginTop:16}}>
              <NavLink textLink={'Politicas de privacidade'} href={'/RegrasOficiais'}/>
            </div>
          </div>
        </div>
        <div  style={{width:190}}>
          <GenericText text={'Fale conosco'}/>
          <div style={{marginTop:16}}>
            <GenericText text={'E-mail'}/>
            <GenericText text={'contato@doeamor.org.br'}  
                         weight={400}
                         style={{marginTop:3}}/>
                  
            <GenericText text={'Redes sociais'} style={{marginTop:16}}/>
            <div>
              
            </div>
          </div>
        <div>
           
        </div>

        </div>
      </ContainerSecondary>
    </Container>
  )
}