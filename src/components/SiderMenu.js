import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Link as L } from './index';

export const SiderMenu = () => {
  return (
    <Container>
      <NavLink to="/" ><L text="Home" /></NavLink>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 170px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  position: absolute;
  left: 100px;
  top: 80px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;