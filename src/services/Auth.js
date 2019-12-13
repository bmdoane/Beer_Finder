import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase'
// Create context to propogate data through react component tree
export const AuthContext = React.createContext()
// AuthProvider component to wrap app and make auth obj
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')))
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user))
        setCurrentUser(user)
      } else {
        localStorage.removeItem('currentUser')
        setCurrentUser(false)
      }
    })
    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{currentUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}