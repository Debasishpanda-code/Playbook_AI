/**
 * WordPress REST API Service
 * 
 * This service handles all communication with the WordPress REST API.
 * It allows the React app to fetch blog posts, pages, and other content
 * from a WordPress site without embedding WordPress itself.
 * 
 * This is a "Headless CMS" approach - WordPress serves as the content backend,
 * while React handles the presentation layer.
 */

// Base URL for WordPress REST API
// Currently pointing to TechCrunch as a demo. Replace with your own WordPress site URL.
// Format: https://your-site.com/wp-json/wp/v2
export const WP_API_URL = 'https://techcrunch.com/wp-json/wp/v2';

/**
 * WordPress Post/Page Data Structure
 * 
 * This interface defines the shape of data we receive from WordPress.
 * WordPress returns HTML-rendered content, which we'll display using dangerouslySetInnerHTML.
 * 
 * The _embedded field contains additional data like featured images when we use the ?_embed parameter.
 */
export interface WPPost {
    id: number;                              // Unique post ID
    date: string;                            // Publication date (ISO 8601 format)
    slug: string;                            // URL-friendly identifier (e.g., "stripe-api-strategy")
    title: { rendered: string };             // Post title (HTML-rendered)
    excerpt: { rendered: string };           // Short description (HTML-rendered)
    content: { rendered: string };           // Full article content (HTML-rendered)
    jetpack_featured_media_url?: string;     // Featured image URL (TechCrunch specific)
    _embedded?: {                            // Embedded data (when using ?_embed parameter)
        'wp:featuredmedia'?: Array<{
            source_url: string;              // Standard WordPress featured image URL
        }>;
    };
}

/**
 * Fetch Recent Posts
 * 
 * Retrieves the 6 most recent blog posts from WordPress.
 * Used on the Home page (top 3) and Case Studies page (all 6).
 * 
 * API Parameters:
 * - per_page=6: Limits results to 6 posts
 * - _embed: Includes embedded data like featured images
 * 
 * @returns Array of WPPost objects, or empty array if fetch fails
 */
export const getPosts = async (): Promise<WPPost[]> => {
    try {
        const response = await fetch(`${WP_API_URL}/posts?per_page=6&_embed`);

        // Check if the HTTP request was successful
        if (!response.ok) throw new Error('Failed to fetch posts');

        // Parse JSON response and return
        return await response.json();
    } catch (error) {
        // Log error for debugging, but don't crash the app
        console.error('Error fetching WordPress posts:', error);

        // Return empty array so the UI can handle the empty state gracefully
        return [];
    }
};

/**
 * Fetch Single Post by Slug
 * 
 * Retrieves a specific blog post using its URL slug.
 * Used on the Single Case Study page to display the full article.
 * 
 * The slug is the URL-friendly identifier (e.g., "stripe-api-strategy").
 * WordPress API returns an array even for single results, so we take the first item.
 * 
 * @param slug - The URL slug of the post (from the route parameter)
 * @returns The post object, or null if not found
 */
export const getPostBySlug = async (slug: string): Promise<WPPost | null> => {
    try {
        const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);

        if (!response.ok) throw new Error('Failed to fetch post');

        const posts = await response.json();

        // WordPress returns an array, even for a single slug query
        // Return the first post if found, otherwise null
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error('Error fetching WordPress post:', error);
        return null; // Return null to indicate post not found
    }
};

/**
 * Fetch Single Page by Slug
 * 
 * Retrieves a specific WordPress "Page" (not a "Post") using its URL slug.
 * Used for static pages like About, Contact, Privacy Policy, and Terms of Service.
 * 
 * WordPress distinguishes between "Posts" (blog articles) and "Pages" (static content).
 * This function fetches Pages, which typically don't have publish dates or categories.
 * 
 * @param slug - The URL slug of the page (e.g., "privacy-policy", "about")
 * @returns The page object, or null if not found
 */
export const getPageBySlug = async (slug: string): Promise<WPPost | null> => {
    try {
        // Note: /pages endpoint instead of /posts
        const response = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`);

        if (!response.ok) throw new Error('Failed to fetch page');

        const pages = await response.json();

        // Return the first page if found, otherwise null
        return pages.length > 0 ? pages[0] : null;
    } catch (error) {
        console.error('Error fetching WordPress page:', error);
        return null; // Return null so the UI can show a fallback
    }
};
