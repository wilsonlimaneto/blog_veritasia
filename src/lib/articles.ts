import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Article } from '@/types';

const articlesDirectory = path.join(process.cwd(), 'src/articles');

export function getArticleSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory);
  // Filter for markdown files first, then map to slugs
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    let imageUrl: string;
    const rawImage = data.image;

    if (rawImage && typeof rawImage === 'string' && rawImage.trim() !== '') {
      if (rawImage.startsWith('http://') || rawImage.startsWith('https://')) {
        imageUrl = rawImage; // Use external URL directly
      } else {
        // Assumes local image filename, prepend path
        // Ensure no leading slash from rawImage if it's just a filename
        const imageName = rawImage.startsWith('/') ? rawImage.substring(1) : rawImage;
        imageUrl = `/images/articles/${imageName}`;
      }
    } else {
      imageUrl = 'https://placehold.co/1200x630.png'; // Default placeholder
    }

    return {
      slug,
      title: data.title || 'Untitled Article',
      description: data.description || '',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      image: imageUrl,
      author: data.author || 'Blog Author',
      content,
    } as Article;
  } catch (error) {
    // Check if the error is because the file doesn't exist or another error
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      // It's fine if a slug doesn't correspond to a file (e.g., during routing for non-article paths)
      // console.warn(`Article not found for slug: ${slug}`); // Optional: for debugging
    } else {
      // Log other types of errors
      console.error(`Error reading article ${slug}:`, error);
    }
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
