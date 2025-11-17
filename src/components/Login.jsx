import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="relative min-h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/US-en-20251110-TRIFECTA-perspective_62b961e9-ceee-4521-94df-35a17224915b_large.jpg"
        alt="header"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-black/80 rounded-md p-12 md:p-16">
        <h1 className="text-white text-3xl md:text-4xl font-semibold mb-8">
          {signIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 mb-4 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="w-full px-4 py-3 mb-4 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-white transition-colors placeholder:text-gray-500"
        />

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors mb-4"
        >
          {signIn ? 'Sign In' : 'Sign Up'}
        </button>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-8">
          {signIn ? (
            <>
              New to Netflix?{' '}
              <a
                href="#"
                onClick={toggleSignInForm}
                className="text-white hover:underline"
              >
                Sign up now
              </a>
              .
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a
                href="#"
                onClick={toggleSignInForm}
                className="text-white hover:underline"
              >
                Sign in now
              </a>
              .
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
