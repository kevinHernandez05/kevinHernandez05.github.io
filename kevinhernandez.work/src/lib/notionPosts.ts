import { notion, POSTS_DATA_SOURCE_ID } from "./notion";

export type BlogPostPreview = {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  tags: string[];
  language: string;
  href: string;
};

const BLOG_URL =
  process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.kevinhernandez.work";

export async function getLatestEnglishPosts(): Promise<BlogPostPreview[]> {
  if (!POSTS_DATA_SOURCE_ID) {
    console.warn("Missing NOTION_POSTS_DATA_SOURCE_ID");
    return [];
  }

  const response = await notion.dataSources.query({
    data_source_id: POSTS_DATA_SOURCE_ID,
    page_size: 3,
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "Published",
          },
        },
        {
          property: "Language",
          select: {
            equals: "en",
          },
        },
      ],
    },
    sorts: [
      {
        property: "PublishedAt",
        direction: "descending",
      },
    ],
  });

  return response.results.map((page) => mapPageToPostPreview(page));
}

function mapPageToPostPreview(page: any): BlogPostPreview {
  const properties = page.properties ?? {};

  const title = getTitle(properties.Title);
  const slug = getRichText(properties.Slug);
  const summary = getRichText(properties.Summary);
  const publishedAt = getDate(properties.PublishedAt);
  const tags = getMultiSelect(properties.Tags);
  const language = getSelect(properties.Language);

  return {
    title,
    slug,
    summary,
    publishedAt,
    tags,
    language,
    href: `${BLOG_URL}/${slug}`,
  };
}

function getTitle(property: any) {
  return property?.title?.map((item: any) => item.plain_text).join("") ?? "";
}

function getRichText(property: any) {
  return property?.rich_text?.map((item: any) => item.plain_text).join("") ?? "";
}

function getDate(property: any) {
  return property?.date?.start ?? "";
}

function getSelect(property: any) {
  return property?.select?.name ?? "";
}

function getMultiSelect(property: any) {
  return property?.multi_select?.map((item: any) => item.name) ?? [];
}