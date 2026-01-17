// src/components/AdminPanel.tsx
'use client';

import React, { useState } from 'react';
import { 
  FaChartLine, 
  FaUsers, 
  FaCalendarAlt, 
  FaGift, 
  FaImage,
  FaCog,
  FaBullhorn,
  FaMoneyBillWave
} from 'react-icons/fa';

interface AdminPanelProps {
  celebrityName: string;
}

export default function AdminPanel({ celebrityName }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [planetName, setPlanetName] = useState(`${celebrityName}'s Planet`);
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome to my exclusive digital realm!');
  const [planetColor, setPlanetColor] = useState('#8b5cf6');
  
  const stats = {
    totalFans: 12543,
    activeToday: 842,
    totalEarnings: 5240,
    topFan: 'SuperFan42'
  };
  
  const scheduledEvents = [
    { id: 1, title: 'Live Q&A Session', date: 'Tomorrow, 8 PM EST', participants: 320 },
    { id: 2, title: 'Exclusive Song Premiere', date: 'Dec 24, 9 PM EST', participants: 1500 },
    { id: 3, title: 'Gaming Stream', date: 'Jan 5, 7 PM EST', participants: 560 },
  ];
  
  return (
    <div className="bg-gray-900/70 rounded-2xl p-6 border border-yellow-500/30">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          🛠️ Planet Control Panel
        </h2>
        <div className="text-sm text-gray-400">
          Admin Mode • {celebrityName}
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800/50 p-4 rounded-xl">
          <div className="flex items-center mb-2">
            <FaUsers className="text-blue-400 mr-2" />
            <h4 className="font-semibold">Total Fans</h4>
          </div>
          <p className="text-2xl font-bold">{stats.totalFans.toLocaleString()}</p>
        </div>
        
        <div className="bg-gray-800/50 p-4 rounded-xl">
          <div className="flex items-center mb-2">
            <FaChartLine className="text-green-400 mr-2" />
            <h4 className="font-semibold">Active Today</h4>
          </div>
          <p className="text-2xl font-bold">{stats.activeToday}</p>
        </div>
        
        <div className="bg-gray-800/50 p-4 rounded-xl">
          <div className="flex items-center mb-2">
            <FaMoneyBillWave className="text-yellow-400 mr-2" />
            <h4 className="font-semibold">Total Earnings</h4>
          </div>
          <p className="text-2xl font-bold">${stats.totalEarnings.toLocaleString()}</p>
        </div>
        
        <div className="bg-gray-800/50 p-4 rounded-xl">
          <div className="flex items-center mb-2">
            <FaGift className="text-pink-400 mr-2" />
            <h4 className="font-semibold">Top Fan</h4>
          </div>
          <p className="text-xl font-bold">{stats.topFan}</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="space-y-2">
            {[
              { id: 'dashboard', icon: <FaChartLine />, label: 'Dashboard' },
              { id: 'customize', icon: <FaCog />, label: 'Customize Planet' },
              { id: 'events', icon: <FaCalendarAlt />, label: 'Events' },
              { id: 'content', icon: <FaImage />, label: 'Content' },
              { id: 'announce', icon: <FaBullhorn />, label: 'Announcements' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30'
                    : 'hover:bg-gray-800/50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          {activeTab === 'dashboard' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Planet Analytics</h3>
              <div className="bg-gray-800/30 p-4 rounded-xl mb-6">
                <h4 className="font-semibold mb-2">Quick Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                    Schedule Event
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg">
                    Post Update
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg">
                    Add Exclusive Content
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Upcoming Events</h4>
                <div className="space-y-3">
                  {scheduledEvents.map(event => (
                    <div key={event.id} className="bg-gray-800/50 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-bold">{event.title}</h5>
                          <p className="text-gray-400 text-sm">{event.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-300">{event.participants} registered</p>
                          <button className="mt-2 px-3 py-1 bg-blue-600/70 hover:bg-blue-600 rounded text-sm">
                            Manage
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'customize' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Customize Your Planet</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Planet Name</label>
                  <input
                    type="text"
                    value={planetName}
                    onChange={(e) => setPlanetName(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
                  />
                </div>
                
                <div>
                  <label className="block mb-2">Welcome Message</label>
                  <textarea
                    value={welcomeMessage}
                    onChange={(e) => setWelcomeMessage(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32"
                  />
                </div>
                
                <div>
                  <label className="block mb-2">Planet Theme Color</label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="color"
                      value={planetColor}
                      onChange={(e) => setPlanetColor(e.target.value)}
                      className="w-16 h-16 cursor-pointer"
                    />
                    <div className="text-sm text-gray-400">
                      This color will be used throughout your planet
                    </div>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}