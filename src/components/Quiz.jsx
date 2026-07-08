import React, { useState, useRef } from 'react';
import { CheckCircle, XCircle, Award, ArrowRight, Download } from 'lucide-react';

function generateCertificate(name, course, score) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 800, 600);
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(20, 20, 760, 560);

  ctx.strokeStyle = '#3b82f6';
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, 720, 520);

  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Certificate of Completion', 400, 140);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '20px sans-serif';
  ctx.fillText('This certifies that', 400, 200);

  ctx.fillStyle = '#3b82f6';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText(name || 'Developer', 400, 250);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '20px sans-serif';
  ctx.fillText('successfully completed', 400, 300);

  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText(course, 400, 345);

  ctx.fillStyle = '#22c55e';
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText(`${score}%`, 400, 430);

  ctx.fillStyle = '#64748b';
  ctx.font = '16px sans-serif';
  ctx.fillText(`Completed on ${new Date().toLocaleDateString()}`, 400, 500);
  ctx.fillText('learn-github-app — GunnarMUC', 400, 535);

  return canvas.toDataURL('image/png');
}

export default function Quiz({ moduleTitle, questions, onComplete, onBack }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  if (!questions || questions.length === 0) {
    return React.createElement('div', { className: 'text-center py-12' },
      React.createElement('p', { className: 'text-gray-500' }, 'No quiz available for this module yet.'),
    );
  }

  const score = submitted
    ? Math.round((questions.filter((q, i) => answers[i] === q.correct).length / questions.length) * 100)
    : 0;

  const passed = score >= 70;

  if (submitted) {
    return React.createElement('div', { className: 'max-w-2xl mx-auto p-8 text-center' },
      React.createElement(passed ? Award : XCircle, {
        size: 64,
        className: `mx-auto mb-4 ${passed ? 'text-green-500' : 'text-red-500'}`,
      }),
      React.createElement('h2', { className: 'text-3xl font-bold mb-2 text-gray-900 dark:text-white' },
        passed ? 'Congratulations!' : 'Almost there!',
      ),
      React.createElement('p', { className: 'text-xl mb-2 text-gray-600 dark:text-gray-300' },
        `You scored ${score}% (${questions.filter((q, i) => answers[i] === q.correct).length}/${questions.length})`,
      ),
      React.createElement('p', { className: 'mb-6 text-gray-500' },
        passed ? `You\'ve mastered ${moduleTitle}!` : `Review the material and try again.`,
      ),
      passed && React.createElement('div', { className: 'mb-6' },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Your name for the certificate',
          value: name,
          onChange: e => setName(e.target.value),
          className: 'px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white text-center',
        }),
      ),
      React.createElement('div', { className: 'flex justify-center gap-4' },
        passed && React.createElement('button', {
          onClick: () => {
            const img = generateCertificate(name, moduleTitle, score);
            const a = document.createElement('a');
            a.href = img;
            a.download = `certificate-${moduleTitle.toLowerCase().replace(/\s+/g, '-')}.png`;
            a.click();
          },
          className: 'flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors',
        },
          React.createElement(Download, { size: 20 }),
          'Download Certificate',
        ),
        React.createElement('button', {
          onClick: () => { setSubmitted(false); setAnswers({}); setCurrent(0); },
          className: 'px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300',
        }, 'Retry Quiz'),
        onComplete && passed && React.createElement('button', {
          onClick: onComplete,
          className: 'flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors',
        },
          'Next',
          React.createElement(ArrowRight, { size: 20 }),
        ),
      ),
    );
  }

  const q = questions[current];

  return React.createElement('div', { className: 'max-w-2xl mx-auto p-8' },
    React.createElement('div', { className: 'flex items-center justify-between mb-8' },
      React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 dark:text-white' }, `${moduleTitle} — Quiz`),
      React.createElement('span', { className: 'text-sm text-gray-500 dark:text-gray-400' },
        `${current + 1} / ${questions.length}`,
      ),
    ),
    React.createElement('div', { className: 'mb-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full' },
      React.createElement('div', {
        className: 'h-2 bg-blue-600 rounded-full transition-all',
        style: { width: `${((current + 1) / questions.length) * 100}%` },
      }),
    ),
    React.createElement('div', { className: 'bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-6' },
      React.createElement('h3', { className: 'text-xl font-semibold mb-6 text-gray-900 dark:text-white' }, q.question),
      React.createElement('div', { className: 'space-y-3' },
        q.options.map((opt, i) =>
          React.createElement('button', {
            key: i,
            onClick: () => setAnswers({ ...answers, [current]: i }),
            className: `w-full text-left p-4 rounded-lg border-2 transition-all ${answers[current] === i ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'}`,
          },
            React.createElement('span', { className: 'text-gray-900 dark:text-white' }, opt),
          ),
        ),
      ),
    ),
    React.createElement('div', { className: 'flex justify-between' },
      React.createElement('button', {
        onClick: () => current > 0 && setCurrent(current - 1),
        disabled: current === 0,
        className: 'px-4 py-2 text-gray-600 dark:text-gray-400 disabled:opacity-30',
      }, '← Previous'),
      current < questions.length - 1
        ? React.createElement('button', {
            onClick: () => answers[current] !== undefined && setCurrent(current + 1),
            disabled: answers[current] === undefined,
            className: 'px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-30 transition-colors',
          }, 'Next →')
        : React.createElement('button', {
            onClick: () => setSubmitted(true),
            disabled: Object.keys(answers).length < questions.length,
            className: 'px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-30 transition-colors',
          }, 'Submit ✓'),
    ),
  );
}
