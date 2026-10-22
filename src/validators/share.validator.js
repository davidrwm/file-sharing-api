import { z } from "zod";

export const createShareSchema = z.object({
  email: z.string().trim().email().max(254),
});

export const shareIdSchema = z.object({
  shareId: z.string().min(1),
});