import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header / Hero */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Tanishq Agarwal</h1>
            <p className="mt-2 text-lg text-gray-600">Backend Engineer • IIT Kharagpur • Urban Company</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:tanishqagarwal10@gmail.com" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">Email</a>
              <a href="https://www.linkedin.com/in/tanishq-agarwal-01a8881a0/" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md">LinkedIn</a>
              <a href="https://github.com/TanishqAgarwal" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border border-gray-300 rounded-md">GitHub</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-gray-500">Based in India</div>
              <div className="mt-1 text-sm text-gray-500">Open to backend & platform roles</div>
            </div>
          </div>
        </header>

        <main className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <section className="md:col-span-2 space-y-8">
            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Backend-focused software engineer with experience building scalable, data-driven systems and
                automation platforms. Skilled in TypeScript, Go, Kafka, Airflow, MongoDB, SQL and microservices.
                Passionate about designing resilient systems that improve operational efficiency and experience.
              </p>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold">Experience</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Software Developer (Backend) — Urban Company</h3>
                      <div className="text-sm text-gray-500">May 2024 – Present</div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-3 text-gray-700">
                    <li>Built a parallel fulfillment system and intelligent matchmaking tunnel to capture demand from non-serviceable areas — scaled to ~3x of UC-serviceable request volumes and reduced Ops costs by 20–25%.</li>
                    <li>Implemented a pricing engine for central accounting flows (Money Box) and promoted Domain Driven Design for scalable systems.</li>
                    <li>Engineered vendor & catalog lifecycle management to automate ~80% of procurement (~850 SKUs).</li>
                    <li>Designed product scanning & reconciliation systems to track real-time product usage across partners and ensure traceability in the supply chain.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Standard Chartered — Intern</h3>
                      <div className="text-sm text-gray-500">May 2023 – Jul 2023</div>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">Automated a manual fund allocation process using Python scripting, cutting ~80 monthly hours and improving accuracy across stakeholders.</p>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Niti.AI — Intern</h3>
                      <div className="text-sm text-gray-500">Feb 2023 – Apr 2023</div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-3 text-gray-700">
                    <li>Built REST APIs in Go, integrated with Next.js frontend; used gRPC & Protobuf for consistent client-server contracts.</li>
                    <li>Designed PostgreSQL schemas for element libraries and built a React Flow UI for user-created flows.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Evva Health — Contractor</h3>
                      <div className="text-sm text-gray-500">Sep 2023 – Nov 2023</div>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">Built a secure React frontend with JWT auth and a mobile chatbot UI integrated with OpenAI services.</p>
                </div>
              </div>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <div className="mt-4 space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold">Rubik’s Cube Solver</h4>
                  <p className="mt-1">Implemented 3 models in C++ and used search algorithms (BFS/DFS/IDA*) — solving under 3s for 8-move scrambles and under 10s for 13-move scrambles.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Group Chat Application</h4>
                  <p className="mt-1">Built a real-time chat app using Express + Socket.IO and deployed it on Heroku. Supported multiple chat rooms with full-duplex communication.</p>
                </div>

              </div>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold">Education & Achievements</h2>
              <p className="mt-3 text-gray-700">Dual Degree, Civil Engg — IIT Kharagpur (2019–2024), CGPA 8.0</p>
              <ul className="list-disc list-inside mt-3 text-gray-700">
                <li>All India Rank 43 — Facebook Hackercup Round 1 (2022)</li>
                <li>Global Rank 1101 — Google Kickstart Round D (2022)</li>
                <li>Top 2.1% in JEE Mains 2019</li>
              </ul>
            </article>

          </section>

          {/* Right column */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>TypeScript</div>
                <div>Go</div>
                <div>Python</div>
                <div>C / C++</div>
                <div>Kafka</div>
                <div>Airflow</div>
                <div>MongoDB</div>
                <div>SQL</div>
                <div>Microservices</div>
                <div>Grafana / ELK</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-gray-700">Email: tanishqagarwal10@gmail.com</p>
              <p className="mt-1 text-sm text-gray-700">Phone: +91 70443 23958</p>
              <div className="mt-4 flex gap-3">
                <a href="https://www.stopstalk.com/user/profile/tanishqagarwal" target="_blank" rel="noreferrer" className="text-sm underline">StopStalk</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-sm text-gray-700">
              <h3 className="font-semibold">Resume</h3>
              <p className="mt-2">Download a copy: <a href="/Tanishq%20Agarwal%20Resume.pdf" className="text-indigo-600 underline">Resume (PDF)</a></p>
            </div>
          </aside>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-500">
          Built with ♥ — Tanishq Agarwal • © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
