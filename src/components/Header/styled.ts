import styled from 'styled-components'

export const Header = styled.header`
  grid-area: header;
  background-color: #43b9c6;
  padding: 10px 20px;
  box-shadow: 0 -10px 15px 15px lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h1 {
    font-size: 1.5em;
  }

  aside {
    font-size: 14px;
  }

  .logout {
    cursor: pointer;
    margin-left: 15px;
    padding-left: 15px;
    border-left: 1px solid #fff;
  }
`
