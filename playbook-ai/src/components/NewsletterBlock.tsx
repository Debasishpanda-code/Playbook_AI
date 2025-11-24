/**
 * Newsletter Subscription Block Component
 * 
 * A dark-themed newsletter signup section.
 * Now integrated with WordPress instead of a separate backend server.
 * 
 * WordPress Integration Options:
 * 1. Contact Form 7 plugin (recommended)
 * 2. WPForms plugin
 * 3. Custom WordPress REST API endpoint
 * 
 * Current Implementation: Uses WordPress Contact Form 7
 */

import { useState } from 'react';

const NewsletterBlock = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  /**
   * Handle Newsletter Subscription
   * 
   * Submits email to WordPress using Contact Form 7 REST API
   * 
   * Setup Required in WordPress:
   * 1. Install "Contact Form 7" plugin
   * 2. Create a form with just an email field
   * 3. Get the form ID (e.g., 123)
   * 4. Replace FORM_ID below with your actual form ID
   * 
   * Alternative: You can also use a WordPress plugin like "Newsletter" or "Mailchimp for WordPress"
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Option 1: Using Contact Form 7 (recommended)
      // Replace 'YOUR_WORDPRESS_URL' with your actual WordPress site URL
      // Replace 'FORM_ID' with your Contact Form 7 form ID
      const WP_URL = 'https://techcrunch.com'; // Change to your WordPress URL
      const FORM_ID = '123'; // Change to your Contact Form 7 ID

      const formData = new FormData();
      formData.append('your-email', email); // 'your-email' is the field name in Contact Form 7

      const response = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Subscription failed');

      setStatus('success');
      setEmail(''); // Clear the input
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-jet py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
          The Operator's Edge
        </h2>
        <p className="text-cream/60 text-lg mb-12 max-w-2xl mx-auto">
          Join 10,000+ founders, operators, and investors getting weekly insights on strategy, mental models, and execution.
        </p>

        {status === 'success' ? (
          <div className="text-gold text-lg">
            ✓ Successfully subscribed! Check your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="flex-1 px-6 py-4 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-gold text-jet font-bold uppercase tracking-widest text-xs hover:bg-cream transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 mt-4 text-sm">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-cream/40 text-xs mt-6 uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterBlock;
