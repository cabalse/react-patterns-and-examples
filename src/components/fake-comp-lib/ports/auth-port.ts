import type { User } from "../types/user";

export interface AuthPort {
  user: User | null;
  isAuthenticated: boolean;
  hasRole?: (role: string) => boolean;
  getToken?: () => string | null;
}
