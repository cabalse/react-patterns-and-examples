import { useAuth } from "../../context/auth-context";
import type { AuthPort } from "../../ports/auth-port";

type SecureListProps = {
  items: string[];
  requiredRole?: string;
  authOverride?: Partial<AuthPort>;
};

export function SecureList({
  items,
  requiredRole,
  authOverride,
}: SecureListProps) {
  const auth = { ...useAuth(), ...authOverride };

  if (!auth.isAuthenticated) return <div>Please sign in.</div>;
  if (requiredRole && !auth.hasRole?.(requiredRole))
    return <div>Access denied.</div>;

  return (
    <ul>
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}
