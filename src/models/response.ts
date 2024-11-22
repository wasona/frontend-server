import { z } from "zod";

export function createResponse<T extends z.ZodTypeAny>(schema: T) {
  return z.object({
    success: z.boolean(),
    data: schema.optional(),
    code: z.number().int(), // TODO: enum
    codeName: z.string(),
    error: z.record(z.string(), z.any()).optional(),
  });
}
