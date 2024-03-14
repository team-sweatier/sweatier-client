import { AuthProvider } from "@/contexts/auth.context";
import { ProfileProvider } from "@/contexts/profile.context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactQueryProvider from "./_providers/reactQuery.providers";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
