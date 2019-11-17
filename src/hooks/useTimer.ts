import { useEffect, useState } from 'react'

function useTimer(currentDate: Date): Date {
  const [date, setDate] = useState(currentDate)

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000)
    return () => {
      clearInterval(timerId)
    }
  })

  return date
}

export default useTimer
