/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { HowWeStartSection } from './components/HowWeStartSection';
import { AboutSection } from './components/AboutSection';
import { QuestionsSection } from './components/QuestionsSection';
import { FinalInvitationSection } from './components/FinalInvitationSection';
import { FooterSection } from './components/FooterSection';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF4E8] text-[#2B1D16] font-sans overflow-x-hidden selection:bg-[#C96A2B] selection:text-[#2B1D16]">
      {/* 1. Top bar */}
      <TopBar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. The problem, said in one sentence */}
        <ProblemSection />

        {/* 4. What I do: pinned section on laptop, swipe on phone */}
        <WhatIDoSection />

        {/* 5. Before and after */}
        <BeforeAfterSection />

        {/* 6. How we start */}
        <HowWeStartSection />

        {/* 7. About me: letter format */}
        <AboutSection />

        {/* 8. Questions */}
        <QuestionsSection />

        {/* 9. Final invitation on ink */}
        <FinalInvitationSection />
      </main>

      {/* 10. Footer on ink */}
      <FooterSection />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />
    </div>
  );
}
