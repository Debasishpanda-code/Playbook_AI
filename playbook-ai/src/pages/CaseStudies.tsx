import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CaseStudyCard from '../components/CaseStudyCard';
import NewsletterBlock from '../components/NewsletterBlock';
import { clsx } from 'clsx';

const CaseStudies = () => {
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'SaaS', 'Fintech', 'AI', 'Marketplace'];

    const allStudies = [
        { category: 'Fintech', title: 'Stripe: The API Economy', description: 'How Stripe turned seven lines of code into a $50B ecosystem lock-in.', slug: 'stripe-api-strategy' },
        { category: 'SaaS', title: 'Figma: Multiplayer by Default', description: 'Deconstructing the browser-first architecture that killed Sketch.', slug: 'figma-multiplayer' },
        { category: 'AI', title: 'Midjourney: Zero to One', description: 'Bootstrapping a community-led giant without a marketing budget.', slug: 'midjourney-growth' },
        { category: 'Marketplace', title: 'Airbnb: Trust Mechanics', description: 'Designing systems that allow strangers to sleep in each others homes.', slug: 'airbnb-trust' },
        { category: 'SaaS', title: 'Notion: The Lego Block Era', description: 'Why flexible software is winning over rigid point solutions.', slug: 'notion-growth' },
        { category: 'AI', title: 'OpenAI: Capped Profit', description: 'The strange corporate structure behind the worlds most important AI lab.', slug: 'openai-structure' },
        { category: 'Fintech', title: 'Nubank: The Purple Ocean', description: 'Finding blue oceans in the most competitive market in the world.', slug: 'nubank-strategy' },
    ];

    const filteredStudies = filter === 'All'
        ? allStudies
        : allStudies.filter(study => study.category === filter);

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="font-serif text-5xl md:text-6xl mb-6">Case Studies</h1>
                <p className="text-charcoal/60 text-lg max-w-2xl mb-12 font-light">
                    Deep dives into the strategies, mechanics, and decisions that define modern business.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-200 pb-4">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={clsx(
                                "text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all",
                                filter === f
                                    ? "bg-charcoal text-cream"
                                    : "bg-transparent text-charcoal/60 hover:bg-gray-100"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredStudies.map((study, index) => (
                        <React.Fragment key={study.slug}>
                            <CaseStudyCard {...study} />

                            {/* Ad Slot Simulation every 3rd card */}
                            {(index + 1) % 3 === 0 && (
                                <div className="bg-gray-50 border border-gray-200 p-8 flex flex-col justify-center items-center text-center">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Sponsored</span>
                                    <h4 className="font-serif text-xl mb-2">Linear</h4>
                                    <p className="text-sm text-charcoal/60 mb-6">The issue tracking tool you'll actually enjoy using.</p>
                                    <button className="text-xs font-bold uppercase tracking-widest border-b border-charcoal pb-1">Try Linear</button>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <NewsletterBlock />
            <Footer />
        </div>
    );
};

export default CaseStudies;
