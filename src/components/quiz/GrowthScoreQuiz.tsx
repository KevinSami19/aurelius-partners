import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Mail } from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: number }[];
}

const questions: Question[] = [
  {
    id: 'pipeline',
    question: 'How would you describe your client pipeline right now?',
    options: [
      { label: 'Mostly referrals—we have no proactive outbound', value: 1 },
      { label: 'Some outbound, but it\'s inconsistent', value: 2 },
      { label: 'Outbound is running, but conversion is low', value: 3 },
      { label: 'Pipeline is healthy and predictable', value: 4 },
    ],
  },
  {
    id: 'data',
    question: 'How useful is your ATS/CRM data for making decisions?',
    options: [
      { label: 'It\'s a mess—we barely trust it', value: 1 },
      { label: 'It has some value, but takes hours to pull reports', value: 2 },
      { label: 'We have basic dashboards, but they\'re not great', value: 3 },
      { label: 'Our data is clean and drives weekly decisions', value: 4 },
    ],
  },
  {
    id: 'automation',
    question: 'How automated are your internal workflows?',
    options: [
      { label: 'Almost everything is manual', value: 1 },
      { label: 'A few things are automated, but most is manual', value: 2 },
      { label: 'We have some automations, but they\'re fragmented', value: 3 },
      { label: 'Most repeatable processes are automated', value: 4 },
    ],
  },
  {
    id: 'kpis',
    question: 'Do you have clear KPIs that your team tracks weekly?',
    options: [
      { label: 'No—we mostly go by gut feel', value: 1 },
      { label: 'We track revenue, but not leading indicators', value: 2 },
      { label: 'We have KPIs, but people don\'t use them consistently', value: 3 },
      { label: 'KPIs are embedded in our weekly rhythm', value: 4 },
    ],
  },
  {
    id: 'tech',
    question: 'How well do your tools (ATS, CRM, email, etc.) work together?',
    options: [
      { label: 'They don\'t—lots of copy-pasting and manual work', value: 1 },
      { label: 'Some integrations, but many gaps', value: 2 },
      { label: 'Mostly connected, with a few manual bridges', value: 3 },
      { label: 'Fully integrated—data flows seamlessly', value: 4 },
    ],
  },
  {
    id: 'ai',
    question: 'Where are you with AI adoption?',
    options: [
      { label: 'Haven\'t started—AI feels overwhelming', value: 1 },
      { label: 'Experimenting with ChatGPT, but nothing systematic', value: 2 },
      { label: 'Using AI in a few areas, want to expand', value: 3 },
      { label: 'AI is integrated into our daily operations', value: 4 },
    ],
  },
  {
    id: 'marketing',
    question: 'How consistent is your marketing and content?',
    options: [
      { label: 'We have no marketing presence to speak of', value: 1 },
      { label: 'Sporadic LinkedIn posts, no strategy', value: 2 },
      { label: 'Some content, but it doesn\'t generate leads', value: 3 },
      { label: 'Consistent content that drives inbound interest', value: 4 },
    ],
  },
  {
    id: 'playbooks',
    question: 'How well-documented are your sales and recruiting processes?',
    options: [
      { label: 'Nothing is documented—tribal knowledge only', value: 1 },
      { label: 'Some notes exist, but they\'re outdated', value: 2 },
      { label: 'We have basic SOPs, but adoption is spotty', value: 3 },
      { label: 'Comprehensive playbooks that new hires follow', value: 4 },
    ],
  },
];

function getScoreCategory(score: number) {
  const pct = (score / (questions.length * 4)) * 100;
  if (pct >= 75) return { label: 'Growth Ready', color: 'text-success', advice: 'You\'re ahead of most agencies. Focus on optimization, scaling what works, and advanced AI implementation.' };
  if (pct >= 50) return { label: 'Growth Potential', color: 'text-gold', advice: 'You have foundations in place but significant room to systematize. A targeted sprint could unlock your next growth phase.' };
  if (pct >= 25) return { label: 'Growth Opportunity', color: 'text-warning', advice: 'There are clear gaps in your operations that, once addressed, could dramatically change your growth trajectory.' };
  return { label: 'Growth Foundation Needed', color: 'text-danger', advice: 'The good news: there\'s massive upside. You need foundational systems for pipeline, data, and automation.' };
}

