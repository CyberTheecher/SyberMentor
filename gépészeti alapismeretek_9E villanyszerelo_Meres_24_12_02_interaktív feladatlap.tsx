import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Ruler, 
  Calculator, 
  ClipboardCheck,
  FileText,
  Wrench,
  ListChecks,
  CheckCircle,
  XCircle,
  RefreshCcw
} from 'lucide-react';

const LearningApp = () => {
  const [activeSection, setActiveSection] = useState('');
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // ... korábbi sections tömb ...

  const questions = [
    {
      id: 'q1',
      question: 'Mekkora a szükséges kábelcsatorna hossza ráhagyással?',
      correctAnswer: '11.4',
      unit: 'méter',
      points: 10
    },
    {
      id: 'q2',
      question: 'Hány darab rögzítési pont szükséges?',
      correctAnswer: '21',
      unit: 'db',
      points: 10
    },
    {
      id: 'q3',
      question: 'Hány darab sarokelem szükséges összesen?',
      correctAnswer: '3',
      unit: 'db',
      points: 10
    },
    {
      id: 'q4',
      question: 'Mennyi a szükséges csavarok száma (ráhagyással)?',
      correctAnswer: '46',
      unit: 'db',
      points: 10
    }
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        totalScore += question.points;
      }
    });
    setScore(totalScore);
    setShowResults(true);
  };

  const getGrade = (score) => {
    if (score >= 80) return { grade: 5, text: 'jeles' };
    if (score >= 70) return { grade: 4, text: 'jó' };
    if (score >= 60) return { grade: 3, text: 'közepes' };
    if (score >= 50) return { grade: 2, text: 'elégséges' };
    return { grade: 1, text: 'elégtelen' };
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* ... korábbi section megjelenítés ... */}

      <div className="p-4 border-t">
        <h3 className="text-lg font-bold mb-4">Számítási feladatok</h3>
        {questions.map(question => (
          <div key={question.id} className="mb-4 p-4 bg-gray-50 rounded">
            <label className="block mb-2">{question.question}</label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                step="0.1"
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                disabled={showResults}
                className="border p-2 rounded w-24"
              />
              <span>{question.unit}</span>
              {showResults && (
                answers[question.id] === question.correctAnswer ? 
                <CheckCircle className="text-green-500 w-5 h-5" /> :
                <XCircle className="text-red-500 w-5 h-5" />
              )}
            </div>
            {showResults && answers[question.id] !== question.correctAnswer && (
              <p className="text-sm text-red-500 mt-1">
                Helyes válasz: {question.correctAnswer} {question.unit}
              </p>
            )}
          </div>
        ))}

        <div className="mt-4">
          {!showResults ? (
            <button
              onClick={calculateScore}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Válaszok ellenőrzése
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded">
                <p className="font-bold">Elért pontszám: {score}/40 pont</p>
                <p>Érdemjegy: {getGrade(score).grade} ({getGrade(score).text})</p>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center"
              >
                <RefreshCcw className="mr-2 w-4 h-4" />
                Újrakezdés
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <p className="text-sm text-gray-600 text-center">
          Osztályzás: 80-100%: 5 | 70-79%: 4 | 60-69%: 3 | 50-59%: 2 | 0-49%: 1
        </p>
      </div>
    </div>
  );
};

export default LearningApp;