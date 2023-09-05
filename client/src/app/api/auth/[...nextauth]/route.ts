import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30*24*60*60, // 30 gün
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
       
      },
      authorize(credantials, req) {
        const { email, name, id } = credantials as {
          id: string
          email: string;
          name: string;
        };
        if(email && name){
          return {id:"id", name: name, email: email }
        }else{
          throw new Error("hata")
        }

      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };
