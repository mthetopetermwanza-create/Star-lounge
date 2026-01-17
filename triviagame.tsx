// src/components/games/TriviaGame.tsx
'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FaTimes, FaTrophy } from 'react-icons/fa';

interface TriviaGameProps {
  onClose: () => void;
}

export default function TriviaGame({ onClose }: TriviaGameProps) {
  const [questions] = useState([
    {
      question: "What was the celebrity's first major role?",
      options: ["TV Commercial", "Indie Film", "Music Video", "Theater Play"],
      correct: 1,
      points: 100
    },
    {
      question: "Which award did they win in 2022?",
      options: ["Grammy", "Oscar", "Streamy", "People's Choice"],
      correct: 3,
      points: 150
    },
    {
      question: "What's their favorite hobby?",
      options: ["Painting", "Cooking", "Skydiving", "Photography"],
      correct: 0,
      points: 75
    },
  ]);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion();
    }
  }, [timeLeft]);
  
  const handleAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    
    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + questions[currentQuestion].points);
      
      // Celebrate!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setTimeLeft(30);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      setShowResult(true);
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-2xl w-full border border-purple-700/50 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold flex items-center">
            <FaTrophy className="mr-2 text-yellow-400" />
            Celebrity Trivia Challenge
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <FaTimes size={24} />
          </button>
        </div>
        
        {showResult ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h4 className="text-3xl font-bold mb-4">Quiz Complete!</h4>
            <p className="text-xl mb-2">Your Score:</p>
            <p className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {score} Points
            </p>
            <p className="text-gray-400 mt-4">You earned 50 XP for {celebrityName}'s Planet!</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:opacity-90"
            >
              Return to Planet
            </button>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-yellow-400">{score} Points</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-cyan-400 h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Timer */}
            <div className="text-center mb-6">
              <div className={`text-2xl font-mono ${timeLeft < 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                Time: {timeLeft}s
              </div>
            </div>
            
            {/* Question */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-6 p-4 bg-gray-800/50 rounded-lg">
                {questions[currentQuestion].question}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                    className={`p-4 rounded-xl text-left transition-all ${
                      selectedOption === index
                        ? index === questions[currentQuestion].correct
                          ? 'bg-gradient-to-r from-green-600 to-emerald-500'
                          : 'bg-gradient-to-r from-red-600 to-pink-500'
                        : 'bg-gray-800 hover:bg-gray-700'
                    } ${selectedOption !== null && index === questions[currentQuestion].correct ? 'ring-2 ring-yellow-400' : ''}`}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <div className="text-gray-400">
                Correct answer: +{questions[currentQuestion].points} points
              </div>
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
              >
                Skip Question
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}