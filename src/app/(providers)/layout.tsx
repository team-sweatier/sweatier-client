import { AuthProvider } from "@/contexts/auth.context";
import { ProfileProvider } from "@/contexts/profile.context";
import { TiersProvider } from "@/contexts/tiers.context";
import ReactQueryProvider from "./_providers/reactQuery.providers";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ProfileProvider>
          <TiersProvider>{children}</TiersProvider>
        </ProfileProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
