import React, { useState } from 'react';

export default function LoginPage() {
  console.log( location)
  console.log('hello world')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      alert(`Login attempt with email: ${email}`);
    }, 1500);


  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="w-full max-w-md m-auto bg-white rounded-lg shadow-xl overflow-hidden">

        <div className="bg-indigo-600 p-6">
          <h2 className="text-2xl font-bold text-center text-white">Welcome Back</h2>
        </div>

        <div className="p-6">
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="string"
                placeholder="you@example.com"
                value='012720804'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value='ayaF5zZM'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a className="inline-block align-baseline font-medium text-sm text-indigo-600 hover:text-indigo-800" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                type="submit"
                disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a className="font-medium text-indigo-600 hover:text-indigo-800" href="#">
                Sign up
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}