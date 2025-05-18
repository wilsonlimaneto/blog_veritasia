export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
  image: string; // URL or path to image
  content: string; // Markdown content
  author: string;
};
