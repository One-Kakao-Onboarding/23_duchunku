import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen font-sans">
      <div className="w-full max-w-[430px] bg-[#F9F9F9] min-h-screen flex flex-col relative shadow-2xl overflow-hidden border-x border-gray-300">
        <Header />

        <main className="flex-1 px-5 pt-4 overflow-y-auto no-scrollbar">
          {children}
        </main>

        <Navigation activeTab={activeTab} onTabChange={onTabChange} />

        <div className="h-1 w-32 bg-gray-300 rounded-full mx-auto mb-2 absolute bottom-1 left-1/2 -translate-x-1/2 opacity-20"></div>
      </div>
    </div>
  );
};

export default Layout;
