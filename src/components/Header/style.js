import styled from "styled-components"

export const HeaderContainer = styled.header`
  height: 5rem;
  background:${({theme}) => theme.colors.white};
  position: fixed;
  overflow: hidden;
  width: 100%;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.04);



  @media (max-width:759px) {
    nav{
      display: none;
    }
  }

  button{
    margin: auto;
  }
`

export const Container = styled.div`
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  background:${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;

  @media (max-width:759px) {
    justify-content: center;
    align-items: center;
  }

  
`

export const Logo = styled.img`
  width:160px;
  height: 40px;
  margin-left: 80px;
`

export const Menu = styled.nav`
  margin-left: 5rem;
  height: 5rem;
`

export const Link = styled.a`
  display: inline-block;
  position: relative;
  padding: 0 0.5rem;
  height: 5rem;
  line-height: 5rem;
  font-family: 'Open Sans', sans-serif;
  color:${({theme}) => theme.colors.gray2};
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;

  +a{
    margin-left: 2rem;
  };

  :hover{
    border-top: 2px solid #BD00B3;
  }
  :active::after{
    content: '';
    height:3px;
    width: 100%;
    border-top:2px solid #BD00B3;
  }
`