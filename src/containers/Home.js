import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import { SiderMenu, ProfileSection } from '../components';
import { Education, Projects, Experience } from '../containers';

const Intro = () => (
  <section style={{ width:'450px' }}>
    <h3>I'm a full stack developer</h3>
    <p>I wander out internet worlds</p>
  </section>
)

export const Home = () => {
  return (
    <Router>
    <YellowSlate>
      <MainSlate>
        <InnerDiv>
          <Left>
            <SiderMenu />
            <div style={{width:'50px'}} />
              <Switch>
                <Route exact path="/" component={Intro} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/experience" component={Experience} />
              </Switch>
          </Left>
          <ProfileSection />
        </InnerDiv>
      </MainSlate>
    </YellowSlate>
    </Router>
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
  display: flex;
  justify-content: center;
`;

const InnerDiv = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 100px; 
  overflow: hidden;
`;

const Left = styled.div`
  max-width: 65vw;
  display: flex;
  justify-content: space-between;
`;