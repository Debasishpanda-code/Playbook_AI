import { useState } from 'react';

const NewsletterBlock = () => {
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

  return (
    <section className="bg-jet text-cream py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">
          Weekly Intelligence
        </span>
        <h2 className="font-serif text-4xl md:text-5xl mb-6">
          Join the Elite.
        </h2>
        <p className="text-cream/60 text-lg font-light mb-10 max-w-2xl mx-auto">
          Get the same strategic breakdowns read by founders at Stripe, Airbnb, and VCs at Sequoia. No fluff, just signal.
        </p>

        {status === 'success' ? (
          <div className="p-4 bg-green-900/20 border border-green-500/30 text-green-400 rounded-sm max-w-md mx-auto">
            Welcome to the inner circle. Check your inbox.
          </div>
        ) : (
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent border-b border-cream/20 py-3 px-2 text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors font-light"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary border-cream text-cream hover:bg-cream hover:text-jet mt-4 md:mt-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-xs mt-4">Something went wrong. Please try again.</p>
        )}

        <p className="text-cream/30 text-xs mt-6">
          Join 45,000+ subscribers. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterBlock;
