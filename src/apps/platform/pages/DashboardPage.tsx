import React from 'react';
import { BRANDING } from '../../../shared/config';
import { Container, Card } from '../../../shared/components';

/**
 * Platform - Dashboard Page
 *
 * Main dashboard for the Nexus AI platform
 */
export const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <Container size="full">
          <div className="py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary-600">
                {BRANDING.productNameShort}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
                Settings
              </button>
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                U
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <Container size="full">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
            <p className="text-neutral-600">
              Welcome to your unified productivity workspace
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card padding="md">
              <div className="space-y-2">
                <p className="text-sm text-neutral-600">Active Work Units</p>
                <p className="text-3xl font-bold text-primary-600">12</p>
                <p className="text-xs text-success">+3 from last week</p>
              </div>
            </Card>

            <Card padding="md">
              <div className="space-y-2">
                <p className="text-sm text-neutral-600">In Progress</p>
                <p className="text-3xl font-bold text-warning">5</p>
                <p className="text-xs text-neutral-500">2 blocked</p>
              </div>
            </Card>

            <Card padding="md">
              <div className="space-y-2">
                <p className="text-sm text-neutral-600">Ready for QA</p>
                <p className="text-3xl font-bold text-info">3</p>
                <p className="text-xs text-neutral-500">Updated today</p>
              </div>
            </Card>

            <Card padding="md">
              <div className="space-y-2">
                <p className="text-sm text-neutral-600">Completed</p>
                <p className="text-3xl font-bold text-success">28</p>
                <p className="text-xs text-success">+8 this week</p>
              </div>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card padding="lg">
              <h3 className="text-xl font-semibold mb-4">Recent Work Units</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                  <div className="w-2 h-2 mt-2 rounded-full bg-warning"></div>
                  <div className="flex-1">
                    <p className="font-medium">User Profile Editing Feature</p>
                    <p className="text-sm text-neutral-600">In Progress • Updated 2h ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-neutral-100">
                  <div className="w-2 h-2 mt-2 rounded-full bg-info"></div>
                  <div className="flex-1">
                    <p className="font-medium">OAuth Login Implementation</p>
                    <p className="text-sm text-neutral-600">Ready for QA • Updated 5h ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-success"></div>
                  <div className="flex-1">
                    <p className="font-medium">Bug: File Upload Size Limit</p>
                    <p className="text-sm text-neutral-600">Completed • Updated 1d ago</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-info-light rounded-lg">
                  <p className="font-medium text-info-dark mb-1">
                    Sprint On Track
                  </p>
                  <p className="text-sm text-neutral-600">
                    Current velocity suggests 85% confidence in hitting sprint goals
                  </p>
                </div>
                <div className="p-4 bg-warning-light rounded-lg">
                  <p className="font-medium text-warning-dark mb-1">
                    Dependency Alert
                  </p>
                  <p className="text-sm text-neutral-600">
                    2 work units are blocked by pending API from Team B
                  </p>
                </div>
                <div className="p-4 bg-success-light rounded-lg">
                  <p className="font-medium text-success-dark mb-1">
                    Test Coverage Improved
                  </p>
                  <p className="text-sm text-neutral-600">
                    Overall coverage increased to 78% (+5% this week)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default DashboardPage;
