import { SEO } from '@/components/seo/SEO';
import { Hero } from '@/components/home/Hero';
import { Reality } from '@/components/home/Reality';
import { System } from '@/components/home/System';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { HowWeWork } from '@/components/home/HowWeWork';
import { GrowthScoreQuiz } from '@/components/quiz/GrowthScoreQuiz';
import { InsightsPreview } from '@/components/home/InsightsPreview';
import { AboutPreview } from '@/components/home/AboutPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Reality />
      <System />
      <ServicesGrid />
      <HowWeWork />
      <GrowthScoreQuiz />
      <InsightsPreview />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
