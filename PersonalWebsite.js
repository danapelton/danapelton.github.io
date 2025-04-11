import React from "react";

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <img
          src="/mnt/data/A_digital_photograph_features_a_close-up_portrait_.png"
          alt="Dana D. Pelton"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold">Dana D. Pelton</h1>
        <p className="text-lg mt-2">Strategic Executive Administrator | Project & Event Leader | C-Suite Partner</p>
        <a href="DanaPelton_Resume.pdf" download className="block text-blue-600 mt-2 hover:underline">📄 Download My Résumé</a>
      </header>

      <section className="max-w-4xl mx-auto py-10 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          I’m a strategic executive operations leader with a passion for helping senior executives lead with clarity, focus, and impact. I’ve supported visionary C-suite leaders — including the former COOs of Virgin Atlantic and Delta Air Lines — across startups and global organizations such as GitLab, Cruise, and other mission-driven companies. My experience spans board-level coordination, strategic initiative support, internal communications, and culture-building at scale.
        </p>
        <p className="mb-4">
          What sets me apart isn’t just my operational strength — it’s the way I lead with intuition, discretion, and a deep care for people. I solve problems before they surface, design systems that make work smoother, and bring warmth into the room even during high-pressure moments. I check on team members when they’re quiet. I keep executives grounded in what matters most. And I make sure no one feels like they’re doing it alone.
        </p>
        <p className="mb-4">
          After years of being “more than an EA,” I’m stepping fully into the strategic partner I’ve always been. I’m not chasing a title — I’m looking for a mission to support and a team where my presence makes a difference.
        </p>
        <p>
          If you’re building something bold and need a steady, thoughtful right hand who brings clarity, connection, and action — I’d love to connect.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-10 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Sample Work</h2>
        <p className="mb-2">Take a look at a few examples of the strategic projects and events I’ve led:</p>
        <ul className="list-disc list-inside">
          <li>
            <a href="DanaPelton_RecognitionProgram2023.pdf" target="_blank" className="text-blue-600 hover:underline">
              📄 Recognition Program: Cruise Executive Engagement
            </a>
          </li>
          <li>
            <a href="Pelton_Cruise_Candidate_Project.pdf" target="_blank" className="text-blue-600 hover:underline">
              📄 Cruise Candidate Project: Strategic Onboarding & Planning
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
