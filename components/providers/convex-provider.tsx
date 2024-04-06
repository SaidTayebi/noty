"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
// import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(CONVEX_URL);

export const ConvextClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}

        {/* <AuthLoading>
          <Loading />
        </AuthLoading> */}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
