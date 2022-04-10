import ComponentHead from "../components/ComponentHead";
import { GenericText } from "../components/GenericText";
import { TransparentCard } from "../components/TransparentCard";
import { Main, SectionMain, SectionSecundary } from "../styles/pages/Transparencia";
import theme from "../styles/theme";



export default function Transparencia(){
  return(
    <>
    <ComponentHead title={'Transparencia'}/>
    <Main>
      <SectionMain>
        <GenericText text={"Transparência"}
                     weight={700}
                     size={'40px'}
                     color={theme.colors.gray1}/>
        <GenericText text={"Março 2021"}
                     weight={400}
                     size={'30px'}
                     color={theme.colors.gray1}/>
      </SectionMain>

      <SectionSecundary>
        <div style={{width:"100%",display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>
        <TransparentCard sorteio={'Sorteio 01'}
                         nomeSorteio={'Gustavo Lima'}
                         bemSorteado={'-22.874,00'}
                         comuMrktm={'-92.564,00'}
                         impts={'-56.554,00'}
                         outrsDespess={'-56.554,00'}
                         totalDespess={'-185.540,00'}
                         valueMeta={"1.154.145,00"}
                         saldoTotal={"968.605,00"}
                         doacaoHospital={"774.884,00"}
                         TaxsAdm={"193.721,00"}/>
        <TransparentCard sorteio={'Sorteio 02'}
                         nomeSorteio={'Viagem Maldivas'}
                         bemSorteado={'-42.874,00'}
                         comuMrktm={'-92.564,00'}
                         impts={'-45.554,00'}
                         outrsDespess={'-16.248,00'}
                         totalDespess={'-197.240,00'}
                         valueMeta={"1.154.145,00"}
                         saldoTotal={"956.905,00"}
                         doacaoHospital={"765.524,00"}
                         TaxsAdm={"191.381,00"}/>
        <TransparentCard sorteio={'Sorteio 03'}
                         nomeSorteio={'Land Rover Nelson Piquet'}
                         bemSorteado={'-22.874,00'}
                         comuMrktm={'-92.564,00'}
                         outrsDespess={'-56.554,00'}
                         totalDespess={'-185.540,00'}
                         valueMeta={"1.154.145,00"}
                         saldoTotal={"968.605,00"}
                         doacaoHospital={"774.884,00"}
                         TaxsAdm={"193.721,00"}/>
        </div>
        <div style={{background:theme.colors.green3, paddingBlock:24, paddingInline:40, marginTop:38, marginBottom:80, borderRadius:8}}>
          <GenericText text={'Valor total da doação para o Hospital de Amor'}/>
        </div>
        
      </SectionSecundary>

    </Main>
    </>
      
  )
}