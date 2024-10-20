import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        setIsLoggedIn(true);
      } else {
        // Display error message
        setErrorMessage(data.detail || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Display error message
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">SniffSocials Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
        {errorMessage && (
          <div className="mt-4 text-red-600 text-center">
            {typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage)}
          </div>
        )}
        {isLoggedIn && (
          <div className="mt-4 text-center">
            <Link href="/dashboard" legacyBehavior>
              <a className="btn btn-secondary">Go to Dashboard</a>
            </Link>
          </div>
        )}
        <div className="mt-4 text-center">
          <Link href="/register" legacyBehavior>
            <a className="btn btn-secondary">Register</a>
          </Link>
        </div>
      </div>
    </div>
  );
}