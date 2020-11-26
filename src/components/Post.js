import React from 'react';
import styled from 'styled-components';

import { Link } from '../components';

export const Post = ({ heading, topics, description }) => {
  return (
    <Container>
        <Title>{heading}</Title>
        <Topics>{topics}</Topics>
        <SubInfo>{description}</SubInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 60px;
`;

const Title = styled.h4`
  font-size: 16px;
  margin: 0;
`;

const Topics = styled.p`
  font-size: 10px;
`;

const SubInfo = styled.p`
  font-size: 13px;
`;