export function GrowthScoreQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const prefersReduced = useReducedMotion();

  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const category = getScoreCategory(totalScore);
  const allAnswered = Object.keys(answers).length === questions.length;

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ((prev) => prev + 1), 300);
    }
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production: POST email + score to backend/webhook
  };

  return (
    <Section id="quiz">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel>Free Assessment</SectionLabel>
        <SectionTitle className="mx-auto">
          What&apos;s your Staffing Growth Score?
        </SectionTitle>
        <p className="mx-auto mt-4 text-lg dark:text-text-muted text-text-dark-muted">
          Answer {questions.length} quick questions to see where your agency stands on pipeline,
          data, and automation readiness.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        {!showResults ? (
          <>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm dark:text-text-muted text-text-dark-muted">
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span>{Math.round((Object.keys(answers).length / questions.length) * 100)}% complete</span>
              </div>
              <div className="mt-2 h-2 rounded-full dark:bg-surface bg-gray-200">
                <motion.div
                  className="h-full rounded-full bg-gold"
                  animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQ}
                initial={prefersReduced ? undefined : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold dark:text-text-primary text-text-dark">
                  {questions[currentQ].question}
                </h3>
                <div className="mt-6 space-y-3">
                  {questions[currentQ].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(questions[currentQ].id, option.value)}
                      className={`w-full rounded-lg border p-4 text-left transition-all ${
                        answers[questions[currentQ].id] === option.value
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-steel/40 dark:border-steel/40 border-gray-200 dark:text-text-muted text-text-dark-muted hover:border-gold/40'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setCurrentQ((prev) => Math.max(0, prev - 1))}
                disabled={currentQ === 0}
                className="flex items-center gap-2 text-sm dark:text-text-muted text-text-dark-muted transition-colors hover:text-gold disabled:opacity-40"
              >
                <ArrowLeft size={16} /> Previous
              </button>

              {allAnswered ? (
                <button
                  onClick={() => setShowResults(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-obsidian transition-all hover:bg-gold-hover"
                >
                  See My Score <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQ((prev) => Math.min(questions.length - 1, prev + 1))}
                  disabled={currentQ === questions.length - 1}
                  className="flex items-center gap-2 text-sm dark:text-text-muted text-text-dark-muted transition-colors hover:text-gold disabled:opacity-40"
                >
                  Next <ArrowRight size={16} />
                </button>
              )}
            </div>
          </>
        ) : (
          <motion.div
            initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Score display */}
            <div className="inline-flex flex-col items-center">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-4 border-gold/30">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(#C9A24E ${(totalScore / (questions.length * 4)) * 360}deg, transparent 0deg)`,
                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
                <div>
                  <span className="text-4xl font-bold dark:text-text-primary text-text-dark">
                    {totalScore}
                  </span>
                  <span className="text-lg dark:text-text-muted text-text-dark-muted">
                    /{questions.length * 4}
                  </span>
                </div>
              </div>
              <span className={`mt-4 text-xl font-bold ${category.color}`}>
                {category.label}
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-lg dark:text-text-muted text-text-dark-muted">
              {category.advice}
            </p>

            {/* Email capture */}
            {!submitted ? (
              <form onSubmit={handleSubmitEmail} className="mx-auto mt-8 max-w-md">
                <p className="mb-3 text-sm dark:text-text-muted text-text-dark-muted">
                  Get your detailed score breakdown and personalized recommendations:
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-text-muted" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-lg border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface bg-white py-3 pr-4 pl-10 text-sm dark:text-text-primary text-text-dark placeholder:text-text-muted focus:border-gold focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-obsidian transition-all hover:bg-gold-hover"
                  >
                    Send Results
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-8 flex items-center justify-center gap-2 text-success">
                <CheckCircle size={20} />
                <span className="font-medium">Check your inbox for your detailed breakdown!</span>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Section>
  );
}
