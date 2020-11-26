import React from 'react';
import styled from 'styled-components';

export const CheckPoint = ({ heading, place, grade, daterange }) => {
  return (
    <Container>
      <BigDot />
      <Info>
        <HeadingInfo>{heading}</HeadingInfo>
        <SubInfo>{place}</SubInfo>
        <SubInfo>{grade}</SubInfo>
        <SubInfo>{daterange}</SubInfo>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const BigDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: black;
  margin-right: 30px;
`;

const Info = styled.div`
  
`;

const HeadingInfo = styled.h4`
  font-size: 16px;
  margin: 0;
`;

const SubInfo = styled.p`
  font-size: 14px;
`;