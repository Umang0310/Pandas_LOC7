import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="bg-orange-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with India Tourism
          </h2>
          <p className="text-lg text-white opacity-90 mb-8">
            Subscribe to our newsletter for travel updates, exclusive offers, and cultural insights
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-70"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-4 text-white">Thank you for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-200">An error occurred. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;