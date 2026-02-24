import React from 'react';
import { RouterProvider } from 'react-router';
import { Web3AuthProvider } from '@web3auth/modal/react';
import { web3AuthContextConfig } from './config/web3auth';
import { router } from './routes';
import { AuthProviderInner } from './components/auth/AuthContext';

const App = () => {
  return (
    <Web3AuthProvider config={web3AuthContextConfig}>
      <AuthProviderInner>
        <RouterProvider router={router} />
      </AuthProviderInner>
    </Web3AuthProvider>
  );
};

export default App;
