const rhythm = [
  "ML optimization",
  "regularization",
  "hyperparameter tuning",
  "BCI",
  "PhD track",
  "startup founder",
  "chess player",
  "CS major",
];

const history = [
  {
    title: "Machine learning",
    text: "I love machine learning, especially optimization, regularization, and hyperparameter tuning.",
  },
  {
    title: "School accomplishments",
    text: "I built a strong academic record by leaning into hard classes, technical projects, and consistent effort.",
  },
  {
    title: "Part-time work",
    text: "I balanced school with part-time work and picked up responsibility, speed, and better time management.",
  },
];

const links = [
  "about me",
  "past activities",
  "future plans",
  "career direction",
  "hobbies",
];

export default function Home() {
  return (
    <main className="retro-shell relative min-h-screen overflow-hidden text-[#1f2937]">
      <div className="retro-grid absolute inset-0 opacity-15" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-[#9aa4b2] bg-[#f4efe6] px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-[#4b5563]">
          Brian Mohseni / CS major / machine learning / BCI / startup founder
        </div>

        <header className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="retro-panel border border-[#9aa4b2] bg-[#fcfaf7] p-5 shadow-[6px_6px_0_rgba(31,41,55,0.18)]">
            <p className="mb-4 inline-flex items-center gap-2 border border-[#c7cdd6] bg-[#f6f7f9] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#52606d]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#8aa0b7]" />
              personal page
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Brian Mohseni
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#374151] sm:text-[15px]">
              I am Brian Mohseni, a CS major building toward machine learning
              research and brain-computer interfaces. I want work that moves
              fast, thinks deeply, and actually ships.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {rhythm.map((item) => (
                <span
                  key={item}
                  className="border border-[#cbd5e1] bg-[#eef2f7] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#475569]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="retro-panel border border-[#9aa4b2] bg-[#faf8f2] p-5 shadow-[6px_6px_0_rgba(31,41,55,0.18)]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#6b7280]">
              quick bio
            </p>
            <div className="mt-4 space-y-4">
              <div className="border border-[#d6dae0] bg-white p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#2563eb]">
                  planning ahead
                </p>
                <p className="mt-2 text-sm leading-6 text-[#374151]">
                  I am planning to pursue a PhD and keep moving toward research
                  that connects intelligence, signal processing, and human
                  experience.
                </p>
              </div>

              <div className="border border-[#d6dae0] bg-white p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#2563eb]">
                  other stuff
                </p>
                <p className="mt-2 text-sm leading-6 text-[#374151]">
                  Startup founder. Chess player. I like sharp ideas, strong
                  execution, and weirdly elegant solutions.
                </p>
              </div>
            </div>
          </aside>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="retro-panel border border-[#9aa4b2] bg-[#fbfbf8] p-5 text-[#111827] shadow-[6px_6px_0_rgba(31,41,55,0.18)]">
            <h2 className="text-lg font-semibold tracking-tight">
              Past activities
            </h2>
            <div className="mt-5 grid gap-4">
              {history.map((item) => (
                <div key={item.title} className="border border-[#d6dae0] bg-white p-4">
                  <h3 className="text-sm font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="retro-panel border border-[#9aa4b2] bg-[#fbfbf8] p-5 shadow-[6px_6px_0_rgba(31,41,55,0.18)]">
            <h2 className="text-lg font-semibold tracking-tight text-[#111827]">
              Current direction
            </h2>
            <div className="mt-5 grid gap-4">
              <div className="border border-[#d6dae0] bg-white p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#2563eb]">
                  academic focus
                </p>
                <p className="mt-2 text-sm leading-6 text-[#374151]">
                  Vertical integration from sand to Python, with a focus on
                  understanding the full stack from hardware foundations to
                  software systems.
                </p>
              </div>

              <div className="border border-[#d6dae0] bg-white p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#2563eb]">
                  career
                </p>
                <p className="mt-2 text-sm leading-6 text-[#374151]">
                  CEO and cofounder of Kronos Labs, building toward research
                  and products that connect machine learning and brain-computer
                  interfaces.
                </p>
                <a
                  href="https://kronoslabs.org"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm text-[#2563eb] underline decoration-[#93c5fd] underline-offset-4 hover:text-[#1d4ed8]"
                >
                  kronoslabs.org
                </a>
              </div>

              <div className="border border-[#d6dae0] bg-white p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#2563eb]">
                  page map
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {links.map((link) => (
                    <span
                      key={link}
                      className="border border-[#cbd5e1] bg-[#f8fafc] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#475569]"
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="retro-panel border border-[#9aa4b2] bg-[#faf8f2] p-5 shadow-[6px_6px_0_rgba(31,41,55,0.18)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#6b7280]">
                bci section
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-[#111827]">
                Brain-computer interfaces
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#4b5563]">
              BCI is where my research interests get very specific.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="border border-[#d6dae0] bg-white p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#2563eb]">
                research experience
              </p>
              <p className="mt-2 text-sm leading-6 text-[#374151]">
                I have done research in Cognitive Science labs at UNCC, where I
                learned how to think about neural data, behavior, and human
                cognition with more rigor.
              </p>
            </div>

            <div className="border border-[#d6dae0] bg-white p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#2563eb]">
                lab building
              </p>
              <p className="mt-2 text-sm leading-6 text-[#374151]">
                I founded my own BCI lab because I wanted a space focused on
                experimentation, signal analysis, and long-term interface
                ideas.
              </p>
            </div>
          </div>
        </section>

        <section className="retro-panel border border-[#9aa4b2] bg-white p-5 text-[#111827] shadow-[6px_6px_0_rgba(31,41,55,0.18)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#6b7280]">
                profile notes
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight">
                A few notes
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#4b5563]">
              I like building in public, keeping the goals visible, and making
              the page feel alive instead of polished-to-death.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="border border-[#d6dae0] bg-[#f8fafc] p-4">
              <p className="text-sm font-semibold tracking-wide">
                machine learning
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                I especially like optimization, regularization, and tuning
                hyperparameters until a model behaves the way it should.
              </p>
            </div>
            <div className="border border-[#d6dae0] bg-[#f8fafc] p-4">
              <p className="text-sm font-semibold tracking-wide">
                backers
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                Backers: 1517. Big thanks to Nick Arnett from 1517 for backing
                my work through Medici.
              </p>
            </div>
            <div className="border border-[#d6dae0] bg-[#f8fafc] p-4">
              <p className="text-sm font-semibold tracking-wide">
                hobbies
              </p>
              <p className="mt-2 text-sm leading-6 text-[#4b5563]">
                Chess, startup thinking, research rabbit holes, and anything
                that rewards patience plus pattern recognition.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
