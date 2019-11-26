import React, { useEffect, useState } from 'react'
import { auth } from '../../Firebase'
// Create context to propogate data through react component tree
export const AuthContext = React.createContext()
// AuthProvider component to store authentication status
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  // Keeps track of status and only runs once with '[]' as 2nd arg
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
  }, [])
  // As the value changes its passed along
  return (
    <AuthContext.Provider
      value={{currentUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}