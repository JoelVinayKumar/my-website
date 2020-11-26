import React from 'react';
import styled from 'styled-components';

import { CheckPoint } from '../components';

export const Education = () => {

  const education_timeline = [
    {
      heading:"International Institute of Information Technology",
      place:"MSIT, Information Technology",
      grade: 7.9,
      daterange: "2017-2019" 
    },
    {
      heading: "St.Martin's Engineering College",
      place: "Bachelors in Technology, Electronics and Communication Engineering",
      grade: 6.2,
      daterange: "2017-2019"
    }
  ]

  return (
    <Container>
      {education_timeline.map(({...props}) => (
        <CheckPoint
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