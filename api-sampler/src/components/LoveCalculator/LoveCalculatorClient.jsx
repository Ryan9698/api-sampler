// app/components/LoveCalculatorClient.jsx
'use client';

import React, { useState } from 'react';

const LoveCalculatorClient = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch('/api/lovecalculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, secondName }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch love percentage.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 text-center">Love Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium">
            Your Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label
            htmlFor="secondName"
            className="block mb-2 text-sm font-medium"
          >
            Partner's Name:
          </label>
          <input
            type="text"
            id="secondName"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Calculating...' : 'Calculate'}
        </button>
      </form>

      {result && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold">Result</h2>
          <p>
            {firstName} and {secondName} have a love percentage of{' '}
            <span className="font-bold">{result.percentage}%</span>.
          </p>
          <p className="mt-2 italic">{result.result}</p>
        </div>
      )}

      {error && <p className="mt-6 text-red-600 text-center">{error}</p>}
    </div>
  );
};

export default LoveCalculatorClient;
