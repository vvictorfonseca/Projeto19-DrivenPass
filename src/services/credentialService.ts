import { Credentials } from "@prisma/client";

export type CreateCredentialsData = Omit<Credentials, "id">
