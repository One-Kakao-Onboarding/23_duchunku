import React from 'react';
import Layout from './components/layout/Layout';
import HomeTab from './features/home/HomeTab';
import WriterTab from './features/writer/WriterTab';
import GardenTab from './features/garden/GardenTab';
import GiftTab from './features/gift/GiftTab';
import { useTabNavigation } from './hooks/useTabNavigation';

const App = () => {
  const { activeTab, setActiveTab } = useTabNavigation('home');
  const [selectedRecipient, setSelectedRecipient] = React.useState(null);

  const handleNavigateToWriter = (recipient = null) => {
    setSelectedRecipient(recipient);
    setActiveTab('writer');
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'home' && <HomeTab onNavigateToWriter={handleNavigateToWriter} />}
      {activeTab === 'writer' && <WriterTab initialRecipient={selectedRecipient} />}
      {activeTab === 'garden' && <GardenTab onNavigateToWriter={handleNavigateToWriter} />}
      {activeTab === 'gift' && <GiftTab />}
    </Layout>
  );
};

export default App;
