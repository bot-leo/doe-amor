import {HeaderContainer,
        Container,
        Logo,
        Menu,
        Link} from './style'

export function Header(){
  return(
    <HeaderContainer>
      <Container>
        <Logo src="/imgs/logo-doeamor.svg" alt="Logo-doe-amor"/>
        <Menu>
          <Link href='/'>Início</Link>
          <Link href='/HospitalAmor'>Hospital do amor</Link>
        </Menu>
      </Container>
    </HeaderContainer>
  )
}