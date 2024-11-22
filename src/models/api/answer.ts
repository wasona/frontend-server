import { createResponse } from "@models/response";
import { z } from "zod";

export const AnswerResponse = createResponse(
  z.object({ correct: z.boolean() }).optional(),
);

export type AnswerResponseT = z.infer<typeof AnswerResponse>;
