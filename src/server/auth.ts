import { type SolidAuthConfig } from "@solid-auth/base";
import Credentials from "@auth/core/providers/credentials";

declare module "@auth/core/types" {
  export interface Session {
    user?: DefaultSession["user"];
  }
}

export const authOptions: SolidAuthConfig = {
  providers: [
    Credentials({
      authorize() {
        return null;
      },
    }),
  ],
  debug: false,
  pages: {
    signIn: "/login",
  },
};
