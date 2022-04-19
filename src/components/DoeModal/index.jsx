
import Modal from 'react-modal'
import { useState } from "react"

import { GenericText } from '../GenericText'
import theme from '../../styles/theme'
import { CardDonate } from '../CardDonate'
import { ButtonClosedModal, ButtonReturn, ContainerCardDonate, ContainerSecurity, FoorterModal, HeaderClosedModal } from './style'
import { Button } from '../Button'
import { Input } from '../Input'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:8,
    
    // paddingInline:50
    
  },
};


export function DoeModal({closeModal,
                         isOpen,
                         afterOpenModal}){

  const [step, setStep] = useState(0)

  

  function primaryModal(){
    return(
      <>
        <GenericText text={'Escolha um dos valores abaixo. Quanto maior o valor, maior a chance de você ganhar.'}
                     weight={400}
                     color={theme.colors.gray3}
                     style={{marginTop:10}}/>

        <ContainerCardDonate>

          <CardDonate donateVaue={'50'}
                      ticketQtd={'1'}
                      onClickButtonCard={() => setStep(step + 1)}/>
          <CardDonate donateVaue={'100'}
                      ticketQtd={'3'}/>
          <CardDonate startDonate 
                      donateVaue={'150'}
                      ticketQtd={'6'}/>
          <CardDonate donateVaue={'200'}
                      ticketQtd={'12'}/>
        </ContainerCardDonate>

        <FoorterModal>

          <div>
            <GenericText text={'Sorteio seguro e autorizado'}
                           color={theme.colors.gray1}/>
            <GenericText weight={400}
                         color={theme.colors.gray3}
                         style={{marginTop:8}}>
              Sorteios autorizados pela Secretaria de Avaliação,<br/>
              Planejamento, Energia e Loteria do Ministério da<br/>
              Economia (Secap/ME), conforme Lei nº 14.027/2020
            </GenericText>

          </div>

          <ContainerSecurity>

            <div style={{display:"flex",flexDirection:"column"}}>
              <GenericText text={'Processo auditado'}/>
             
             <div style={{display:'flex', flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
               <img src='/imgs/imagem-logo-kpmg.png'/>
              <img src='/imgs/imagem-logo-caixa.png' style={{marginLeft:24}}/>
             </div>
            </div>
            
            <div style={{marginLeft:40}}>
              <GenericText text={'Compra segura'}/>
              <img src='/imgs/imagem -http-seguro.png' style={{marginTop:9}}/>
            </div>

          </ContainerSecurity>

        </FoorterModal>
      </>
    )
  }


  function secundaryModal(){
    return(
      <>
        {/* <GenericText text={'Você está comprando um bilhete de R$ 100.'}
                     weight={700}
                     color={theme.colors.gray1}
                     style={{marginTop:10}}/>
        <GenericText text={'Preencha alguns dados pessoais abaixo.'}
                     weight={400}
                     color={theme.colors.gray3}
                     style={{marginTop:10}}/> */}
        <div style={{display:"flex"}}>
          <form style={{width:452, marginRight:91}}>
            <div style={{marginTop:24}}>
              <Input placeholder={'Nome completo'}/>
            </div>
            <div style={{marginTop:24}}>
              <Input placeholder={'CPF ou CNPJ'}/>
            </div>
            <div style={{marginTop:24}}>
             <Input placeholder={'Telefone com DDD'}/>
            </div>

            <div style={{marginTop:24}}>
              <Button primary_1 titleButotn={'Continuar'} onClick={()=>setStep(2)}/>
            </div>
          </form>

          <div>

            <div>
              <GenericText text={'Sorteio seguro e autorizado'}
                            color={theme.colors.gray1}/>
              <GenericText weight={400}
                          color={theme.colors.gray3}
                          style={{marginTop:8}}>
                Sorteios autorizados pela Secretaria de Avaliação,<br/>
                Planejamento, Energia e Loteria do Ministério da<br/>
                Economia (Secap/ME), conforme Lei nº 14.027/2020
              </GenericText>

            </div>

        
            <div style={{display:"flex",flexDirection:"column", marginTop:24}}>
              <GenericText text={'Processo auditado'}/>
            
              <div style={{display:'flex', flexDirection:"row", justifyContent:"start", alignItems:"center"}}>
                <img src='/imgs/imagem-logo-kpmg.png'/>
                <img src='/imgs/imagem-logo-caixa.png' style={{marginLeft:24}}/>
              </div>
            </div>
              
            <div style={{}}>
              <GenericText text={'Compra segura'}/>
              <img src='/imgs/imagem -http-seguro.png' style={{marginTop:9}}/>
            </div>

  
          </div>
        </div>
      </>
    )
  }



  function tertiaryModal(){
    return(
      <>
        {/* <GenericText text={'Você está comprando um bilhete de R$ 100.'}
                     weight={700}
                     color={theme.colors.gray1}
                     style={{marginTop:10}}/>
        <GenericText text={'Preencha alguns dados pessoais abaixo.'}
                     weight={400}
                     color={theme.colors.gray3}
                     style={{marginTop:10}}/> */}
        <div style={{display:"flex"}}>
          <form style={{width:452, marginRight:91}}>
            <div style={{marginTop:24}}>
              <Input placeholder={'CEP'}/>
            </div>
            <div style={{marginTop:24, display:"flex", flexDirection:"row"}}>
              <Input placeholder={'Rua'}/>
              <Input placeholder={'Número'}/>
            </div>
            <div style={{marginTop:24, display:"flex", flexDirection:"row"}}>
             <Input placeholder={'Complemento'}/>
             <Input placeholder={'Bairro'}/>
            </div>
            <div style={{marginTop:24, display:"flex", flexDirection:"row"}}>
             <Input placeholder={'Cidade'}/>
             <Input placeholder={'Estado'}/>
            </div>

            <div style={{marginTop:24}}>
              <Button primary_1 titleButotn={'Continuar'} onClick={()=>setStep(3)}/>
            </div>
          </form>

          <div>

            <div>
              <GenericText text={'Sorteio seguro e autorizado'}
                            color={theme.colors.gray1}/>
              <GenericText weight={400}
                          color={theme.colors.gray3}
                          style={{marginTop:8}}>
                Sorteios autorizados pela Secretaria de Avaliação,<br/>
                Planejamento, Energia e Loteria do Ministério da<br/>
                Economia (Secap/ME), conforme Lei nº 14.027/2020
              </GenericText>

            </div>

        
            <div style={{display:"flex",flexDirection:"column", marginTop:24}}>
              <GenericText text={'Processo auditado'}/>
            
              <div style={{display:'flex', flexDirection:"row", justifyContent:"start", alignItems:"center"}}>
                <img src='/imgs/imagem-logo-kpmg.png'/>
                <img src='/imgs/imagem-logo-caixa.png' style={{marginLeft:24}}/>
              </div>
            </div>
              
            <div style={{}}>
              <GenericText text={'Compra segura'}/>
              <img src='/imgs/imagem -http-seguro.png' style={{marginTop:9}}/>
            </div>

  
          </div>
        </div>
      </>
    )
  }

  function quartoModal(){
    return(
      <>
        {/* <GenericText text={'Você está comprando um bilhete de R$ 100.'}
                     weight={700}
                     color={theme.colors.gray1}
                     style={{marginTop:10}}/>
        <GenericText text={'Preencha alguns dados pessoais abaixo.'}
                     weight={400}
                     color={theme.colors.gray3}
                     style={{marginTop:10}}/> */}
        <div style={{display:"flex"}}>
          <form style={{width:452, marginRight:91}}>
            <div style={{marginTop:24}}>
              <Input placeholder={'Número do cartão'}/>
            </div>
            <div style={{marginTop:24}}>
              <Input placeholder={'Nome (igual no cartão)'}/>
            </div>
            <div style={{marginTop:24, display:"flex", flexDirection:"row"}}>
             <Input placeholder={'Validade'}/>
             <Input placeholder={'CVV'}/>
            </div>

            <div style={{marginTop:24}}>
              <Button primary_1 titleButotn={'Continuar'} onClick={()=>setStep(4)}/>
            </div>
          </form>

          <div>

            <div>
              <GenericText text={'Sorteio seguro e autorizado'}
                            color={theme.colors.gray1}/>
              <GenericText weight={400}
                          color={theme.colors.gray3}
                          style={{marginTop:8}}>
                Sorteios autorizados pela Secretaria de Avaliação,<br/>
                Planejamento, Energia e Loteria do Ministério da<br/>
                Economia (Secap/ME), conforme Lei nº 14.027/2020
              </GenericText>

            </div>

        
            <div style={{display:"flex",flexDirection:"column", marginTop:24}}>
              <GenericText text={'Processo auditado'}/>
            
              <div style={{display:'flex', flexDirection:"row", justifyContent:"start", alignItems:"center"}}>
                <img src='/imgs/imagem-logo-kpmg.png'/>
                <img src='/imgs/imagem-logo-caixa.png' style={{marginLeft:24}}/>
              </div>
            </div>
              
            <div style={{}}>
              <GenericText text={'Compra segura'}/>
              <img src='/imgs/imagem -http-seguro.png' style={{marginTop:9}}/>
            </div>

  
          </div>
        </div>
      </>
    )
  }


  function quintoModal(){
    return(
      <>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <img src='/imgs/icons/ilustra-doacao-feita.svg'
               style={{width:195, height:195}}/>
          
              
              <GenericText weight={700}
                           color={theme.colors.gray1}
                           size={'40px'}
                           style={{marginTop:10, textAlign:"center"}}>
                            Pronto! Agora é só esperar<br/>
                            pelo sorteio que acontecerá no dia
              </GenericText>
              <GenericText weight={400}
                          color={theme.colors.gray1}
                          size={'40px'}
                          style={{marginTop:32}}
                          text={'01 de maio de 2021'}/>
              <GenericText weight={400}
                          color={theme.colors.gray3}
                          size={'24px'}
                          text={'1º sábado do mês'}/>
              <GenericText weight={400}
                          color={theme.colors.gray3}
                          style={{marginTop:8}}>
                            Uma confirmação da compra foi enviada para o seu e-mail.
              </GenericText>
              <GenericText weight={700}
                          color={theme.colors.gray1}
                          text={' É por lá que o avisaremos sobre o ganhador.'}/>


           <a href='/' style={{textDecoration:"none", marginTop:24}}>
              <Button titleButotn={'Ir para o início'} primary_1/>
           </a>
        </div>
      </>
    )
  }

  return(
    <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <HeaderClosedModal>
          {step != 0  ? <ButtonReturn onClick={()=> setStep(step - 1)}>
            <img src='/imgs/icons/icone-arrow-left.svg'/>
            <GenericText text={'Voltar'} size={'12px'} color={theme.colors.purple1}/>
          </ButtonReturn>: <></>}

          <ButtonClosedModal onClick={closeModal}>
              <img src='/imgs/icons/icone-close.svg'/>
          </ButtonClosedModal>
        </HeaderClosedModal>
        
        {step != 4 ? <GenericText text={'Doe e concorra'} 
                     size={'40px'}
                     weight={700}
                     color={theme.colors.gray1}/> : null}
        
       
       {step === 0 ? primaryModal() : null }
       {step === 1 ? secundaryModal() : null }
       {step === 2 ? tertiaryModal() : null }
       {step === 3 ? quartoModal() : null }
       {step === 4 ? quintoModal() : null }
      
      </Modal>
  )
}