import { createResponse } from "@models/response";
import { z } from "zod";

export const AnswerResponse = createResponse(z.boolean());

export type AnswerResponseT = z.infer<typeof AnswerResponse>;
