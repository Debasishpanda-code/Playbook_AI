import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterBlock from '../components/NewsletterBlock';

const FounderStories = () => {
    const stories = [
        {
            name: "Brian Chesky",
            company: "Airbnb",
            quote: "Do things that don't scale.",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1000",
            theme: "Design Thinking"
        },
        {
            name: "Melanie Perkins",
            company: "Canva",
            quote: "Solve a problem you have yourself.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
            theme: "Democratization"
        },
        {
            name: "Tobias Lütke",
            company: "Shopify",
            quote: "Arm the rebels.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000",
            theme: "Platform Power"
        }
    ];

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
                <h1 className="font-serif text-5xl md:text-6xl mb-6">Founder Stories</h1>
                <p className="text-charcoal/60 text-lg max-w-2xl mx-auto mb-20 font-light">
                    The personal journeys behind the unicorns. Lessons in resilience, vision, and execution.
                </p>

                <div className="space-y-24">
                    {stories.map((story, index) => (
                        <div key={story.name} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full relative group cursor-pointer overflow-hidden">
                                <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 border border-charcoal/10 pointer-events-none" />
                            </div>

                            <div className="flex-1 text-left">
                                <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
                                    {story.theme}
                                </span>
                                <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                                    "{story.quote}"
                                </h2>
                                <div className="border-l-2 border-charcoal pl-6">
                                    <h3 className="font-bold text-lg">{story.name}</h3>
                                    <p className="text-charcoal/60">Founder, {story.company}</p>
                                </div>
                                <button className="mt-8 text-xs font-bold uppercase tracking-widest border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
                                    Read Story
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NewsletterBlock />
            <Footer />
        </div>
    );
};

export default FounderStories;
