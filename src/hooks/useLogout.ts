import { useDispatch } from 'react-redux'

import { logOut } from '../store/modules/auth/auth.actions'

function useLogout() {
  const dispatch = useDispatch()
  return () => {
    dispatch(logOut())
  }
}

export default useLogout
