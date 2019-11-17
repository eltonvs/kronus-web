import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from '~/store'
import { logOut } from '~/store/modules/auth/auth.actions'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <button type="button" onClick={handleLogout}>
      Sign Out
    </button>
  )
}

export default Header
