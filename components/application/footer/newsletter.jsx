"use client";
import { Send, Gift, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-rose-200">
      <div className="max-w-4xl mx-auto text-center">
        {isSubscribed ? (
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-md mx-auto">
            <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're In!</h3>
            <p className="text-gray-600 mb-6">
              Thanks for joining our beauty community. Check your inbox for your <strong>15% off coupon</strong> - it's our gift to you!
            </p>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="text-sm text-rose-600 font-medium hover:underline"
            >
              Want to sign up again?
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <div className="bg-pink-100 p-3 rounded-full">
                <Gift className="w-8 h-8 text-pink-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Unlock Your Beauty Rewards
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our inner circle and get <span className="font-semibold text-rose-600">15% off your first order</span> plus exclusive access to:
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-sm">
              <li className="flex items-center justify-center gap-2">
                <span className="bg-white p-1 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-pink-600" />
                </span>
                New product launches
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="bg-white p-1 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-pink-600" />
                </span>
                Members-only deals
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="bg-white p-1 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-pink-600" />
                </span>
                Expert skincare tips
              </li>
            </ul>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your best email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Claim Your Discount
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Newsletter;