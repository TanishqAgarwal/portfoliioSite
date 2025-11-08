import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ===== HERO SECTION ===== */}
        <header className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between gap-8 mb-16">
  <div>
    <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
      Tanishq Agarwal
    </h1>
    <p className="mt-3 text-lg text-gray-600">
      Backend Engineer • IIT Kharagpur • Urban Company
    </p>
    <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
      <button
        onClick={() =>
          (window.location.href =
            "mailto:tanishqagarwal10@gmail.com?subject=Hi%20Tanishq!&body=I%20came%20across%20your%20portfolio%20and...")
        }
        className="px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
      >
        Email
      </button>

      <a
        href="https://www.linkedin.com/in/tanishq-agarwal-01a8881a0/"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2.5 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/TanishqAgarwal"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
      >
        GitHub
      </a>

      <a
        href="/Tanishq%20Agarwal%20Resume.pdf"
        download
        className="px-5 py-2.5 border border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition-all shadow-sm hover:shadow-md"
      >
        Download Resume
      </a>
    </div>
  </div>

  <div className="relative">
    <div className="w-36 h-36 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 p-[3px] shadow-lg">
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-indigo-500">
        T
      </div>
    </div>
  </div>
</header>


        {/* ===== MAIN CONTENT ===== */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT COLUMN */}
          <section className="md:col-span-2 space-y-10">
            {/* About */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-indigo-600">About</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Backend-focused software engineer experienced in building scalable,
                data-driven systems and automation platforms. Skilled in TypeScript,
                Go, Kafka, Airflow, MongoDB, SQL, and microservices. Passionate about
                designing resilient systems that improve operational efficiency and experience.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-indigo-600">Experience</h2>
              <div className="mt-6 space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg">Software Developer (Backend) — Urban Company</h3>
                  <p className="text-sm text-gray-500 mb-2">May 2024 – Present</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built a parallel fulfillment system & matchmaking tunnel capturing non-serviceable demand — scaled to 3× UC volumes & reduced Ops cost by 25%.</li>
                    <li>Implemented a pricing engine for central accounting flows (Money Box) and promoted Domain Driven Design.</li>
                    <li>Automated 80% of procurement lifecycle (~850 SKUs) through vendor & catalog lifecycle management.</li>
                    <li>Built scanning & reconciliation systems for real-time product tracking across partners.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Standard Chartered — Intern</h3>
                  <p className="text-sm text-gray-500 mb-2">May 2023 – Jul 2023</p>
                  <p>Automated fund allocation using Python scripting, cutting ~80 monthly hours and improving accuracy.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Niti.AI — Intern</h3>
                  <p className="text-sm text-gray-500 mb-2">Feb 2023 – Apr 2023</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built REST APIs in Go integrated with Next.js frontend; used gRPC & Protobuf.</li>
                    <li>Designed PostgreSQL schemas and built a React Flow UI for visual workflows.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Evva Health — Contractor</h3>
                  <p className="text-sm text-gray-500 mb-2">Sep 2023 – Nov 2023</p>
                  <p>Built secure React frontend with JWT auth and integrated chatbot UI using OpenAI APIs.</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-indigo-600">Projects</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold">Rubik’s Cube Solver</h4>
                  <p>Developed solver models in C++ using BFS/DFS/IDA*; solved 8-move scrambles under 3s.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Group Chat App</h4>
                  <p>Built real-time chat using Express + Socket.IO; deployed on Heroku supporting multi-room chats.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-indigo-600">Education & Achievements</h2>
              <p className="mt-4 text-gray-700">Dual Degree, Civil Engineering — IIT Kharagpur (2019–2024), CGPA 8.0</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                <li>All India Rank 43 — Facebook Hackercup Round 1 (2022)</li>
                <li>Global Rank 1101 — Google Kickstart Round D (2022)</li>
                <li>Top 2.1% — JEE Mains 2019</li>
              </ul>
            </div>
          </section>

          {/* RIGHT COLUMN */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Skills</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                {["TypeScript", "Go", "Python", "C / C++", "Kafka", "Airflow", "MongoDB", "SQL", "Microservices", "Grafana / ELK"].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-center">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          Built with <span className="text-red-500">♥</span> by Tanishq Agarwal • © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
