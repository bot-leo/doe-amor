import theme from "../../styles/theme"
import { GenericText } from "../GenericText"
import { CelulaCard } from "./CelulaCard"
import { Container } from "./styles"


export function TransparentCard({sorteio,
                                nomeSorteio,
                                bemSorteado,
                                comuMrktm,
                                impts,
                                outrsDespess,
                                totalDespess,
                                valueMeta,
                                saldoTotal,
                                doacaoHospital,
                                TaxsAdm}){
  return(
    <Container>
      <GenericText text={sorteio}
                   weight={400}
                   color={theme.colors.gray3}
                   style={{marginTop:24}}/>
      <GenericText text={nomeSorteio}
                    weight={700}
                    size={'20px'}
                    color={theme.colors.gray1}
                    style={{marginTop:8}}/>
        <div style={{backgroundColor:"white", width:"90%", marginTop:24, borderRadius:4, padding:8, marginBottom:10}}>
          <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <GenericText text={"Item"}
                         weight={400}
                         size={'14px'}
                         color={theme.colors.gray3}/>
            <GenericText text={'Valor (R$)'}
                         weight={400}
                         size={'14px'}
                         color={theme.colors.gray3}/>
          </div>
          <div style={{marginTop:24}}>
            <CelulaCard textValue={'Bem sorteado'}
                      value={bemSorteado}/>
          </div>
          <div style={{marginTop:24}}>
            <CelulaCard textValue={'Comunicação e Marketig'}
                      value={comuMrktm}/>
          </div>
          <div style={{marginTop:24}}>
            {impts ? (<CelulaCard textValue={'Impostos'}
                      value={impts}/>) : null}
          </div>
          <div style={{marginTop:24}}>
            <CelulaCard textValue={'Outras despesas'}
                      value={outrsDespess}/>
          </div>
          <div style={{marginTop:24,}}>
            <CelulaCard textValue={'Despesas Totais'}
                      value={totalDespess}
                      type='saida'/>
          </div>
          <div style={{marginTop:24,}}>
            <CelulaCard textValue={'Valor Arrecadado'}
                      value={valueMeta}
                      type='entrada'/>
          </div>
          <div style={{marginTop:24,}}>
            <CelulaCard textValue={'Saldo Total'}
                      value={saldoTotal}
                      type='entrada'/>
          </div>
          <div style={{marginTop:24,}}>
            <CelulaCard textValue={'Doação Hospital de Amor (80%)'}
                      value={doacaoHospital}
                      type='entrada'/>
          </div>
          <div style={{marginTop:24,}}>
            <CelulaCard textValue={'Taxa de administração (20%)'}
                      value={TaxsAdm}
                      type='entrada'/>
          </div>

        </div>
    </Container>
  )
}