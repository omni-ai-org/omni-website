import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './apps/public-website/pages/HomePage';
import FeaturesPage from './apps/public-website/pages/FeaturesPage';
import IntegrationsPage from './apps/public-website/pages/IntegrationsPage';
import BlogPage from './apps/public-website/pages/BlogPage';
import DocumentationPage from './apps/public-website/pages/DocumentationPage';
import ApiReferencePage from './apps/public-website/pages/ApiReferencePage';
import DashboardPage from './apps/platform/pages/DashboardPage';

/**
 * Main App Component
 *
 * Handles routing between public website and platform
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/api-reference" element={<ApiReferencePage />} />

        {/* Platform Routes */}
        <Route path="/platform" element={<DashboardPage />} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
