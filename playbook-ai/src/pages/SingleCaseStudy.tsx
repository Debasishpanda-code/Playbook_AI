import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterBlock from '../components/NewsletterBlock';

const SingleCaseStudy = () => {
    const { slug } = useParams();
    console.log(slug); // Silence unused variable warning

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            {/* Header */}
            <header className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
                <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
                    Fintech / Strategy
                </span>
                <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                    Stripe: The API Economy
                </h1>
                <p className="text-xl text-charcoal/60 font-light italic">
                    "The best products don't just solve a problem, they eliminate an entire class of problems."
                </p>
            </header>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                {/* Sidebar */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32">
                        <h4 className="font-serif text-lg mb-6">Table of Contents</h4>
                        <ul className="space-y-4 text-sm text-charcoal/60 border-l border-gray-200 pl-4">
                            <li className="text-charcoal font-medium border-l-2 border-charcoal -ml-[17px] pl-4">The Seven Lines of Code</li>
                            <li className="hover:text-gold cursor-pointer transition-colors">Developer Experience</li>
                            <li className="hover:text-gold cursor-pointer transition-colors">Collison's Bet</li>
                            <li className="hover:text-gold cursor-pointer transition-colors">The Platform Shift</li>
                        </ul>

                        <div className="mt-12 p-6 bg-gray-50 border border-gray-200">
                            <h5 className="font-serif text-md mb-2">Key Takeaway</h5>
                            <p className="text-xs text-charcoal/70 leading-relaxed">
                                Reduce friction to zero, and you capture the entire market.
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <article className="lg:col-span-7 prose prose-lg prose-headings:font-serif prose-p:font-light prose-p:leading-relaxed prose-a:text-gold hover:prose-a:text-charcoal">
                    <p className="lead text-2xl font-serif text-charcoal/80 mb-8">
                        <span className="text-6xl float-left mr-3 mt-[-10px] font-serif">I</span>n 2010, accepting payments on the internet was a nightmare. It required weeks of paperwork, fax machines, and legacy banking integrations. Then came Stripe.
                    </p>

                    <p>
                        Patrick and John Collison didn't just build a payment gateway; they built a developer tool. By treating payments as an abstraction layer, they allowed companies to integrate financial infrastructure with the same ease as adding a Google Analytics tag.
                    </p>

                    <h3>The Seven Lines of Code</h3>
                    <p>
                        The genius of Stripe wasn't in the banking partnerships (though those were hard), but in the API design. They compressed complexity into a simple copy-paste snippet.
                    </p>

                    <div className="bg-jet p-6 rounded-sm my-8 shadow-2xl overflow-x-auto">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <pre className="text-sm font-mono text-gray-300">
                            <code>
                                <span className="text-purple-400">const</span> stripe = <span className="text-blue-400">require</span>(<span className="text-green-400">'stripe'</span>)(<span className="text-green-400">'sk_test_...'</span>);{'\n\n'}
                                <span className="text-purple-400">const</span> charge = <span className="text-purple-400">await</span> stripe.charges.<span className="text-blue-400">create</span>({'{'}{'\n'}
                                {'  '}amount: <span className="text-orange-400">2000</span>,{'\n'}
                                {'  '}currency: <span className="text-green-400">'usd'</span>,{'\n'}
                                {'  '}source: <span className="text-green-400">'tok_mastercard'</span>,{'\n'}
                                {'  '}description: <span className="text-green-400">'Charge for jenny.rosen@example.com'</span>,{'\n'}
                                {'}'});
                            </code>
                        </pre>
                    </div>

                    <p>
                        This snippet changed the internet economy. It shifted the power dynamic from bankers to developers.
                    </p>

                    <blockquote className="border-l-4 border-gold pl-6 italic text-xl my-12 text-charcoal/80 bg-gold/5 py-4 pr-4">
                        "We think of Stripe as a GDP multiplier for the internet." — Patrick Collison
                    </blockquote>

                    <h3>The Platform Shift</h3>
                    <p>
                        Today, Stripe isn't just payments. It's Atlas (incorporation), Treasury (banking), and Capital (lending). They have effectively built a cloud-based financial operating system.
                    </p>
                </article>

                {/* Metadata Sidebar (Right) */}
                <aside className="hidden lg:block lg:col-span-2 text-xs text-charcoal/50">
                    <div className="mb-8">
                        <span className="uppercase tracking-widest block mb-2 font-bold text-charcoal">Published</span>
                        Nov 24, 2025
                    </div>
                    <div className="mb-8">
                        <span className="uppercase tracking-widest block mb-2 font-bold text-charcoal">Read Time</span>
                        12 Minutes
                    </div>
                    <div className="mb-8">
                        <span className="uppercase tracking-widest block mb-2 font-bold text-charcoal">Share</span>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:text-gold transition-colors">Twitter</a>
                            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-gold transition-colors">Email</a>
                        </div>
                    </div>
                </aside>
            </div>

            <NewsletterBlock />
            <Footer />
        </div>
    );
};

export default SingleCaseStudy;
