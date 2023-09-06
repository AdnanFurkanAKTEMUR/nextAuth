import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
const dotenv = require("dotenv");
dotenv.config();
import clientMongo from "@/app/mongo/mongo";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 gün
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      //@ts-ignore
      async authorize(credantials, req) {
        const { email, password } = credantials as {
          email: string;
          password: string;
        };
        await clientMongo.connect();
        const userCollection = await clientMongo.db("next-auth").collection("user");
        const user = await userCollection.findOne({ email: email });
        const verify = await bcrypt.compare(password, user.password);
        await clientMongo.close();
        if (user && verify) {
          return { _id: user._id, name: user.name, email: user.email };
        } else {
          throw new Error("hata");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token._id = user._id;
      }
      return token;
    },
    session({ session, token }: any) {
      if (token && session.user) {
        session.user._id = token._id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
