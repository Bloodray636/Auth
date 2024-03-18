import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

interface Activity {
  id: string;
  userId: string;
  action: string;
  timestamp: Date;
}

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth?: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}