'use client'

import React, { createContext, useContext, useState } from 'react'
import { login as apiLogin, logout as apiLogout } from '@/app/api/users'

type User = {
  id: number
  nickname: string
  isAuthenticated: boolean
} | null

type AuthContextType = {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  const login = async (email: string, password: string) => {
    try {
      const userData = await apiLogin({ email, password });
      const user = { id: userData.id, nickname: userData.nickname, isAuthenticated: true };
      setUser(user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}