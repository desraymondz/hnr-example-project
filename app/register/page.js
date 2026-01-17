'use client';

import { useState, useEffect } from 'react';

export default function Register() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dietary: '',
    accessibility: ''
  });
  const [agreed, setAgreed] = useState(false);

  const ticketTiers = [
    {
      id: 'early-bird',
      name: 'Early Bird',
      price: 'XX',
      originalPrice: null,
      description: 'Perfect for early adopters',
      features: [
        'Full event access',
        'All keynote sessions',
        'Workshop participation',
        'Networking sessions',
        'Refreshments included',
        'Event materials & swag bag'
      ],
      availability: 'Limited - Ends Nov 15',
      recommended: false
    },
    {
      id: 'general',
      name: 'General Admission',
      price: 'XX',
      description: 'Standard entry to all events',
      features: [
        'Full event access',
        'All keynote sessions',
        'Workshop participation',
        'Networking sessions',
        'Refreshments included',
        'Event materials & swag bag',
        'Digital session recordings'
      ],
      availability: 'Available',
      recommended: true
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 'XX',
      description: 'Premium experience',
      features: [
        'Everything in General Admission',
        'VIP dinner with speakers',
        'Exclusive VIP lounge access',
        'Priority seating at all sessions',
        'Meet & greet with speakers',
        'Premium swag bag',
        'Digital session recordings',
        'One-on-one networking opportunities'
      ],
      availability: 'Limited availability',
      recommended: false
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTier || !agreed) {
      alert('Please select a ticket tier and agree to the terms.');
      return;
    }
    // In a real app, this would submit to a backend
    alert(`Registration successful! You've selected ${quantity} ${ticketTiers.find(t => t.id === selectedTier).name} ticket(s). Check your email for confirmation.`);
  };

  const selectedTierData = ticketTiers.find(t => t.id === selectedTier);
  const subtotal = selectedTierData && typeof selectedTierData.price === 'number' ? selectedTierData.price * quantity : 'XX';
  const total = subtotal;

  // Update quantity when tier changes
  useEffect(() => {
    if (!selectedTier) {
      setQuantity(1);
    }
  }, [selectedTier]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Get Your Tickets</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Secure your spot at Startup Founders Meetup 2026
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Ticket Selection */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold mb-8">Select Your Ticket</h2>
            
            <div className="space-y-6 mb-8">
              {ticketTiers.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`relative bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${
                    selectedTier === tier.id
                      ? 'border-purple-600 ring-4 ring-purple-200'
                      : 'border-gray-200 hover:border-purple-300'
                  } ${tier.recommended ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-3 right-6 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                      <p className="text-gray-600">{tier.description}</p>
                    </div>
                    <div className="text-right">
                      {tier.originalPrice && (
                        <p className="text-sm text-gray-400 line-through">${tier.originalPrice}</p>
                      )}
                      <p className="text-4xl font-bold text-purple-600">{typeof tier.price === 'number' ? `$${tier.price}` : tier.price}</p>
                      <p className="text-xs text-gray-500 mt-1">per ticket</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className={`text-sm font-semibold ${
                      tier.availability.includes('Limited') ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {tier.availability}
                    </span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedTier === tier.id ? 'border-purple-600 bg-purple-600' : 'border-gray-300'
                    }`}>
                      {selectedTier === tier.id && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
              
              {selectedTier ? (
                <>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{selectedTierData.name}</p>
                          <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-900">{typeof selectedTierData.price === 'number' ? `$${selectedTierData.price}` : selectedTierData.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>{typeof subtotal === 'number' ? `$${subtotal.toFixed(2)}` : subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Taxes & Fees</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>{typeof total === 'number' ? `$${total.toFixed(2)}` : total}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-green-900">Secure Payment</p>
                        <p className="text-xs text-green-700 mt-1">Your information is encrypted and secure</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-600 space-y-2">
                    <p>
                      <span className="font-semibold">Refund Policy:</span> Full refunds available up to 7 days before the event.
                    </p>
                    <p>
                      <span className="font-semibold">Need Help?</span> Contact us at{' '}
                      <a href="mailto:support@techinnovation.com" className="text-purple-600 hover:underline">
                        support@techinnovation.com
                      </a>
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>Select a ticket tier to see your order summary</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Registration Form */}
        {selectedTier && (
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Registration Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Quantity Selector */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Tickets
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="text-2xl font-bold text-gray-900 w-12 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 hover:bg-purple-50 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Dietary Preferences */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Dietary Preferences (Optional)
                    </label>
                    <select
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    >
                      <option value="">None</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten-Free</option>
                      <option value="halal">Halal</option>
                      <option value="kosher">Kosher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Accessibility Needs */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Accessibility Needs (Optional)
                    </label>
                    <textarea
                      value={formData.accessibility}
                      onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
                      rows="3"
                      placeholder="Please let us know if you have any accessibility requirements..."
                    />
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="#" className="text-purple-600 font-semibold hover:underline">
                        Terms & Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-purple-600 font-semibold hover:underline">
                        Privacy Policy
                      </a>
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    Complete Registration
                  </button>
                </form>
              </div>
        )}
      </div>
    </div>
  );
}

