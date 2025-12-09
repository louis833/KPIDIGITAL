import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = Pick<typeof users.$inferInsert, 'username' | 'password'>;
export type User = typeof users.$inferSelect;

export const quizResults = pgTable("quiz_results", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  calculatorType: text("calculator_type").notNull(),
  userName: text("user_name").notNull(),
  userEmail: text("user_email").notNull(),
  totalScore: integer("total_score").notNull(),
  maxScore: integer("max_score").notNull(),
  tier: text("tier").notNull(),
  answers: jsonb("answers").notNull(),
  categoryScores: jsonb("category_scores").notNull(),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertQuizResultSchema = createInsertSchema(quizResults).omit({
  id: true,
  createdAt: true,
});

export type InsertQuizResult = Omit<typeof quizResults.$inferInsert, 'id' | 'createdAt'>;
export type QuizResult = typeof quizResults.$inferSelect;
