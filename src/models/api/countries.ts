import { Countries } from "@models/countries";
import { createResponse } from "@models/response";
import { z } from "zod";

export const CountriesResponse = createResponse(z.array(Countries));

export type CountriesResponseT = z.infer<typeof CountriesResponse>;
