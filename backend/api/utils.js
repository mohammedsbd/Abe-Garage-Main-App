import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,

  // Actions

  loginStart: () => set({ loading: true, error: null }),

  loginSuccess: (userData) =>
    set({ user: userData, isLoggedIn: true, loading: false, error: null }),

  loginFailure: (errorMessage) =>
    set({ error: errorMessage, loading: false }),

  login: async (userData) => {
    // Simulate async login process
    set({ loading: true, error: null });
    try {
      // Imagine an API call here
      await new Promise((res) => setTimeout(res, 1000));
      set({ user: userData, isLoggedIn: true, loading: false });
    } catch (error) {
      set({ error: 'Login failed', loading: false });
    }
  },

  logout: () => set({ user: null, isLoggedIn: false }),

  updateUser: (newUserData) =>
    set((state) => ({
      user: { ...state.user, ...newUserData },
    })),

  clearError: () => set({ error: null }),

  // Optional: you could add persistence here (localStorage/sessionStorage)
  // Example: persist user in localStorage and load it on store initialization
}));

export default useAuthStore;