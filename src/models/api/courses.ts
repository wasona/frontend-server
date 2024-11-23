import { Courses } from "@models/courses";
import { createResponse } from "@models/response";
import { z } from "zod";

export const CoursesResponse = createResponse(
  z.object({ courses: z.array(Courses) }).optional(),
);

export type CoursesResponseT = z.infer<typeof CoursesResponse>;
