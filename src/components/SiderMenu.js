import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Link as L } from './index';

export const SiderMenu = () => {
  return (
    <Container>
      <NavLink to="/" ><L text="Home" /></NavLink>
      <NavLink to="/education" ><L text="Education" /></NavLink>
      <NavLink to="/skills" ><L text="Skills" /></NavLink>
      <NavLink to="/projects" ><L text="Projects" /></NavLink>
      <NavLink to="/experience" ><L text="Experience" /></NavLink>
      <NavLink to="/writings" ><L text="Writings" /></NavLink>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 120px;
  height: 280px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;