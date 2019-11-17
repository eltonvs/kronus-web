import React from 'react'

import * as S from './styled'

import useLogout from '../../hooks/useLogout'

import { useSelector } from '../../store'

const Header: React.FC = () => {
  const logout = useLogout()
  const profile = useSelector(state => state.user.profile)

  return (
    <S.Header>
      <h1>Kronus</h1>
      <aside>
        <span>Hello, {profile && profile.full_name}!</span>
        <a className="logout" onClick={logout} title="Logout">
          Logout &nbsp; <i className="fa fa-sign-out" />
        </a>
      </aside>
    </S.Header>
  )
}

export default Header
