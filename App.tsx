
import React, { useState } from 'react';
import { Screen } from './types';
import ConfigScreen from './screens/ConfigScreen';
import PlayersScreen from './screens/PlayersScreen';
import BracketScreen from './screens/BracketScreen';
import ReportScreen from './screens/ReportScreen';
import HistoryScreen from './screens/HistoryScreen';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import { TournamentProvider, useTournament } from './context/TournamentContext';

const AppContent: React.FC = () => {
  const { currentScreen, setScreen, startTournament } = useTournament();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.CONFIG:
        return <ConfigScreen onNavigate={() => setScreen(Screen.PLAYERS)} />;
      case Screen.PLAYERS:
        return <PlayersScreen onNavigate={startTournament} />;
      case Screen.BRACKET:
        return <BracketScreen onNavigate={() => setScreen(Screen.REPORT)} />;
      case Screen.REPORT:
        return <ReportScreen onNavigate={() => setScreen(Screen.CONFIG)} />;
      case Screen.HISTORY:
        return <HistoryScreen />;
      default:
        return <ConfigScreen onNavigate={() => setScreen(Screen.PLAYERS)} />;
    }
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-background-dark flex flex-col relative overflow-hidden animate-fade-in">
      {renderScreen()}
      <Navbar currentScreen={currentScreen} onNavigate={setScreen} />
      
      {/* Visual background accents */}
      <div className="fixed bottom-0 left-0 right-0 h-1.5 flex pointer-events-none z-[60]">
        <div className="flex-1 bg-pingpong-red"></div>
        <div className="flex-1 bg-primary"></div>
        <div className="flex-1 bg-pingpong-red"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <TournamentProvider>
    <AppContent />
  </TournamentProvider>
);

export default App;
