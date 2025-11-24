import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:3001/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error('Failed to subscribe');

            setStatus('success');
            setEmail('');
        } catch (error) {
            setStatus('error');
        }
    };

    const issues = [
        { number: 142, title: "Decoding the DNA of Success", date: "Nov 24, 2025" },
        { number: 141, title: "The Fall of the Unicorn", date: "Nov 17, 2025" },
        { number: 140, title: "AI: The New Electricity", date: "Nov 10, 2025" },
        { number: 139, title: "Platform vs. Product", date: "Nov 03, 2025" },
    ];

    return (
        <div className="min-h-screen bg-cream">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
                <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
                    Weekly Intelligence
                </span>
                <h1 className="font-serif text-5xl md:text-7xl mb-8">
                    The Playbook.
                </h1>
                <p className="text-xl text-charcoal/60 font-light mb-12 leading-relaxed">
                    Join 45,000+ founders, investors, and operators who read our weekly deep dives into the business of tomorrow.
                </p>

                {status === 'success' ? (
                    <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-sm max-w-md mx-auto mb-20">
                        <h3 className="font-serif text-xl mb-2">You're in.</h3>
                        <p className="text-sm">Welcome to the inner circle. Check your inbox for the latest issue.</p>
                    </div>
                ) : (
                    <form className="max-w-md mx-auto mb-20" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-white border border-gray-200 py-4 px-6 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold transition-colors font-light"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="btn-primary w-full py-4 bg-charcoal text-cream hover:bg-gold hover:border-gold disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Joining...' : 'Subscribe Free'}
                            </button>
                        </div>
                        {status === 'error' && (
                            <p className="text-red-500 text-xs mt-4">Something went wrong. Please try again.</p>
                        )}
                        <p className="text-xs text-charcoal/40 mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </form>
                )}

                <div className="text-left border-t border-gray-200 pt-12">
                    <h3 className="font-serif text-2xl mb-8">Recent Issues</h3>
                    <div className="space-y-6">
                        {issues.map((issue) => (
                            <div key={issue.number} className="group flex items-baseline justify-between border-b border-gray-100 pb-6 cursor-pointer">
                                <div>
                                    <span className="text-xs font-bold text-gold mr-4">#{issue.number}</span>
                                    <span className="font-serif text-lg group-hover:text-gold transition-colors">{issue.title}</span>
                                </div>
                                <span className="text-xs text-charcoal/40 uppercase tracking-widest hidden md:block">{issue.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Newsletter;
