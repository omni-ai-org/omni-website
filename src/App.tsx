import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import HomePage from './apps/public-website/pages/HomePage';

// Get Clerk publishable key from environment
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || '';

/**
 * Main App Component
 *
 * Handles routing for the public website with Clerk authentication
 */
function App() {
  // If no Clerk key, show error
  if (!clerkPubKey) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
          <p className="font-mono text-sm">
            Missing REACT_APP_CLERK_PUBLISHABLE_KEY in .env file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<HomePage />} />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
