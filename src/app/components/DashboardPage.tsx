import React from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';
import { Dashboard } from './Dashboard';
import { Footer } from './Footer';
import { useAuth } from './auth/AuthContext';

export const DashboardPage = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate('/dashboard');
  };

  const handleDisconnect = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <Navbar onConnect={handleConnect} isConnected={!!user} />
      <Dashboard
        balance={profile?.tokenBalance ?? 0}
        onDisconnect={handleDisconnect}
      />
      <Footer />
    </>
  );
};
