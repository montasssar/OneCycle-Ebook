import fs from "fs";
import path from "path";
import matter from "gray-matter";

const poemsDirectory = path.join(process.cwd(), "content/poems");

export interface Poem {
    slug: string;
    title: string;
    order: number;
    content: string;
}

export type PoemWithNeighbors = {
    poem: Poem;
    prev: Poem | null;
    next: Poem | null;
};

export function getAllPoems(): Poem[] {
    // Ensure directory exists
    if (!fs.existsSync(poemsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(poemsDirectory);
    const poems = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(poemsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                order: data.order,
                content: content,
            };
        })
        // Sort poems by order
        .sort((a, b) => (a.order > b.order ? 1 : -1));

    return poems;
}

export function getPoemWithNeighbors(slug: string): PoemWithNeighbors | null {
    const allPoems = getAllPoems();
    const index = allPoems.findIndex((p) => p.slug === slug);

    if (index === -1) return null;

    return {
        poem: allPoems[index],
        prev: index > 0 ? allPoems[index - 1] : null,
        next: index < allPoems.length - 1 ? allPoems[index + 1] : null,
    };
}

export function getPoemBySlug(slug: string): Poem | null {
    const all = getAllPoems();
    return all.find((p) => p.slug === slug) || null;
}
