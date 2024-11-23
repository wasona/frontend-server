import { createResponse } from "@models/response";
import { z } from "zod";

export const TasksResponse = createResponse(z.array(z.string().uuid()));

export type TasksResponseT = z.infer<typeof TasksResponse>;
