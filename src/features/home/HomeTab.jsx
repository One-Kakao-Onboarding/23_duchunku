import React from 'react';
import MissionCard from './components/MissionCard';
import WeeklyReport from './components/WeeklyReport';
import Timeline from './components/Timeline';
import { dashboardData } from '@/data/dashboard';
import { timelineData } from '@/data/timeline';

const HomeTab = ({ onNavigateToWriter }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <MissionCard />
      <WeeklyReport dashboardData={dashboardData} />
      <Timeline timelineData={timelineData} onNavigateToWriter={onNavigateToWriter} />
    </div>
  );
};

export default HomeTab;
