import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JCurve from '../components/JCurve';
import Flywheel from '../components/Flywheel';
import CaseStudyCard from '../components/CaseStudyCard';
import NewsletterBlock from '../components/NewsletterBlock';
import { ArrowDown } from 'lucide-react';

const Home = () => {
    const recentStudies = [
        {
            category: 'Fintech',
            title: 'Stripe: The API Economy',
            description: 'How Stripe turned seven lines of code into a $50B ecosystem lock-in.',
            slug: 'stripe-api-strategy'
        },
        {
            category: 'SaaS',
            title: 'Figma: Multiplayer by Default',
            description: 'Deconstructing the browser-first architecture that killed Sketch.',
            slug: 'figma-multiplayer'
        },
        {
            category: 'AI',
            title: 'Midjourney: Zero to One',
            description: 'Bootstrapping a community-led giant without a marketing budget.',
            slug: 'midjourney-growth'
        }
    ];

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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recentStudies.map((study) => (
                            <CaseStudyCard key={study.slug} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            <NewsletterBlock />
            <Footer />
        </div>
    );
};

export default Home;
