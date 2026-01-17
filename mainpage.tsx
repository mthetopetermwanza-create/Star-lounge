// src/app/page.tsx
'use client';

import React from 'react';
import PlanetView from '../components/PlanetView';
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Celebrity Metaverse
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step into exclusive digital planets where you can interact, play games, 
            and connect with celebrities like never before.
          </p>
        </div>
        
        {/* Demo Planet */}
        <PlanetView 
          celebrityName="Demo Celebrity"
          planetTheme="purple"
        />
        
        {/* How it Works */}
        <div className="bg-gray-900/50 rounded-2xl p-8 mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">How StarLounge Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🪐</div>
              <h3 className="text-xl font-bold mb-2">Join a Planet</h3>
              <p className="text-gray-300">
                Each celebrity has their own themed digital planet with unique features
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Play & Engage</h3>
              <p className="text-gray-300">
                Participate in games, trivia, and exclusive events
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
              <p className="text-gray-300">
                Level up, unlock content, and get real-world perks
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}