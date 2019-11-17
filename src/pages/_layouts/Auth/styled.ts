import styled from 'styled-components'
import bgImage from '../../../assets/auth-background.jpg'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 30%;
  background-attachment: fixed;
  font-family: 'quicksand';

  hr {
    border: 0;
    height: 1px;
    opacity: 0.3;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.2)
    );
  }

  .in-out {
    font-size: 12px;
    margin-top: 30px;
    padding-right: 5px;
    padding-left: 5px;

    a {
      color: rgba(0, 0, 0, 0.7);
      text-decoration: none;
      margin-left: 17px;
      border: 1px solid rgba(0, 0, 0, 0.7);
      border-radius: 2px;
      padding: 2px;
      transition: all 0.4s ease-out;

      &:hover {
        color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(255, 255, 255, 1);
      }
    }
  }
`

export const Content = styled.section`
  opacity: 1;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(67, 185, 198, 0.9);
  width: 400px;
  color: white;
  text-align: center;
  border-radius: 2px;
  box-shadow: 10px 10px 15px -6px rgba(0, 0, 0, 0.25);
  transition: opacity 0.3s ease-in 0.3s, visibility 0.3s ease-in 0.3s;
  transform: scale(0.9);
`
