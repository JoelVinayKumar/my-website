import React from 'react'
import styled from 'styled-components';

export const Link = ({ text }) => {
  return (
    <Text>{text}</Text>
  )
}

const Text = styled.p`
  position: relative;
  z-index: 1;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;

  &:after {
    background-color: #FFF591;
    bottom: 0;
    content: ' ';
    display: block;
    height: 50%;
    left: -5px;
    opacity: 0.5;
    position: absolute;
    transition: all 0.25s ease-in-out;
    width: calc(100% + 8px);
    z-index: -1;
  }

  &:hover {
    top: 40;
    width: calc(100% + 10px);
    font-weight: 600;
    content: ' ';
    display: block;
    height: 30%;
    left: -10;
    opacity: 1;
    background-color: #FFF591;
    transition: all 0.15s ease-in-out;
  }

  &:visisted {
    font-weight: 600;
  }

`;