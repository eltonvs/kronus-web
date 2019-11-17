import React from 'react'

import * as S from './styled'

import useTimer from '../../hooks/useTimer'

const Clock: React.FC = () => {
  const timer = useTimer(new Date())
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  }
  return (
    <>
      <S.DateWrapper>
        {timer.toLocaleDateString(undefined, dateOptions)}
      </S.DateWrapper>
      <S.TimeWrapper>{timer.toLocaleTimeString()}</S.TimeWrapper>
    </>
  )
}

export default Clock
