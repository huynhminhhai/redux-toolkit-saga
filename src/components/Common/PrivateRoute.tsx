import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // check user login
  // if yes, show route
  // else redirect login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))

  return isLoggedIn ? <>{children}</> : <Navigate to='/login' />
}
