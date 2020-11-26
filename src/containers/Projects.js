import React from 'react';
import styled from 'styled-components';

import { Post } from '../components';

export const Projects = () => {

  const projects = [
    {
      heading:"Discussion Portal",
      topics:"Python, Flask, SQL Alchemy",
      description: "A place to discuss about interviews and their experiences",
    },
    {
      heading: "e-Commerce book store",
      topics: "Python, Flask, SQL Alchemy",
      description: "A simple e-commerce store to trade new and used books",
    }
  ]

  return (
    <Container>
      {projects.map(({...props}) => (
        <Post
          {...props}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 60px;
  width: 600px;
`;