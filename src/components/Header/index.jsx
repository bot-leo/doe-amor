import {HeaderContainer,
  Container,
  Logo,
  Menu,
  Link} from './style'
import { useState } from "react"
  
import { Button } from '../Button'
import { DoeModal } from '../DoeModal'


export function Header(){
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

 
  function closeModal() {
    setIsOpen(false);
  }
  return(
    <HeaderContainer>

      <DoeModal closeModal={closeModal} 
                isOpen={modalIsOpen}
                openModal={openModal}/>
      <Container>
        <Logo src="/imgs/logo-doeamor.svg" alt="Logo-doe-amor"/>
        <Menu>
          <Link href='/'>Início</Link>
          <Link href='/HospitalAmor'>Hospital do amor</Link>
        </Menu>

        <Button titleButotn={"Quero doar e concorrer"} primary_1 onClick={openModal}/>
      </Container>
    </HeaderContainer>
  )
}