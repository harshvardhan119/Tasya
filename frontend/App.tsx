import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';
import ArtDetailPage from './pages/ArtDetailPage';
import DashboardHeader from './components/DashboardHeader';
import { ArtPiece } from './types';
import ProfilePage from './components/Profile';
const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const [currentView, setCurrentView] = useState<'dashboard' | 'artwork'|'profile'>('dashboard');
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(false);
    setCurrentView('dashboard');
  };
const handleViewProfile = () => {
  setCurrentView('profile');
};

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedArt(null);
  };

  const handleViewArt = (art: ArtPiece) => {
    setSelectedArt(art);
    setCurrentView('artwork');
  };

  const handleBackToDashboard = () => {
    setSelectedArt(null);
    setCurrentView('dashboard');
  };
  
  const handleOpenSignIn = () => {
    setIsSignUpModalOpen(false);
    setIsSignInModalOpen(true);
  };

  const handleOpenSignUp = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  useEffect(() => {
    if (isSignInModalOpen || isSignUpModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isSignInModalOpen, isSignUpModalOpen]);

  return (
    <div className="w-full bg-[#0c011e]">
      {isAuthenticated ? (
        <>
          <DashboardHeader onLogout={handleLogout} onViewProfile={handleViewProfile} />
          {currentView === 'dashboard' ? (
  <Dashboard onViewArt={handleViewArt} onViewProfile={handleViewProfile} />
) : currentView === 'artwork' && selectedArt ? (
  <ArtDetailPage artPiece={selectedArt} onBack={handleBackToDashboard} />
) : currentView === 'profile' ? (
  <ProfilePage onBack={() => setCurrentView('dashboard')} />
) : (
  <Dashboard onViewArt={handleViewArt} onViewProfile={handleViewProfile} />
)}
        </>
      ) : (
        <HomePage onSignInClick={handleOpenSignIn} />
      )}
      
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={handleCloseModals}
        onLoginSuccess={handleLogin}
        onSwitchToSignUp={handleOpenSignUp}
      />
      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={handleCloseModals}
        onLoginSuccess={handleLogin}
        onSwitchToSignIn={handleOpenSignIn}
      />
    </div>
  );
};

export default App;
