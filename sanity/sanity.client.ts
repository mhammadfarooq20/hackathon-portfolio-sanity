import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "j8dmrwc7",
  dataset: "production",
  apiVersion: "2023-10-08",
  useCdn: false,
};

const client = createClient(config);

export default client;