/**
 * Home Page Component
 * 
 * The landing page for PlaybookAI featuring:
 * - Hero section with headline
 * - Manifesto/mission statement
 * - Interactive mental model demonstrations (J-Curve, Flywheel)
 * - Recent analysis section (3 latest blog posts fetched from WordPress)
 * - Newsletter signup block
 */

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JCurve from '../components/JCurve';
import Flywheel from '../components/Flywheel';
import CaseStudyCard from '../components/CaseStudyCard';
import NewsletterBlock from '../components/NewsletterBlock';
import { ArrowDown } from 'lucide-react';
import { getPosts, type WPPost } from '../services/wordpress';

const Home = () => {
    // State to store the 3 most recent blog posts
    const [recentStudies, setRecentStudies] = useState<any[]>([]);

    // Loading state to show spinner while fetching data
    const [loading, setLoading] = useState(true);

    /**
     * Fetch and Process Recent Posts
     * 
     * This effect runs once when the component mounts.
     * It fetches posts from WordPress and transforms them for display.
     * 
     * Data Transformation Steps:
     * 1. Fetch 6 posts from WordPress API
     * 2. Take only the first 3 (for the home page)
     * 3. Strip HTML tags from title and excerpt
     * 4. Truncate description to 100 characters
     * 5. Map to a simple object structure for CaseStudyCard
     */
    useEffect(() => {
        const fetchPosts = async () => {
            // Fetch posts from WordPress
            const data = await getPosts();

            // Transform WordPress data to match our UI needs
            // Take only the first 3 posts for the home page
            const mapped = data.slice(0, 3).map(post => ({
                category: 'Strategy',  // Default category for now

                // Remove HTML tags from title using regex
                // WordPress returns rendered HTML, we want plain text
                title: post.title.rendered.replace(/<[^>]*>?/gm, ''),

                // Remove HTML tags and truncate to 100 chars + ellipsis
                description: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').slice(0, 100) + '...',

                // Slug is URL-safe identifier (e.g., "stripe-api-strategy")
                slug: post.slug
            }));

            // Update state with transformed data
            setRecentStudies(mapped);

            // Hide loading spinner
            setLoading(false);
        };

        fetchPosts();
    }, []); // Empty dependency array = run once on mount

    return (
        <div className="min-h-screen bg-cream selection:bg-gold/30">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center z-10">
                    <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block animate-fade-in">
                        Issue #142
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-charcoal">
                        Decoding the <br />
                        <span className="italic text-charcoal/90">DNA of Success.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                        We deconstruct the business models, strategies, and mental models of the world's most innovative companies.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <button className="btn-primary">
                            Read Latest Analysis
                        </button>
                        <span className="text-[10px] text-charcoal/40 uppercase tracking-widest mt-8">
                            Scroll to Explore
                        </span>
                        <ArrowDown className="text-charcoal/20 animate-bounce mt-2" size={20} />
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                    <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Manifesto Section */}
            <section className="py-24 px-6 border-t border-gray-200">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl mb-8">Navigating the Noise</h2>
                    <p className="text-xl md:text-2xl font-serif leading-relaxed text-charcoal/80">
                        "In a world drowning in content, <span className="italic text-gold">insight</span> is the only luxury. We don't chase news cycles. We chase first principles."
                    </p>
                </div>
            </section>

            {/* Interactive Components Grid */}
            <section className="py-24 px-6 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">
                            Mental Model 01
                        </span>
                        <h3 className="font-serif text-3xl mb-4">The J-Curve</h3>
                        <p className="text-charcoal/70 mb-8 max-w-md">
                            Understanding the difference between linear growth and exponential compounding is the key to venture scale.
                        </p>
                        <JCurve />
                    </div>
                    <div className="lg:pl-12">
                        <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">
                            Mental Model 02
                        </span>
                        <h3 className="font-serif text-3xl mb-4">The Flywheel</h3>
                        <p className="text-charcoal/70 mb-8 max-w-md">
                            Momentum is difficult to build but impossible to stop. How the best companies engineer inevitability.
                        </p>
                        <Flywheel />
                    </div>
                </div>
            </section>

            {/* Recent Analysis */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="font-serif text-4xl">Recent Analysis</h2>
                        <a href="/case-studies" className="text-xs font-bold tracking-widest uppercase border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
                            View All
                        </a>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {recentStudies.map((study) => (
                                <CaseStudyCard key={study.slug} {...study} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <NewsletterBlock />
            <Footer />
        </div>
    );
};

export default Home;
