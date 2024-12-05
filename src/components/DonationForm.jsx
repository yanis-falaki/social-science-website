import React, { useState } from 'react';

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = donationAmount === 'other' ? customAmount : donationAmount;
    console.log('Donation submitted', { donationAmount: finalAmount, name, email });
  };

  return (
    <div className="w-full md:w-4/12 p-6 rounded-xl shadow-glow-mtl bg-white z-10 md:ml-auto mt-8 md:mt-0">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Make a Donation
        </h2>

        <div>
          <label htmlFor="donationAmount" className="block text-sm font-medium text-gray-700 mb-2">
            Donation Amount
          </label>
          <select
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-mtl transition-colors"
            required
          >
            <option value="">Select Amount</option>
            <option value="10">$10</option>
            <option value="25">$25</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="other">Other Amount</option>
          </select>
        </div>

        {donationAmount === 'other' && (
          <div>
            <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                id="customAmount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                min="1"
                className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-[#EF4136] transition-colors"
                placeholder="Enter amount"
                required
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-[#EF4136] transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-[#EF4136] transition-colors"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#EF4136] text-white p-4 rounded-lg font-medium hover:bg-[#D93025] focus:ring-4 focus:ring-red-200 transition-all duration-300"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonationForm;