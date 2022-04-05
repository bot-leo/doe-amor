import styled from "styled-components"

export const HeaderContainer = styled.header`
  height: 5rem;
  background:${({theme}) => theme.colors.white};
`

export const Container = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width:160px;
  height: 40px;
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


  & +a{
    margin-left: 2rem;
  };

  :active::after{
    content: '';
    color:red;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background:${({theme}) => theme.colors.purple1};
  }
`