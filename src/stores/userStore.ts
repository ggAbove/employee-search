// store/userStore.ts
import { defineStore } from "pinia";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUsers(query: string) {
      this.loading = true;
      this.error = null;
      try {
        const queries = query.split(',').map((q) => q.trim()).filter(Boolean);
        const idQueries = queries.filter((q) => !isNaN(Number(q))).map((id) => `id=${id}`);
        const usernameQueries = queries.filter((q) => isNaN(Number(q))).map((username) => `username=${username}`);
        const queryString = [...idQueries, ...usernameQueries].join('&');

        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?${queryString}`
        );
        // duplicate data to simulate many
        this.users = response.data
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        this.error = "Ошибка при получении данных";
      } finally {
        this.loading = false;
      }
    },
    setCurrentUser(userId: number) {
      this.currentUser = this.users.find((user) => user.id === userId) || null;
    },
    clearUsers() {
      this.users = [];
      this.currentUser = null;
    },
  },
});
