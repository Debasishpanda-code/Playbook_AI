import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterBlock from '../components/NewsletterBlock';
import { getPostBySlug, type WPPost } from '../services/wordpress';

const SingleCaseStudy = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<WPPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchPost = async () => {
            if (slug) {
                const data = await getPostBySlug(slug);
                setPost(data);
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-cream">
                <Navbar />
                <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-cream">
                <Navbar />
                <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-4xl mb-6">Case Study Not Found</h1>
                    <p className="text-charcoal/60">The case study you are looking for does not exist.</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            {/* Header */}
            <header className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
                <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
                    Strategy
                </span>
                <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <div className="text-xl text-charcoal/60 font-light italic" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </header>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                {/* Sidebar */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32">
                        <div className="mt-12 p-6 bg-gray-50 border border-gray-200">
                            <h5 className="font-serif text-md mb-2">Share</h5>
                            <div className="flex flex-col gap-2 text-xs text-charcoal/60">
                                <a href="#" className="hover:text-gold transition-colors">Twitter</a>
                                <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-gold transition-colors">Email</a>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <article className="lg:col-span-7 prose prose-lg prose-headings:font-serif prose-p:font-light prose-p:leading-relaxed prose-a:text-gold hover:prose-a:text-charcoal">
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </article>

                {/* Metadata Sidebar (Right) */}
                <aside className="hidden lg:block lg:col-span-2 text-xs text-charcoal/50">
                    <div className="mb-8">
                        <span className="uppercase tracking-widest block mb-2 font-bold text-charcoal">Published</span>
                        {new Date(post.date).toLocaleDateString()}
                    </div>
                </aside>
            </div>

            <NewsletterBlock />
            <Footer />
        </div>
    );
};

export default SingleCaseStudy;
