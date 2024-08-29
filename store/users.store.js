import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

const useUsers = create(persist(
    (set, get) => ({
        users: [],
        loading: false,
        error: null,
        fetchUsers: async () => {
            set({ error: null });
            set({ loading: true });
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                if (response.ok) {
                    set({ users });
                }
            } catch (err) {
                set({ error: err })
            } finally {
                set({ loading: false });
            }
        }
    }),
    {
        name: 'users-storage',
        storage: createJSONStorage(() => localStorage),
    },
));

export default useUsers;