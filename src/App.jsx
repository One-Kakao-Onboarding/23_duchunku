import React from 'react';
import Layout from './components/layout/Layout';
import HomeTab from './features/home/HomeTab';
import WriterTab from './features/writer/WriterTab';
import ThermometerTab from './features/thermometer/ThermometerTab';
import GiftTab from './features/gift/GiftTab';
import { useTabNavigation } from './hooks/useTabNavigation';

const App = () => {
  const { activeTab, setActiveTab } = useTabNavigation('home');

  const handleNavigateToWriter = () => {
    setActiveTab('writer');
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'home' && <HomeTab onNavigateToWriter={handleNavigateToWriter} />}
      {activeTab === 'writer' && <WriterTab />}
      {activeTab === 'thermometer' && <ThermometerTab onNavigateToWriter={handleNavigateToWriter} />}
      {activeTab === 'gift' && <GiftTab />}
    </Layout>
  );
};

export default App;
