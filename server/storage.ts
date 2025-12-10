import { drizzle } from "drizzle-orm/node-postgres";
import { 
  type MembershipInquiry, 
  type InsertMembershipInquiry,
  type ContactMessage,
  type InsertContactMessage,
  membershipInquiries,
  contactMessages
} from "@shared/schema";

const db = drizzle(process.env.DATABASE_URL!);

export interface IStorage {
  createMembershipInquiry(inquiry: InsertMembershipInquiry): Promise<MembershipInquiry>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class Storage implements IStorage {
  async createMembershipInquiry(inquiry: InsertMembershipInquiry): Promise<MembershipInquiry> {
    const [result] = await db.insert(membershipInquiries).values(inquiry).returning();
    return result;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [result] = await db.insert(contactMessages).values(message).returning();
    return result;
  }
}

export const storage = new Storage();
