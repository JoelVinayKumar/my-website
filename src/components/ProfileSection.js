import React from 'react';
import styled from 'styled-components';

export const ProfileSection = () => {
  const picture_link = "https://avatars0.githubusercontent.com/u/16177724?s=460&u=e309b78e0ea859ec30fa897b65e7625f150f3615&v=4";
  return (
    <Container>
      <ProfileImage src={picture_link} alt="profile_picture" />
      <b><h2>Joel Vinay Kumar</h2></b>
      <p style={{ margin: 0 }}>Software Engineer</p>
      <a class="twitter-follow-button" href="https://twitter.com/coderspider"data-size="small">
        @coderspider
      </a>
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ProfileImage = styled.img`
  width: 120px;
  border-radius: 15px;
  box-shadow: 5px 5px magenta;
`;