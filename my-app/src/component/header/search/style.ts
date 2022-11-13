import styled from "styled-components";

export const MyInput = styled.input`
  width: 100%;
  background: #2231AA;
  border: none;
  padding-left: 20px;
  border-right: 1px solid cornflowerblue;
  margin-left: 70px;
  &::placeholder {
    color: white;
    text-align: center;
  }
  &:focus {
    outline: 0;
    outline-offset: 0;
    background: #5360CD;
  }
    `
export const SearchImg = styled.button`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #2231AA;
    border: 1px solid #5360CD;
    
  img{
    object-fit: cover;
   
    background-color: #2231AA;
  }
`
