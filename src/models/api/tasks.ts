import { createResponse } from "@models/response";
import { z } from "zod";

export const TasksResponse = createResponse(
  z.object({ tasks: z.array(z.string().uuid()) }).optional(),
);

export type TasksResponseT = z.infer<typeof TasksResponse>;
