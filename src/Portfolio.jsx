import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ===== HERO SECTION ===== */}
        <header className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between gap-8 mb-20">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
              Tanishq Agarwal
            </h1>
            <p className="mt-3 text-lg text-gray-400">
              Backend Engineer • IIT Kharagpur • Urban Company
            </p>
        
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="mailto:tanishqagarwal10@gmail.com"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText("tanishqagarwal10@gmail.com");
                  const toast = document.createElement("div");
                  toast.innerText = "📋 Email copied to clipboard";
                  toast.style.position = "fixed";
                  toast.style.bottom = "30px";
                  toast.style.left = "50%";
                  toast.style.transform = "translateX(-50%)";
                  toast.style.background = "#4f46e5"; // indigo-600
                  toast.style.color = "white";
                  toast.style.padding = "10px 18px";
                  toast.style.borderRadius = "8px";
                  toast.style.fontSize = "14px";
                  toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                  toast.style.zIndex = 9999;
                  toast.style.opacity = "0";
                  toast.style.transition = "opacity 0.3s ease";
                  document.body.appendChild(toast);
                  setTimeout(() => (toast.style.opacity = "1"), 10);
                  setTimeout(() => {
                    toast.style.opacity = "0";
                    setTimeout(() => toast.remove(), 300);
                  }, 2000);
                }}
                className="inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-600/40"
              >
                Email
              </a>

        
              <a
                href="https://www.linkedin.com/in/tanishq-agarwal-01a8881a0/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-indigo-500 text-indigo-400 rounded-full hover:bg-indigo-500/10 transition-all"
              >
                LinkedIn
              </a>
        
              <a
                href="https://github.com/TanishqAgarwal"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-gray-600 rounded-full hover:bg-gray-700/60 transition-all"
              >
                GitHub
              </a>
        
              <a
                href="/Tanishq%20Agarwal%20Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-violet-500 text-violet-400 rounded-full hover:bg-violet-500/10 transition-all"
              >
                Resume
              </a>
            </div>
          </div>
        
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 p-[3px] shadow-xl shadow-indigo-700/30">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold text-indigo-400">
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
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-indigo-600/40 transition-all hover:shadow-lg hover:shadow-indigo-600/20">
              <h2 className="text-2xl font-semibold text-indigo-400">About</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Backend-focused software engineer experienced in building scalable,
                data-driven systems and automation platforms. Skilled in TypeScript,
                Go, Kafka, Airflow, MongoDB, SQL, and microservices. Passionate about
                designing resilient systems that improve operational efficiency and experience.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-indigo-600/40 transition-all hover:shadow-lg hover:shadow-indigo-600/20">
              <h2 className="text-2xl font-semibold text-indigo-400">Experience</h2>
              <div className="mt-6 space-y-6 text-gray-300">
                <div>
                  <h3 className="font-semibold text-lg text-gray-100">
                    Software Developer (Backend) — Urban Company
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">May 2024 – Present</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built a parallel fulfillment system & intelligent matchmaking tunnel — scaled to 3× UC volumes, reducing Ops cost by 25%.</li>
                    <li>Implemented pricing engine for central accounting flows (Money Box) using Domain Driven Design.</li>
                    <li>Automated 80% of procurement lifecycle (~850 SKUs) through vendor & catalog lifecycle management.</li>
                    <li>Built scanning & reconciliation systems for real-time product tracking across partners.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-100">Standard Chartered — Intern</h3>
                  <p className="text-sm text-gray-500 mb-2">May 2023 – Jul 2023</p>
                  <p>Automated fund allocation using Python scripting, cutting ~80 monthly hours and improving accuracy.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-100">Niti.AI — Intern</h3>
                  <p className="text-sm text-gray-500 mb-2">Feb 2023 – Apr 2023</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built REST APIs in Go integrated with Next.js frontend; used gRPC & Protobuf.</li>
                    <li>Designed PostgreSQL schemas and built a React Flow UI for visual workflows.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-100">Evva Health — Contractor</h3>
                  <p className="text-sm text-gray-500 mb-2">Sep 2023 – Nov 2023</p>
                  <p>Developed secure React frontend with JWT auth and integrated chatbot UI using OpenAI APIs.</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-indigo-600/40 transition-all hover:shadow-lg hover:shadow-indigo-600/20">
              <h2 className="text-2xl font-semibold text-indigo-400">Projects</h2>
              <div className="mt-4 space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-gray-100">Rubik’s Cube Solver</h4>
                  <p>Developed solver models in C++ using BFS/DFS/IDA*; solved 8-move scrambles under 3s.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">Group Chat App</h4>
                  <p>Built real-time chat using Express + Socket.IO; deployed on Heroku supporting multi-room chats.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-indigo-600/40 transition-all hover:shadow-lg hover:shadow-indigo-600/20">
              <h2 className="text-2xl font-semibold text-indigo-400">Education & Achievements</h2>
              <p className="mt-4 text-gray-300">
                Dual Degree, Civil Engineering — IIT Kharagpur (2019–2024), CGPA 8.0
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-gray-300">
                <li>All India Rank 43 — Facebook Hackercup Round 1 (2022)</li>
                <li>Global Rank 1101 — Google Kickstart Round D (2022)</li>
                <li>Top 2.1% — JEE Mains 2019</li>
              </ul>
            </div>
          </section>

          {/* RIGHT COLUMN */}
          <aside className="space-y-8">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-indigo-600/40 transition-all hover:shadow-lg hover:shadow-indigo-600/20">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                {[
                  "TypeScript",
                  "Go",
                  "Python",
                  "C / C++",
                  "Kafka",
                  "Airflow",
                  "MongoDB",
                  "SQL",
                  "Microservices",
                  "Grafana / ELK",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-700/70 text-indigo-300 rounded-lg text-center hover:bg-indigo-600/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-500">
          Built with <span className="text-red-500">♥</span> by{" "}
          <span className="text-indigo-400 font-medium">Tanishq Agarwal</span> • ©{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
