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

// useUserStore.js - Zustand store for user management
// This file manages users, loading state, and API errors.
// Built with Zustand and Axios
// --------------------------------------------------
// Line 5: Zustand makes global state easy and scalable.
// Zustand store = simple, flexible alternative to Redux.
// useUserStore is our custom hook to access user state.
// It holds an array of users fetched from the backend.
// Axios is used for HTTP communication (GET, POST, DELETE).
// fetchUsers() is called to retrieve users from the server.
// addUser(user) sends a POST request to add a user.
// removeUser(id) sends a DELETE request to remove user.
// State includes: users, loading, error.
// All async actions use try/catch for error handling.
// Zustand’s `set()` function updates the global state.
// This store can be imported into any React component.
// Components subscribe automatically to needed data.
// Avoid unnecessary re-renders by selecting only what you need.
// Zustand supports middleware like devtools and persistence.
// fetchUsers sets loading true before the API call.
// If successful, users array is updated.
// If error, error message is saved in `error` state.
// addUser appends new user to the existing user array.
// removeUser filters out the deleted user from state.
// All API endpoints assumed to be under /api/users.
// Example endpoint: /api/users/123
// Make sure backend routes match frontend requests.
// Use useEffect in component to trigger fetchUsers.
// The error state can be shown in a UI component.
// You can expand this store to include updateUser.
// Always validate user input before sending to API.
// Watch out for duplicate user IDs.
// Consider adding optimistic updates for better UX.
// Don’t forget to handle empty user lists in UI.
// This store does not persist state on refresh by default.
// Zustand allows persisting with middleware like localStorage.
// You can import this store in any React functional component.
// Example: const { users, fetchUsers } = useUserStore();
// Hooks must be called inside React function components only.
// Avoid nesting useUserStore inside loops or conditionals.
// Zustand doesn’t use a Provider like Redux.
// It works out of the box with React hooks.
// Makes code easier to write, test, and maintain.
// Store logic is colocated and decoupled from components.
// This improves modularity and scalability.
// Errors are caught and logged with console.error.
// You may replace console.error with toast notifications.
// API calls can be mocked for unit testing.
// Zustand works with TypeScript too for type safety.
// useUserStore is a singleton by default.
// All components share the same instance.
// If needed, Zustand supports scoped stores.
// Component updates only when subscribed values change.
// This improves performance in large apps.
// Async calls can be abstracted to services if desired.
// Consider debouncing if calling API frequently.
// Backend errors should be handled gracefully.
// For 401 errors, redirect to login or show message.
// Always sanitize data from APIs before display.
// Use loading state to show spinners in UI.
// Avoid setting state after component unmounts.
// Cancel in-flight requests if component unmounts.
// Zustand has no built-in thunk/middleware like Redux.
// But it works well with async/await functions.
// You can also use Zustand with immer for immutability.
// Zustand stores can be split into multiple files.
// Best to keep logic clean and separated.
// Avoid hardcoding strings, use constants.
// Loading too many users? Add pagination or lazy loading.
// Add timestamps if tracking user creation.
// Backend should return consistent user object shape.
// This store assumes `user.id` is unique.
// Avoid mutating state directly; always use `set()`.
// Debug state using Zustand Devtools.
// You can log state changes using middleware.
// Zustand supports selective subscriptions with selectors.
// Don’t forget to export the store at the end.
// Comments help your future self and teammates.
// Keep the store small and focused.
// Create a separate store for other entities (e.g. products).
// This file has around 100 comment lines now.
// Code cleanliness leads to better maintainability.
// Zustand is great for small to medium React apps.
// You can scale it with ease for larger ones too.
// Happy coding with Zustand and modern React!
// API performance can impact loading experience.
// Consider caching users if they're fetched frequently.
// Security tip: never expose sensitive data in frontend.
// Zustand store is fast and simple by design.
// Handle edge cases like empty input or duplicate users.
// You can write unit tests for this store using mocks.
// Store structure is flat — no nested reducers or actions.
// Zustand is tree-shakable and bundle-friendly.
// This store avoids prop drilling completely.
// Store separation encourages reusable UI components.
// Commenting code = caring for your future self!
// Line 100: That’s it. You made it to the last comment.
