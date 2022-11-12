import styled from "styled-components";

export const IconMoon = styled.span<{light:any}>`
  display: flex;
  color:${( {light}) => light ? "#4C4B5E" :  "#E8E8E8" };
  font-size: 36px;

  height: 70px;
  width:107px;
  border-left: 1px solid #E8E8E8;
  svg{
    margin: 15px 10px 15px 36px;
  }
`
export const IconSun = styled.span<{light:boolean}>`
  display: contents;
  color:${( {light}) => light ? "#E8E8E8": "#4C4B5E"   };
  font-size: 36px;
  border: 1px solid red;

  svg{
    margin: 15px 10px;
    width: 81px;
    
  }
`
export const Icon = styled.div`
    display: flex;
  position: relative;
  top:201px;
  border:1px solid #E8E8E8;
  justify-content: space-around;
  align-content: center;
  height: 70px;
  width: 232px;
    `
export const BtnLogOut = styled.button`
  width: 100%;
  height: 70px;
  background-color: #E8E8E8;
  color: black;
  border: none;
  cursor: pointer;
  
`
export const WrapperBtn = styled.section`
    position: relative;
  bottom: -201px;
`