import { Lessons } from "@models/lessons";
import { createResponse } from "@models/response";
import { z } from "zod";

export const LessonsResponse = createResponse(z.array(Lessons));

export type LessonsResponseT = z.infer<typeof LessonsResponse>;
