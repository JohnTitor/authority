export interface ZennArticle {
	id: number;
	title: string;
	slug: string;
	published_at: string;
	path: string;
	emoji: string;
	liked_count: number;
	bookmarked_count: number;
	body_letters_count: number;
	user: {
		username: string;
		name: string;
	};
}

export interface ZennApiResponse {
	articles: ZennArticle[];
}
