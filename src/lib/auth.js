import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import dbConnect from "./db.connect";
import Admin from "@/models/admin";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;


        await dbConnect();

        // Find the admin by username
        const admin = await Admin.findOne({ username });

        // If admin is not found, return an error
        if (!admin) {
          throw new Error("User not found with the credentails");
        }

        const passwordMatch = await compare(password || "", admin.password);

        if (!passwordMatch) {
          throw new Error("Invalid password");
        }

        const user = { id: admin._id, name: admin.username };
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

export default authOptions;
