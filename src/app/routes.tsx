import { createBrowserRouter, Navigate } from 'react-router';
import React from 'react';
import { LandingPage } from './components/LandingPage';
import { DashboardPage } from './components/DashboardPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { StyleGuide } from './components/StyleGuide';

// Root layout
const RootLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00ffe6] selection:text-black font-sans">
      {children}
    </div>
  );
};

// Wrapper components for routes
const LandingRoute = () => (
  <RootLayout>
    <LandingPage />
  </RootLayout>
);

const RedirectToLanding = () => <Navigate to="/" replace />;

const DashboardRoute = () => (
  <RootLayout>
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  </RootLayout>
);

const StyleGuideRoute = () => (
  <RootLayout>
    <StyleGuide onBack={() => window.history.back()} />
  </RootLayout>
);

const NotFound = () => (
  <RootLayout>
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#00ffe6] mb-4">404</h1>
        <p className="text-[#99a1af] text-lg mb-8">Pagina no encontrada</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#01ffe7] px-6 py-3 rounded-[14px] text-black font-bold hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] transition-all"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  </RootLayout>
);

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingRoute,
  },
  {
    path: '/login',
    Component: RedirectToLanding,
  },
  {
    path: '/register',
    Component: RedirectToLanding,
  },
  {
    path: '/dashboard',
    Component: DashboardRoute,
  },
  {
    path: '/style-guide',
    Component: StyleGuideRoute,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);
