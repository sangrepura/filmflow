import { useAuth } from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

/*
   protect route for page shown to user if logged in
*/
const AuthRoute = ({ children }) => {
  const { currentUser } = useAuth()
  const location = useLocation()

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default AuthRoute
