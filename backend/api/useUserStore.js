// useUserStore.js
import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  // Fetch users from backend
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get('/api/users');
      set({ users: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  // Add a user
  addUser: async (user) => {
    try {
      const res = await axios.post('/api/users', user);
      set((state) => ({
        users: [...state.users, res.data],
      }));
    } catch (err) {
      console.error(err);
    }
  },

  // Remove a user by ID
  removeUser: async (id) => {
    try {
      await axios.delete(/api/users/${id});
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useUserStore;