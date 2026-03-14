import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '08c4d3650bc5757a6a2cf05a9951fcc7b040287f', queries,  });
export default client;
  