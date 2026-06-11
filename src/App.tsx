/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { DeepDive } from './components/DeepDive';
import { NotificationsFeature } from './components/NotificationsFeature';
import { DownloadSection } from './components/DownloadSection';
import { FAQ } from './components/FAQ';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <CustomCursor />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <DeepDive />
        <NotificationsFeature />
        <JourneyTimeline />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

