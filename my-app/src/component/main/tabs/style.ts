import styled from "styled-components";

export const TabsBlock = styled.div`
  width: 70%;
  height: max-content;
  margin: 40px auto 40px;
`
export const TabsList = styled.ul`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
`

export const TabsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  margin-right: 20px ;
  
  :hover {
    color: blue;
    cursor: pointer;
  }
`
