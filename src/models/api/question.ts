import { createResponse } from "@models/response";
import { z } from "zod";

export const QuestionResponse = createResponse(
  z.object({
    type: z.number().int().min(0),
    give: z.string(),
  }),
);

export type QuestionResponseT = z.infer<typeof QuestionResponse>;
