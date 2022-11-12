import styled from "styled-components";

export const StyledMenu = styled.nav<{open:any}>`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-color: #FFFFFF;
   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
   height: 100vh;
   width: 232px;
   text-align: left;
   position: relative;
   top: 70px;
   left: 0;
   z-index: 8;
   transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }
  div{
    position: relative;
    width: 100%;
    display: flex;
    align-content:center;
    flex-wrap: wrap;
    padding: 10px;
    cursor: pointer;
  }
  a {
    width: 232px;
    font-size: 20px;
    text-align: center;
    padding: 2rem 0;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #2231AA;
    }
  }
`
export const StyledBurger = styled.span<{open:any}>`
  
  position: absolute;
  top: 15px;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9;
  margin-bottom: 15px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #FFFFFF;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }`
export const NavBar = styled.div`
position: fixed;


`