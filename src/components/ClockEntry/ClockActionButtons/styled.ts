import styled from 'styled-components'

export const BorderedButton = styled.button`
  margin: 0 5px;
  padding: 4px 6px;
  font-size: 12px;
  background: none;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  color: ${props => props.color};
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${props => props.color};
  }
`
