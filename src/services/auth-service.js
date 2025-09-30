import { supabase } from '../utils/supabase'

export const registerUser = (email, password) => {
  return supabase.auth.signUp({ email, password })
}

export const loginUser = (email, password) => {
  return supabase.auth.signInWithPassword({ email, password })
}

export const loginUserWithGoogle = () => {
  return supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

export const logoutUser = () => {
  return supabase.auth.signOut()
}
