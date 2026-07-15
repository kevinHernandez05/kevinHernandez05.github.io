import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const POSTS_DATA_SOURCE_ID = process.env.NOTION_POSTS_DATA_SOURCE_ID;