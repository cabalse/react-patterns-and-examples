import type { StoreApi, UseBoundStore } from "zustand";
import type { AuthPort } from "../fake-comp-lib/ports/auth-port";
import type {
  AuthStoreAction,
  AuthStoreState,
} from "../../store/use-auth-store";

export const authAdapter = (
  authStore: UseBoundStore<StoreApi<AuthStoreState & AuthStoreAction>>
): AuthPort => ({
  get isAuthenticated() {
    return authStore.getState().authorized;
  },
  get user() {
    return authStore.getState().user;
  },
  hasRole(role: string) {
    const user = authStore.getState().user;
    return user && user?.roles ? user.roles.includes(role) : false;
  },
  getToken() {
    return authStore.getState().token;
  },
});
