import { create } from "zustand";
import type { User } from "../types/user";

export type AuthStoreState = {
  user: User | null;
  token: string | null;
  authorized: boolean;
  attempts: number;
};

export type AuthStoreAction = {
  login: (uid: string, pwd: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStoreState & AuthStoreAction>((set) => ({
  authorized: false,
  attempts: 0,
  user: null,
  token: null,
  login: (uid, pwd) => {
    if (uid === "user" && pwd === "pass") {
      set({
        authorized: true,
        user: {
          id: "user",
          name: "User",
          email: "user@example.com",
          roles: ["user"],
        },
        token: "fake-jwt-token",
      });
    } else {
      set((state) => ({ authorized: false, attempts: state.attempts + 1 }));
    }
  },
  logout: () => set({ authorized: false, attempts: 0 }),
}));
