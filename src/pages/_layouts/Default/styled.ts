import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 60px 1fr;
  gap: 15px;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: #f2f2f2;
`

export const Content = styled.section`
  width: 100%;
  grid-area: content;
  padding: 0 20px;
`
