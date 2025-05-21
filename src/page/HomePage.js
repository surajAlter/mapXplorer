import React from "react";
import Sidebar from "../components/Sidebar";
import WelcomeSection from "../components/WelcomeSection";
import SponsorSection from "../components/SponsorSections";
import ClientFeedback from "../components/ClientFeedback";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold">
        Welcome to MapXplorer
      </h1>

      {/* Sidebar and Main Content */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row gap-6">
        <Sidebar />
        <main >
          <WelcomeSection />
        </main>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-300" />

      {/* Client Feedback Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-4">What Our Clients Say</h2>
        <ClientFeedback />
      </div>

      {/* Sponsor Section */}
      <div className="container mx-auto px-6 mt-10 mb-10">
        <SponsorSection />
      </div>
    </div>
  );
};

export default HomePage;
