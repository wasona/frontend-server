import { z } from "zod";

export const Courses = z
  .object({
    course_id: z.string().uuid(),
    course_source_language: z.string(),
    course_target_language: z.string(),
    course_title: z.string(),
  })
  .strict();

export type CoursesT = z.infer<typeof Courses>;

export const CoursesRequest = z.object({
  success: z.boolean(),
  data: z.record(z.string(), z.array(Courses)).optional(),
  code: z.number().int(), // TODO: enum
  codeName: z.string(),
  error: z.record(z.string(), z.any()).optional(),
});

export type CoursesRequestT = z.infer<typeof CoursesRequest>;
