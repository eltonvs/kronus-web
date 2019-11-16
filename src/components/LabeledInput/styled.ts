import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
`

const checkPulse = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    transform: scale(1.4);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`

export const LabeledInputWrapper = styled.div`
  margin: 20px;
  margin-left: 50px;
  text-align: left;

  &.animated {
    animation: ${pulse} 0.7s 1;
  }

  label {
    font-weight: lighter;
    margin-left: -5px;
  }

  input {
    margin: 5px;
    width: 300px;
    margin-left: -5px;
    height: 40px;
    border-radius: 2px;
    border: none;
    font-size: 18px;
    padding: 5px;
    color: #25291b;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 0.3);
    transition: background-color 0.4s ease-out;

    &:focus {
      outline: none;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  .animate-check {
    margin-left: 5px;
    animation: ${checkPulse} 0.4s 1;
  }
`
