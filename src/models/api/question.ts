import { createResponse } from "@models/response";
import { z } from "zod";

export const QuestionResponse = createResponse(
  z
    .object({
      task: z.object({
        type: z.number().int().min(0),
        give: z.string(),
      }),
    })
    .optional(),
);

export type QuestionResponseT = z.infer<typeof QuestionResponse>;
