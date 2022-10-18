import React, {JSXElementConstructor, ReactPropTypes} from 'react';
import styled from 'styled-components';
const WrapperButton =styled.div`
  background-color: darkblue;
  min-height: 3rem;
  max-width: 325px;
  display: flex;
  justify-content: center;
  align-items:center ;
  padding: 5px 15px;
  margin: 10px;
`
const InitialButton = styled.button`
  padding: 5px 10px;
  border-radius: 2px;
  border: none;
  background-color: #4e719a;
  font-size: 22px;
  color: white;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  text-align: center;
  margin: 8px;
`
const Button = styled.button`
  padding: 2px 10px;
  border: none;
  text-align: center;
  font-size: 22px;
  background-color: darkblue;
  color: white;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`
export const UserButton = function ({username}){
    return(
            <WrapperButton>
                <InitialButton>{getInitials(username)}</InitialButton>
                <Button>{username}</Button>
            </WrapperButton>
        )
}

const getInitials = function (string) {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

