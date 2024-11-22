import { Courses } from "@models/courses";
import { createResponse } from "@models/response";
import { z } from "zod";

export const CoursesResponse = createResponse(z.array(Courses));

export type CoursesResponseT = z.infer<typeof CoursesResponse>;
