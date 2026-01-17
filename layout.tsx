// src/components/Layout.tsx
import React from 'react';
import { FaStar, FaUserAstronaut, FaGamepad, FaShoppingBag } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-900/50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400 text-2xl animate-spin-slow" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              StarLounge
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 hover:text-purple-300 transition">
              <FaUserAstronaut />
              <span>My Avatar</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-purple-300 transition">
              <FaGamepad />
              <span>Games</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-purple-300 transition">
              <FaShoppingBag />
              <span>Shop</span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90 transition">
              Join Planet
            </button>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-purple-900/50 py-6 text-center text-gray-400">
        <p>StarLounge MVP Demo • Deploy your own celebrity planet!</p>
      </footer>
    </div>
  );
}