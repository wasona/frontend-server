import { Lessons } from "@models/lessons";
import { createResponse } from "@models/response";
import { z } from "zod";

export const LessonsResponse = createResponse(
  z.object({ lessons: z.array(Lessons) }).optional(),
);

export type LessonsResponseT = z.infer<typeof LessonsResponse>;
