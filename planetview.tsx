// src/components/PlanetView.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMusic, 
  FaQuestionCircle, 
  FaCamera, 
  FaTrophy, 
  FaComments,
  FaCrown,
  FaLock,
  FaLockOpen
} from 'react-icons/fa';
import TriviaGame from './games/TriviaGame';
import MusicGame from './games/MusicGame';
import AdminPanel from './AdminPanel';

interface PlanetViewProps {
  celebrityName: string;
  planetTheme: string;
}

export default function PlanetView({ celebrityName = "Demo Celebrity", planetTheme = "purple" }: PlanetViewProps) {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  
  // Mock online fans
  const onlineFans = [
    { id: 1, name: "SuperFan42", level: 25 },
    { id: 2, name: "Stargazer99", level: 18 },
    { id: 3, name: "CelebLover", level: 32 },
    { id: 4, name: "VIP_Member", level: 45 },
  ];
  
  const planetFeatures = [
    {
      id: 'music',
      icon: <FaMusic className="text-2xl" />,
      name: 'Music Challenge',
      description: 'Test your knowledge of celebrity\'s hits',
      color: 'from-blue-500 to-cyan-400',
      locked: false
    },
    {
      id: 'trivia',
      icon: <FaQuestionCircle className="text-2xl" />,
      name: 'Celebrity Trivia',
      description: 'How well do you know them?',
      color: 'from-green-500 to-emerald-400',
      locked: false
    },
    {
      id: 'gallery',
      icon: <FaCamera className="text-2xl" />,
      name: 'Exclusive Gallery',
      description: 'Unseen photos & behind-the-scenes',
      color: 'from-red-500 to-pink-400',
      locked: false
    },
    {
      id: 'leaderboard',
      icon: <FaTrophy className="text-2xl" />,
      name: 'Fan Leaderboard',
      description: 'Top fans of the month',
      color: 'from-yellow-500 to-orange-400',
      locked: false
    },
    {
      id: 'chat',
      icon: <FaComments className="text-2xl" />,
      name: 'Live Chat Lounge',
      description: 'Chat with other fans',
      color: 'from-purple-500 to-violet-400',
      locked: false
    },
    {
      id: 'vip',
      icon: <FaCrown className="text-2xl" />,
      name: 'VIP Zone',
      description: 'Exclusive content & perks',
      color: 'from-gray-700 to-gray-900',
      locked: true
    },
  ];
  
  return (
    <div className="space-y-8">
      {/* Planet Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-purple-900 to-black p-8 rounded-3xl border border-purple-700/50">
            <h2 className="text-4xl font-bold mb-2">{celebrityName}'s Planet</h2>
            <p className="text-gray-300">Welcome to the exclusive digital realm</p>
          </div>
        </div>
        
        {/* Admin Toggle */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => {
              setIsAdminMode(!isAdminMode);
              setShowAdmin(!showAdmin);
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isAdminMode 
                ? 'bg-gradient-to-r from-yellow-600 to-orange-600' 
                : 'bg-gradient-to-r from-purple-700 to-blue-700'
            }`}
          >
            {isAdminMode ? <FaLockOpen /> : <FaLock />}
            <span>{isAdminMode ? 'Admin Mode ON' : 'Enter Admin Mode'}</span>
          </button>
        </div>
      </motion.div>
      
      {showAdmin ? (
        <AdminPanel celebrityName={celebrityName} />
      ) : (
        <>
          {/* Online Fans */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-900/30">
            <h3 className="text-xl font-semibold mb-4">🪐 Currently on this Planet</h3>
            <div className="flex flex-wrap gap-4">
              {onlineFans.map(fan => (
                <div key={fan.id} className="flex items-center space-x-3 bg-gray-800/50 px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    {fan.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{fan.name}</p>
                    <p className="text-sm text-gray-400">Level {fan.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Planet Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planetFeatures.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl cursor-pointer border border-white/10 ${
                  feature.locked ? 'opacity-60' : ''
                }`}
                onClick={() => !feature.locked && setActiveGame(feature.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {feature.icon}
                  </div>
                  {feature.locked && (
                    <FaLock className="text-white/50" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                <p className="text-white/80">{feature.description}</p>
                {feature.locked && (
                  <p className="mt-3 text-sm text-white/60">Unlock at Level 20</p>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Game Render Area */}
          {activeGame === 'trivia' && (
            <TriviaGame onClose={() => setActiveGame(null)} />
          )}
          
          {activeGame === 'music' && (
            <MusicGame onClose={() => setActiveGame(null)} />
          )}
        </>
      )}
    </div>
  );
}