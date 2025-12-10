import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMembershipInquirySchema, insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Submit membership inquiry
  app.post("/api/membership-inquiry", async (req, res) => {
    try {
      const validatedData = insertMembershipInquirySchema.parse(req.body);
      const inquiry = await storage.createMembershipInquiry(validatedData);
      res.status(201).json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: "Invalid form data", details: error.errors });
      } else {
        console.error("Error creating membership inquiry:", error);
        res.status(500).json({ success: false, error: "Failed to submit inquiry" });
      }
    }
  });

  // Submit contact message
  app.post("/api/contact-message", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, message });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: "Invalid form data", details: error.errors });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ success: false, error: "Failed to submit message" });
      }
    }
  });

  return httpServer;
}
