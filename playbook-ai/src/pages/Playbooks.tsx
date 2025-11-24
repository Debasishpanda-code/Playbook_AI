import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterBlock from '../components/NewsletterBlock';
import { Network, Zap, Layers, Box, Target, Repeat } from 'lucide-react';

const Playbooks = () => {
    const models = [
        {
            icon: <Network size={48} />,
            title: "Network Effects",
            description: "The value of a product or service increases as more people use it.",
            slug: "network-effects"
        },
        {
            icon: <Zap size={48} />,
            title: "First Principles",
            description: "Boiling things down to their fundamental truths and reasoning up from there.",
            slug: "first-principles"
        },
        {
            icon: <Layers size={48} />,
            title: "Scale Economies",
            description: "Cost per unit decreases as volume increases, creating a moat.",
            slug: "scale-economies"
        },
        {
            icon: <Box size={48} />,
            title: "Bundling/Unbundling",
            description: "There are only two ways to make money in business: bundling and unbundling.",
            slug: "bundling"
        },
        {
            icon: <Target size={48} />,
            title: "Product-Market Fit",
            description: "Being in a good market with a product that can satisfy that market.",
            slug: "pmf"
        },
        {
            icon: <Repeat size={48} />,
            title: "The Flywheel",
            description: "A self-reinforcing loop that builds momentum over time.",
            slug: "flywheel"
        }
    ];

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="font-serif text-5xl md:text-6xl mb-6">Playbooks</h1>
                <p className="text-charcoal/60 text-lg max-w-2xl mb-20 font-light">
                    A library of mental models and frameworks for decision making.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {models.map((model) => (
                        <div key={model.slug} className="group p-10 bg-white border border-gray-200 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 cursor-pointer">
                            <div className="text-charcoal/40 mb-8 group-hover:text-gold transition-colors duration-300">
                                {model.icon}
                            </div>
                            <h3 className="font-serif text-2xl mb-4 group-hover:text-charcoal transition-colors">
                                {model.title}
                            </h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed font-light">
                                {model.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <NewsletterBlock />
            <Footer />
        </div>
    );
};

export default Playbooks;
