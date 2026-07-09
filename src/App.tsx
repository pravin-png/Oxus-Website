/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Heritage from "./components/Heritage";
import TechIntegration from "./components/TechIntegration";
import RemoteStaffing from "./components/RemoteStaffing";
import Advantage from "./components/Advantage";
import InquiryTerminal from "./components/InquiryTerminal";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

export default function App() {
  const [currentView, setCurrentView] = useState<"main" | "privacy">("main");

  const scrollToContact = () => {
    if (currentView !== "main") {
      setCurrentView("main");
      setTimeout(() => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const scrollToIntegration = () => {
    if (currentView !== "main") {
      setCurrentView("main");
      setTimeout(() => {
        const integrationSection = document.querySelector("#integration");
        if (integrationSection) {
          integrationSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const integrationSection = document.querySelector("#integration");
      if (integrationSection) {
        integrationSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col antialiased">
      {/* Premium Navigation Header */}
      <Header 
        onContactClick={scrollToContact} 
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      <main className="flex-grow">
        {currentView === "privacy" ? (
          <PrivacyPolicy onBackToHome={() => setCurrentView("main")} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onExploreClick={scrollToIntegration} />

            {/* Our Heritage Section */}
            <Heritage />

            {/* Foundational Technology Integration Grid */}
            <TechIntegration onLearnMoreClick={scrollToContact} />

            {/* Integrated Remote Staffing Metrics */}
            <RemoteStaffing />

            {/* The Oxus Advantage */}
            <Advantage />

            {/* Inquiry Terminal Form */}
            <InquiryTerminal />
          </>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer onPrivacyClick={() => setCurrentView("privacy")} />
    </div>
  );
}
