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

export const Lessons = z
  .object({
    lesson_id: z.string().uuid(),
    lesson_course: z.string().uuid(),
    lesson_index: z.number().int().min(0),
    lesson_title: z.string(),
  })
  .strict();

export type LessonsT = z.infer<typeof Lessons>;

function createRequestSchema<T extends z.ZodTypeAny>(schema: T) {
  return z.object({
    success: z.boolean(),
    data: schema.optional(),
    code: z.number().int(), // TODO: enum
    codeName: z.string(),
    error: z.record(z.string(), z.any()).optional(),
  });
}

export const CoursesRequest = createRequestSchema(
  z.object({ courses: z.array(Courses) }).optional(),
);

export type CoursesRequestT = z.infer<typeof CoursesRequest>;

export const LessonsRequest = createRequestSchema(
  z.object({ lessons: z.array(Lessons) }).optional(),
);

export type LessonsRequestT = z.infer<typeof LessonsRequest>;
