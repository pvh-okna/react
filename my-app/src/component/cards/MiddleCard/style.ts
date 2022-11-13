import styled from "styled-components";

export const MiddleCardBlock = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
`

export const MiddleCardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  background-repeat: no-repeat;
`

export const MiddleCardDate = styled.p`
height: 10%;
  display: flex;
  align-items: center;
  color: #8D8E97;
`



export const MiddleCardTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  height: 20%;
  
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

export const WrapperMiddleCardsBlock = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 450px;
  gap: 20px;
    `
export const MiddleCardLikes = styled.span`

  
`
export const MiddleCardDislikes = styled.span`

  
`
export const MiddleCardBookmark = styled.span`
  
  
`
export const MiddleCardPoints = styled.span`
  position: relative;
  font-size: 16px;

    `
export const MiddleCardIcon = styled.span`
display: inline-flex;    
justify-content: space-between;
  
`