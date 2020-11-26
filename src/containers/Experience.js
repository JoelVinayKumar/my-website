import React from 'react';
import styled from 'styled-components';

import { CheckPoint } from '../components';

export const Experience = () => {

  const experience_timeline = [
    {
      heading:"Auzmor Technology",
      place:"Mobile App Development",
      grade: "Flutter",
      daterange: "September 2020" 
    },
    {
      heading:"Auzmor Technology",
      place:"Frontend Development",
      grade: "React JS",
      daterange: "April 2020" 
    },
    {
      heading:"Auzmor Technology",
      place:"Backend Development",
      grade: "Node JS, Nest JS, Typescript, Oauth, MySQL, MongoDB, Microservices",
      daterange: "June 2019" 
    },
    {
      heading:"Amazon Development Center",
      place:"Digital and Device Technical Support",
      grade: "Kindle devices, Fire devices, Prime digital content",
      daterange: "July 2016" 
    },
  ]

  return (
    <Container>
      {experience_timeline.map(({...props}) => (
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
  width: 70%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: content-box;
`;