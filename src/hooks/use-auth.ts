export function useAuth() {
  return { 
    isAuthenticated: false,
    isLoading: false,
    user: null,
    signIn: () => {},
    signOut: () => {}
  } as const;
}