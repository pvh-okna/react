import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #d3d3d3;
  border-radius: 5px;
  width: 100px;
`
const Title = styled.h1`
  font-weight: 300;
`
export const SimpleComponent = () => (
    <Container>
        <Title>Sign In</Title>
    </Container>
)

