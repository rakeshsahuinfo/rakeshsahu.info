/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenType, Competency, BeyondTechItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoreCompetencies } from './components/CoreCompetencies';
import { JourneySection } from './components/JourneySection';
import { BeliefSection } from './components/BeliefSection';
import { BeyondTechSection } from './components/BeyondTechSection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { JourneyView } from './components/JourneyView';
import { LeadershipServicesView } from './components/LeadershipServicesView';
import { TechnologyAIView } from './components/TechnologyAIView';
import { InsightsView } from './components/InsightsView';
import { AboutView } from './components/AboutView';
import { ContactModal } from './components/ContactModal';
import { DetailModal } from './components/DetailModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [contactPrefilledTopic, setContactPrefilledTopic] = useState<string | undefined>();
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);
  const [selectedBeyondItem, setSelectedBeyondItem] = useState<BeyondTechItem | null>(null);
  const [initialMilestoneId, setInitialMilestoneId] = useState<string | undefined>();

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (topic?: string) => {
    setContactPrefilledTopic(topic);
    setContactModalOpen(true);
  };

  const handleExploreJourney = (milestoneId?: string) => {
    if (milestoneId) {
      setInitialMilestoneId(milestoneId);
    }
    setCurrentScreen('journey');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCompetency = (competency: Competency) => {
    setSelectedCompetency(competency);
  };

  const handleSelectBeyondItem = (item: BeyondTechItem) => {
    setSelectedBeyondItem(item);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] text-[#dce2f6] selection:bg-[#4fdbc8]/25 selection:text-[#4fdbc8] relative">
      {/* Fixed Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact('Leadership Advisory')}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-[84px] md:pt-[104px] pb-12">
        {currentScreen === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* 1. Hero Section */}
            <HeroSection
              onExploreJourney={() => handleExploreJourney()}
              onOpenConnect={() => handleOpenContact('Leadership Advisory')}
            />

            {/* 2. Core Competencies Bento Grid */}
            <CoreCompetencies onSelectCompetency={handleSelectCompetency} />

            {/* 3. A Career That Didn't Follow a Straight Line */}
            <JourneySection
              onExploreFullJourney={() => handleExploreJourney()}
              onSelectMilestone={(id) => handleExploreJourney(id)}
            />

            {/* Divider */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28">
              <hr className="border-[#dce2f6]/10" />
            </div>

            {/* 4. What I Believe */}
            <BeliefSection />

            {/* Divider */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28">
              <hr className="border-[#dce2f6]/10" />
            </div>

            {/* 5. Beyond Technology */}
            <BeyondTechSection
              onDiscoverMore={() => handleNavigate('about')}
              onSelectItem={handleSelectBeyondItem}
            />

            {/* Divider */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-20 md:mb-28">
              <hr className="border-[#dce2f6]/10" />
            </div>

            {/* 6. Let's Connect */}
            <ConnectSection
              onStartConversation={() => handleOpenContact('Leadership Advisory')}
            />
          </div>
        )}

        {/* Dedicated Screen: Journey */}
        {currentScreen === 'journey' && (
          <JourneyView
            onBackToHome={() => handleNavigate('home')}
            onOpenContact={() => handleOpenContact('Leadership Advisory')}
            initialMilestoneId={initialMilestoneId}
          />
        )}

        {/* Dedicated Screen: Leadership & Services */}
        {(currentScreen === 'leadership' || currentScreen === 'services') && (
          <LeadershipServicesView
            onOpenContact={(topic) => handleOpenContact(topic)}
          />
        )}

        {/* Dedicated Screen: Technology & AI */}
        {currentScreen === 'technology-ai' && (
          <TechnologyAIView />
        )}

        {/* Dedicated Screen: Insights */}
        {currentScreen === 'insights' && (
          <InsightsView />
        )}

        {/* Dedicated Screen: About */}
        {currentScreen === 'about' && (
          <AboutView
            onOpenContact={() => handleOpenContact('General Inquiry')}
            onExploreJourney={() => handleExploreJourney()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact('Leadership Advisory')}
      />

      {/* Interactive Contact & Conversation Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        prefilledTopic={contactPrefilledTopic}
      />

      {/* Interactive Detail Modal for Competencies and Beyond Tech */}
      <DetailModal
        competency={selectedCompetency}
        beyondItem={selectedBeyondItem}
        onClose={() => {
          setSelectedCompetency(null);
          setSelectedBeyondItem(null);
        }}
        onOpenContact={(topic) => handleOpenContact(topic)}
      />
    </div>
  );
}
