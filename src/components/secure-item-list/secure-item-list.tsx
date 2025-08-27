import { useAuthStore } from "../../store/use-auth-store";
import { SecureList } from "../fake-comp-lib/components/secure-list/secure-list";
import { AuthProvider } from "../fake-comp-lib/context/auth-context";
import { authAdapter } from "./auth-adapter";

export const SecureItemList = () => {
  return (
    <AuthProvider adapter={authAdapter(useAuthStore)}>
      <SecureList items={["Item 1", "Item 2", "Item 3"]} requiredRole="user" />
    </AuthProvider>
  );
};
