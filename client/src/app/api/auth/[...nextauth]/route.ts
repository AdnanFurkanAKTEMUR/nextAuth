import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "password", type: "password" },
      },
      authorize(credantials, req) {
        const { email, password } = credantials as {
          email: string;
          password: string;
        };
        if (email !== "adnan@gmail.com" || password !== "1234") {
          return null;
        }
        return { id: "1234", name: "adnan", email: "adnan@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };
