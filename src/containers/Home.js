import React from 'react';
import styled from 'styled-components';

import { SiderMenu } from '../components'

export const Home = () => {
  return (
    <YellowSlate>
      <MainSlate>
        <SiderMenu />
      </MainSlate>
    </YellowSlate>
  );
}


const YellowSlate = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #FFF591;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainSlate = styled.div`
  height: calc(100vh - 25px);
  width: calc(100vw - 25px);
  background-color: #F1F1F1;
  border-radius: 20px;
`;