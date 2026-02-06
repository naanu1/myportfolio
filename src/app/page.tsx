'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { IsometricScene } from '@/components/isometric/IsometricScene';
import { Floor } from '@/components/isometric/Floor';
import { ServerRack } from '@/components/objects/ServerRack';
import { HologramTable } from '@/components/objects/HologramTable';
import { MainMonitor } from '@/components/objects/MainMonitor';
import { BlueprintDesk } from '@/components/objects/BlueprintDesk';
import { ContactTerminal } from '@/components/objects/ContactTerminal';
import { AboutModal } from '@/components/modals/AboutModal';
import { SkillsModal } from '@/components/modals/SkillsModal';
import { ProjectsModal } from '@/components/modals/ProjectsModal';
import { ExperienceModal } from '@/components/modals/ExperienceModal';
import { ContactModal } from '@/components/modals/ContactModal';
import { IntroSequence } from '@/components/IntroSequence';
import { HelpOverlay } from '@/components/HelpOverlay';
import { HUDOverlay } from '@/components/HUDOverlay';
import { BackgroundRain } from '@/components/BackgroundRain';
import { usePortfolioStore } from '@/store/usePortfolioStore';

export default function Home() {
  const { activeZone } = usePortfolioStore();

  return (
    <>
      <IntroSequence />
      <HelpOverlay />
      <HUDOverlay />
      <BackgroundRain />

      <main className="portfolio-container">
        <IsometricScene>
          <Floor />
          <ServerRack />
          <HologramTable />
          <MainMonitor />
          <BlueprintDesk />
          <ContactTerminal />
        </IsometricScene>

        <AnimatePresence mode="wait">
          {activeZone === 'about' && <AboutModal key="about" />}
          {activeZone === 'skills' && <SkillsModal key="skills" />}
          {activeZone === 'projects' && <ProjectsModal key="projects" />}
          {activeZone === 'experience' && <ExperienceModal key="experience" />}
          {activeZone === 'contact' && <ContactModal key="contact" />}
        </AnimatePresence>
      </main>
    </>
  );
}
