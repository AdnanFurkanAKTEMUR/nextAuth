import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";
const dotenv = require("dotenv");
dotenv.config();

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
        let clientMongo: any;
        async function mongo() {
          clientMongo = new MongoClient(
            process.env.MONGO_URL ? process.env.MONGO_URL : ""
          );
          try {
            await clientMongo.connect();
            console.log("mongodb connected");
          } catch (e) {
            console.log("failed mongodb connected");
          } finally {
            //await client.close()
          }
        }

        await mongo();
        let user: any;
        if (clientMongo) {
          const userCollection = await clientMongo
            .db("next-auth")
            .collection("user");
          user = await userCollection.findOne({ email: email });
          console.log(user);
        }
        const dogrula = await bcrypt.compare(password, user.password);
        console.log(password);
        if (user && dogrula) {
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
      /* Step 1: update the token based on the user object */
      if (user) {
        token._id = user._id;
      }
      return token;
    },
    session({ session, token }: any) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user._id = token._id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
