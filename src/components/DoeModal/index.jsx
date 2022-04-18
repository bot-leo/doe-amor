
import Modal from 'react-modal'
import { useState } from "react"

import { GenericText } from '../GenericText'
import theme from '../../styles/theme'
import { CardDonate } from '../CardDonate'
import { ButtonClosedModal, ContainerCardDonate, ContainerSecurity, FoorterModal, HeaderClosedModal } from './style'
import { Button } from '../Button'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:8
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
        <GenericText text={'Você está comprando um bilhete de R$ 100.'}
                     weight={700}
                     color={theme.colors.gray1}
                     style={{marginTop:10}}/>
        <GenericText text={'Preencha alguns dados pessoais abaixo.'}
                     weight={400}
                     color={theme.colors.gray3}
                     style={{marginTop:10}}/>

        <form>
          <div>
            <label>Nome Completo</label>
            <input type="Marcos Carolino" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="Marcos Carolino" />
          </div>
          <div>
            <label>Telefone</label>
            <input type="Marcos Carolino" />
          </div>

          <div>
            <Button titleButotn={'Continuar'}/>
          </div>
        </form>

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



  function tertiaryModal(){
    return(
      <>
        <GenericText text={'Você está comprando um bilhete de R$ 100.'}
                     weight={700}
                     color={theme.colors.gray1}
                     style={{marginTop:10}}/>
        <GenericText text={'Preencha alguns dados pessoais abaixo.'}
                     weight={400}
                     color={theme.colors.gray3}
                     style={{marginTop:10}}/>

        <form>
          <div>
            <label>Nome Completo</label>
            <input type="Marcos Carolino" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="Marcos Carolino" />
          </div>
          <div>
            <label>Telefone</label>
            <input type="Marcos Carolino" />
          </div>

          <div>
            <Button titleButotn={'Continuar'}/>
          </div>
        </form>

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

  return(
    <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <HeaderClosedModal>
          <ButtonClosedModal onClick={closeModal}>
              <img src='/imgs/icons/icone-close.svg'/>
          </ButtonClosedModal>
        </HeaderClosedModal>
        
        <GenericText text={'Doe e concorra'} 
                     size={'40px'}
                     weight={700}
                     color={theme.colors.gray1}/>
        
       
       {step === 0 ? primaryModal() : null }
       {step === 1 ? secundaryModal() : null }
      
      </Modal>
  )
}