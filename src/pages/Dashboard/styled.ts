import styled from 'styled-components'

export const DashboardWrapper = styled.div`
  text-align: center;
  margin: 50px 0;

  .separator {
    margin: 50px 0;
  }

  .clock-log-cta {
    text-align: right;
  }

  .clock-action {
    font-size: 18px;
    padding: 0.5em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: #ffffff;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;

    &.clock-in {
      background-color: #1d717a;
      &:hover {
        background-color: #0e363b;
      }
    }
    &.clock-out {
      background-color: #d05c9b;
      &:hover {
        background-color: #b85189;
      }
    }
  }
`
