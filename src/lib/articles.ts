import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Article } from '@/types';

const articlesDirectory = path.join(process.cwd(), 'src/articles');

export function getArticleSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled Article',
      description: data.description || '',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      image: data.image || `https://placehold.co/600x400.png`,
      content,
    } as Article;
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== null)
    // Sort articles by date in descending order
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articles;
}
