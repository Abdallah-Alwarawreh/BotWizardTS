require("dotenv").config();
import { ExtendedClient } from "./Structures/Client";

export const client = new ExtendedClient();

client.Start();