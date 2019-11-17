import styled from 'styled-components'

export const ClockEntryWrapper = styled.div`
  padding: 8px 10px;
  max-width: 500px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;

  .container {
    position: relative;
    display: inline-block;
  }

  .actions {
    white-space: nowrap;
    display: none;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(calc(100% + 15px), -50%);
  }
  &:hover {
    .actions {
      display: block;
    }
  }

  .display-block {
    display: block;
  }
`
