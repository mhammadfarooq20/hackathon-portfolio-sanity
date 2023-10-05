import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "hackathon-portfolio-sanity",
  title: "Hackathon Portfolio Sanity",

  projectId: "j8dmrwc7",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
