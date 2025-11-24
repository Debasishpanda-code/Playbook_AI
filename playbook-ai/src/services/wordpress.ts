export const WP_API_URL = 'https://techcrunch.com/wp-json/wp/v2'; // Using TechCrunch as a demo source

export interface WPPost {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    jetpack_featured_media_url?: string; // TechCrunch specific, standard WP might use _embedded
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
        }>;
    };
}

export const getPosts = async (): Promise<WPPost[]> => {
    try {
        const response = await fetch(`${WP_API_URL}/posts?per_page=6&_embed`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        return await response.json();
    } catch (error) {
        console.error('Error fetching WordPress posts:', error);
        return [];
    }
};

export const getPostBySlug = async (slug: string): Promise<WPPost | null> => {
    try {
        const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
        if (!response.ok) throw new Error('Failed to fetch post');
        const posts = await response.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error('Error fetching WordPress post:', error);
        return null;
    }
};

export const getPageBySlug = async (slug: string): Promise<WPPost | null> => {
    try {
        const response = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`);
        if (!response.ok) throw new Error('Failed to fetch page');
        const pages = await response.json();
        return pages.length > 0 ? pages[0] : null;
    } catch (error) {
        console.error('Error fetching WordPress page:', error);
        return null;
    }
};
