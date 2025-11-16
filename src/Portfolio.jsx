import React, { useEffect, useState } from "react";

/**
 * Playful Tech-Nerd Portfolio
 * - Typewriter tagline
 * - Animated gradient blobs
 * - Emoji + witty microcopy
 * - Email anchor that opens mail client + copies email to clipboard + toast
 * - Resume opens in new tab
 *
 * Requires TailwindCSS (the project already has it)
 */

const EMAIL = "tanishqagarwal10@gmail.com";

export default function Portfolio() {
  const taglines = [
    "I make backend systems sing 🎶",
    "I test in production (because YOLO) 🔥",
    "I build things that don't freak out in production — often 🛠️",
    "Kafka whisperer • TypeScript appreciator",
    "Vibing while coding 🎧💻"
  ];

  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [toast, setToast] = useState(null);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    const full = taglines[idx % taglines.length];
    if (!isDeleting) {
      timeout = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 80);
      if (typed === full) timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else {
      timeout = setTimeout(() => setTyped(full.slice(0, typed.length - 1)), 40);
      if (typed === "") {
        setIsDeleting(false);
        setIdx((i) => (i + 1) % taglines.length);
      }
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, isDeleting, idx]);

  // toast auto-clear
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  // copy to clipboard with fallback
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast("📋 Email copied!");
    } catch (e) {
      // fallback: select & execCommand (older browsers)
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setToast("📋 Email copied!");
      } catch {
        setToast("❗ Couldn't copy. Please copy manually.");
      } finally {
        ta.remove();
      }
    }
  };

  const onEmailClick = (e) => {
    // Let anchor open mail client normally; also copy to clipboard and show toast
    copyEmail();
  };

  return (
    <div className="min-h-screen relative bg-[#071024] text-slate-100 antialiased overflow-hidden">
      {/* floating blobs */}
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-400/20 blur-3xl animate-blob slow" />
        <div className="absolute right-0 top-24 w-80 h-80 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-400/10 blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute left-1/4 bottom-0 w-56 h-56 rounded-full bg-gradient-to-r from-cyan-400/15 to-indigo-500/10 blur-2xl animate-blob animation-delay-4000" />
      </div>

      <style>{`
        /* small custom keyframes for blob motion and subtle tilt */
        @keyframes blob {
          0% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-12px) scale(1.05); }
          66% { transform: translateY(8px) scale(0.98); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-blob { animation: blob 6s infinite; }
        .slow { animation-duration: 9s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        /* tiny tilt hover for project cards */
        .tilt:hover { transform: translateY(-6px) rotate(-0.6deg) scale(1.01); }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* header */}
        <header className="flex items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-2xl font-extrabold text-white shadow-lg transform-gpu">
              T
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                hey, i'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">Tanishq</span> 👋
              </h1>
              <div className="mt-1 text-sm text-slate-300">
                <span className="inline-block mr-2">backend engineer</span>
                <span className="inline-block px-2 py-0.5 ml-2 bg-slate-800/60 rounded-full text-xs">iit kgp</span>
                <span className="inline-block px-2 py-0.5 ml-2 bg-slate-800/60 rounded-full text-xs">urban company</span>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <a
              href="/Tanishq%20Agarwal%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-full text-sm font-medium bg-slate-700/40 hover:bg-slate-700/60 transition"
            >
              Resume ↗
            </a>

            {/* Email as anchor styled as a chip/button; works reliably */}
            <a
              href={`mailto:${EMAIL}`}
              onClick={onEmailClick}
              className="px-3 py-2 rounded-full text-sm font-medium bg-indigo-600/90 hover:bg-indigo-500 transition-shadow shadow-md"
            >
              ✉️ Email
            </a>
          </nav>
        </header>

        {/* hero / tagline */}
        <section className="bg-gradient-to-r from-slate-800/50 to-slate-900/40 border border-slate-700/40 rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold">
                I build resilient backends <span className="text-amber-300">with personality</span> ✨
              </h2>
              <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed">
                Systems that scale, scripts that save time, and the occasional hack that becomes a feature.
                Below are a few things I tinker with — and some stories behind the scars. 🧪
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="text-sm text-slate-300/80">current mood</div>
                <div className="px-3 py-1 bg-slate-800/60 rounded-full text-sm text-indigo-200 font-medium shadow-sm">
                  {typed}
                  <span className="inline-block ml-1 text-indigo-300">▍</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-700/30 via-fuchsia-600/20 to-pink-600/20 shadow-xl border border-slate-700/40 hover:shadow-pink-500/20 transition-all transform-gpu hover:scale-[1.02]">
                <h3 className="text-slate-100 font-semibold text-sm mb-3 uppercase tracking-wide">
                  what i love
                </h3>
                <ul className="space-y-2 text-base text-slate-200 font-medium">
                  <li>🧠 overthinking life </li>
                  <li>🚀 shipping systems that scale </li>
                  <li>🤖 breaking things, then fixing better(just kidding😛) </li>
                </ul>
                <div className="mt-3 text-xs text-slate-400 italic">
                  fueled by coffee • deployed at odd hours ☕
                </div>
              </div>

              <div className="hidden md:block p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex-col items-center justify-center">
                <div className="text-sm text-slate-400">available for</div>
                <div className="mt-2 text-base text-emerald-300 font-medium">🧬 building weird things with AI</div>
              </div>
            </div>
          </div>
        </section>

        {/* main grid */}
        <main className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* left (spans 2) */}
          <section className="md:col-span-2 space-y-6">
            {/* Experience card */}
            <div className="tilt bg-slate-800/50 border border-slate-700/40 p-6 rounded-2xl hover:shadow-2xl transition transform">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Urban Company — Software Developer (Backend)</h3>
                  <div className="mt-1 text-sm text-slate-400">May 2024 — Present</div>
                </div>
                <div className="text-sm text-slate-300">👨‍💻 day-to-day</div>
              </div>

              <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
                <li>Built a parallel-fulfillment & matchmaking system — handled 3× demand safely.</li>
                <li>Pricing engine & money flows: improved reconciliation and made accountants smile.</li>
                <li>Automated vendor lifecycle & SKU cataloging — saved ops hours monthly.</li>
              </ul>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <article className="tilt bg-gradient-to-br from-indigo-700/10 to-pink-700/6 p-5 rounded-xl border border-slate-700/30 hover:shadow-2xl transition">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-100">Rubik's Cube Solver</h4>
                  <div className="text-sm text-amber-300">C++ • algos</div>
                </div>
                <p className="mt-2 text-slate-300 text-sm">Search algorithms (BFS/IDA*) — fast solves, nerdy math.</p>
                <div className="mt-3 text-xs text-slate-400">fun fact: tuned on coffee ☕️</div>
              </article>

              <article className="tilt bg-gradient-to-br from-cyan-700/6 to-indigo-700/8 p-5 rounded-xl border border-slate-700/30 hover:shadow-2xl transition">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-100">Realtime Group Chat</h4>
                  <div className="text-sm text-emerald-300">Node • Socket.IO</div>
                </div>
                <p className="mt-2 text-slate-300 text-sm">Full-duplex chats with rooms — deployed for small teams.</p>
                <div className="mt-3 text-xs text-slate-400">pro tip: websockets > polling</div>
              </article>
            </div>
            
            {/* Git Contributions Screenshot */}
            <div className="tilt bg-slate-800/50 border border-slate-700/40 p-6 rounded-2xl hover:shadow-2xl transition">
              <h3 className="text-lg font-semibold mb-3">my git vibes 📊</h3>
              <p className="text-slate-300 text-sm mb-4">
                A quick snapshot of my contribution graph — proof that I do touch grass :)
              </p>
            
              <img
                src="/git_graph.png"
                alt="Git contribution heatmap"
                className="rounded-xl shadow-md w-full"
              />
            </div>


            {/* fun terminal-ish area */}
            <div className="tilt bg-slate-900/60 border border-slate-700/40 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="text-sm text-emerald-300 font-mono">~$</div>
                <div className="text-xs text-slate-400">recent hack</div>
              </div>
              <div className="mt-3 font-mono text-sm text-slate-300 bg-slate-800/40 p-3 rounded">
                git commit -m "fix: stop leaks in fulfillment pipeline" <span className="text-slate-400">// pushed at 02:14am</span>
              </div>
            </div>
          </section>

          {/* right column */}
          <aside className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700/40 p-5 rounded-xl">
              <h5 className="text-sm text-amber-300 font-semibold">skills</h5>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  "TypeScript",
                  "Kafka",
                  "Kibana",
                  "Grafana",
                  "Microservices",
                  "Airflow",
                  "MongoDB",
                  "SQL",
                  "C/C++",
                  "Go",
                ].map((s) => (
                  <div key={s} className="px-2 py-1 bg-slate-900/30 rounded text-sm text-slate-200">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/40 p-5 rounded-xl">
              <h5 className="text-sm text-amber-300 font-semibold">contact</h5>
              <div className="mt-3 text-slate-300 text-sm">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{EMAIL}</div>
                  <button
                    onClick={copyEmail}
                    className="ml-3 px-2 py-1 text-xs rounded bg-indigo-600 hover:bg-indigo-500"
                  >
                    copy
                  </button>
                </div>

                <div className="mt-3 text-xs text-slate-400">
                  open to freelance & full-time chats — prefer backend/platform roles.
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/40 p-5 rounded-xl">
              <h5 className="text-sm text-amber-300 font-semibold">misc</h5>
              <div className="mt-3 text-slate-300 text-sm">
                <div>guitar • piano • badminton • running • treks • solo paragliding someday</div>
              </div>
            </div>
          </aside>
        </main>

        {/* footer */}
        <footer className="mt-8 text-center text-slate-400 text-sm">
          made with ❤️ — <span className="text-indigo-300 font-medium">Tanishq</span> · crafted for humans, not robots
        </footer>
      </div>

      {/* toast */}
      {toast && (
        <div
          className="fixed left-1/2 -translate-x-1/2 bottom-8 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn"
          role="status"
        >
          {toast}
        </div>
      )}

      <style>{`
        /* toast animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 240ms ease-out; }

        /* slight card transitions */
        .tilt { transition: transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms; }
      `}</style>
    </div>
  );
}
