import { z } from "zod";
import { desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

export const bookings = {
  create: base
    .input(
      z.object({
        name: z.string().min(1).max(120),
        email: z.string().email(),
        phone: z.string().min(4).max(40),
        eventType: z.string().min(1).max(80),
        eventDate: z.string().max(40).optional(),
        guests: z.number().int().positive().max(100000).optional(),
        message: z.string().max(2000).optional(),
      }),
    )
    .handler(async ({ input }) => {
      const [booking] = await db
        .insert(schema.bookings)
        .values(input)
        .returning();
      return booking;
    }),
  list: base.handler(() =>
    db.select().from(schema.bookings).orderBy(desc(schema.bookings.createdAt)),
  ),
};
