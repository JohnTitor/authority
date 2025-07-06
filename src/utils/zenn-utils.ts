import type { ZennApiResponse, ZennArticle } from "../types/zenn";

export async function getZennArticles(): Promise<ZennArticle[]> {
	// Import static JSON directly instead of using Astro's import.meta.glob or fetch
	const data: ZennApiResponse = await import("../data/zenn-articles.json");
	// Sort by date (newest first)
	return data.articles.sort(
		(a: ZennArticle, b: ZennArticle) =>
			new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
	);
}

// Function to convert to ArchivePanel format (expandable as needed)
export function zennToArchivePost(zenn: ZennArticle): {
	id: string;
	data: {
		title: string;
		tags: string[];
		category: string;
		published: Date;
		zennPath: string;
		emoji: string;
		liked: number;
		bookmarked: number;
	};
} {
	return {
		id: `zenn-${zenn.id}`,
		data: {
			title: zenn.title,
			tags: [] as string[],
			category: "Zenn",
			published: new Date(zenn.published_at),
			zennPath: zenn.path,
			emoji: zenn.emoji,
			liked: zenn.liked_count,
			bookmarked: zenn.bookmarked_count,
		},
	};
}
