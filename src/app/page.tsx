import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  Calendar,
  MapPin,
} from "lucide-react";

/* ─── Content data ────────────────────────── */

interface Experience {
  role: string;
  org: string;
  location?: string;
  date: string;
  status?: string;
  description: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    role: "Quantitative Researcher Intern",
    org: "Moreton Capital Partners",
    location: "Mexico City, M\u00e9xico",
    date: "Mar 2026 \u2013 Present",
    description: [
      "Engineering systematic research workflows for",
      "multi-horizon signal blending within commodity markets.",
      "Developing regime-aware portfolio optimization frameworks",
      "and risk-parity allocation models to navigate volatility,",
      "and architecting robust data engineering pipelines to",
      "ingest and process high-dimensional financial datasets",
      "for alpha extraction.",
    ].join(" "),
    tags: ["Portfolio Optimization", "Signal Blending", "Risk-Parity"],
  },
  {
    role: "Lead Researcher - Hybrid Asset Pricing Architecture",
    org: "Monterrey Institute of Technology",
    location: "Quer\u00e9taro, M\u00e9xico", 
    date: "Dec 2025 \u2013 Present",
    status: "Working Paper",
    description: [
      "Engineering a novel data-cleaning and engineering",
      "architecture utilizing a Multilayer Perceptron (MLP) to",
      "filter stochastic noise from financial text prior to",
      "processing by LLM or BERT-based systems. Designing",
      "high-fidelity preprocessing layers to isolate alpha signals",
      "in high-volatility asset classes and developing a hybrid",
      "Bi-LSTM architecture to integrate filtered sentiment scores",
      "into predictive pricing models.",
    ].join(" "),
    tags: ["Python", "PyTorch", "Bi-LSTM", "NLP", "Alpha Research"],
  },
  {
    role: "Research Software Developer",
    org: "Instituto Via Dise\u00f1o",
    location: "Quer\u00e9taro, M\u00e9xico",
    date: "Feb 2025 \u2013 May 2025",
    description: [
      "Engineered a constraint satisfaction scheduling",
      "algorithm for a campus of 150+ active users.",
      "Optimized PostgreSQL indexing strategies, reducing",
      "query latency by 40% during complex constraint",
      "evaluations. Integrated results into a real-time",
      "React visualization platform.",
    ].join(" "),
    tags: ["PostgreSQL", "CSP Algorithms", "React"],
  },
];

interface Metric {
  label: string;
  value: string;
  desc?: string;
}

interface Project {
  title: string;
  date: string;
  status?: string;
  abstract: string;
  tags: string[];
  metrics?: Metric[];
}

const projects: Project[] = [
  {
    title: "Hierarchical Commodity Portfolio Construction",
    date: "Mar 2026",
    abstract: [
      "Developed a two-stage backtesting engine for 10 commodity",
      "sectors over 162 weekly periods using SLSQP min-variance",
      "optimization, achieving max 7.7% annual volatility. Enforced",
      "KKT optimality for stable weight constraints and mplemented",
      "Ledoit-Wolf covariance shrinkage and a Stage A",
      "signal blending / Stage B cross-sector allocation pipeline",
      "that reduced Max Drawdown by 15%.",
    ].join(" "),
    metrics: [
      { label: "Adj. Sharpe", value: "4.02", desc: "Lo (2002)" },
      { label: "Calmar Ratio", value: "2.1" },
      { label: "Ann. Volatility", value: "\u2264 7.7%", desc: "Max" },
      { label: "Ann. Turnover", value: " 83%"},
    ],
    tags: ["Python", "SLSQP", "Ledoit-Wolf", "Portfolio Optimization", "Backtesting"],
  },
  {
    title: "OrbitGrow: Martian Plant Health Monitoring",
    date: "Mar 2026",
    status: "Syngenta @ START Hack \u2014 Top 5 Finalist (30 teams)",
    abstract: [
      "Engineered a real-time computer vision system to monitor",
      "crop health in Martian greenhouses, utilizing AWS SageMaker",
      "for autonomous stress detection. Developed a multi-modal",
      "data pipeline to process environmental telemetry and spectral",
      "imagery, enabling automated nutrient deficiency diagnosis",
      "in extraterrestrial environments.",
    ].join(" "),
    metrics: [
      { label: "Rank", value: "Top 5", desc: "out of 30 teams" },
      { label: "Inference", value: "Real-time", desc: "Stress Detection" },
      { label: "Platform", value: "AWS SageMaker" },
      { label: "Data", value: "Multi-modal", desc: "Telemetry + Spectral" },
    ],
    tags: ["Computer Vision", "AWS SageMaker", "Multi-Modal Pipelines", "Python"],
  },
  {
    title: "AquaHub: Predictive Drought Modeling & Crowdsourcing",
    date: "Feb 2026",
    abstract: [
      "Originally designed as a predictive ML model for",
      "drought patterns in CDMX using hydrological data.",
      "Pivoted to a crowdsourced reporting system to bridge",
      "data gaps. Designed the data ingestion pipeline to",
      "validate user reports against historical",
      "meteorological norms.",
    ].join(" "),
    metrics: [
      { label: "Accuracy", value: "70% \u2013 85%", desc: "5-Day Horizon" },
      { label: "Inference", value: "< 500ms" },
      { label: "Features", value: "14 indicators" },
      { label: "Source", value: "OpenWeather + Crowdsourced"},
    ],
    tags: ["Systemic Risk Modeling", "Data Pipelines", "Crowdsourcing"],
  },
  {
    title: "Bloomly: Global Bloom Detection System",
    date: "Oct 2025",
    status: "@ NASA Space Apps Hack",
    abstract: [
      "Engineered a LightGBM-based predictive model",
      "leveraging multi-spectral satellite imagery (GEE)",
      "and NASA POWER meteorological data. Conducted",
      "rigorous dimensionality reduction across 44 distinct",
      "ecological indicators to classify global bloom",
      "patterns with high precision (AUC/F1 validation).",
    ].join(" "),
    tags: ["Python", "LightGBM", "Remote Sensing (GEE)"],
    metrics: [
      { label: "ROC-AUC", value: "0.72\u20130.85" },
      { label: "F1 Score", value: "0.70\u20130.82" },
      { label: "Features", value: "44 indicators" },
      { label: "Source", value: "GEE + NASA POWER" },
    ],
  },
  {
    title: "Multi-Agent Simulation",
    date: "Aug 2025 \u2013 Sep 2025",
    abstract: [
      "Simulated autonomous agent behavior using Python",
      "(Mesa) and Unity to analyze strategic decision-making",
      "dynamics. Designed reward-based optimization functions",
      "within constrained state spaces, applying Monte Carlo",
      "sampling to identify emergent Nash equilibrium",
      "patterns.",
    ].join(" "),
    tags: ["Python", "Mesa", "Monte Carlo Simulation", "Game Theory"],
  },
];

/* ─── Components ──────────────────────────── */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={
        "inline-block font-mono text-[11px] leading-none " +
        "text-ink/50 bg-ink/[0.04] rounded-full px-2.5 py-1"
      }
    >
      {children}
    </span>
  );
}

function SidebarLink({
  href,
  icon: Icon,
  label,
  external,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        "flex items-center gap-2 text-sm text-ink/50 " +
        "transition-colors hover:text-accent hover:no-underline"
      }
    >
      <Icon size={14} strokeWidth={1.5} />
      {label}
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className={
        "font-serif text-sm uppercase tracking-[0.2em] " + "text-ink/40 mb-10"
      }
    >
      {children}
    </h2>
  );
}

function ProjectAbstract({ project }: { project: Project }) {
  return (
    <article>
      <div
        className={
          "flex flex-col sm:flex-row sm:items-baseline " +
          "sm:justify-between gap-1"
        }
      >
        <h3 className="font-serif text-lg font-semibold leading-snug">
          {project.title}
        </h3>
        <span
          className={
            "font-mono text-[11px] text-ink/40 " +
            "flex items-center gap-1.5 shrink-0"
          }
        >
          <Calendar size={11} strokeWidth={1.5} />
          {project.date}
        </span>
      </div>
      {project.status && (
        <p className="font-mono text-[11px] text-ink/40 mt-1">
          {project.status}
        </p>
      )}
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
        {project.abstract}
      </p>
      {project.metrics && (
        <div
          className={
            "mt-4 grid grid-cols-2 sm:grid-cols-4 " +
            "bg-ink/[0.02] border border-ink/[0.06] " +
            "rounded px-4 py-3 gap-y-3 gap-x-6"
          }
        >
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-serif text-[11px] text-ink/40">{m.label}</p>
              <p className="font-mono text-sm text-ink/80">{m.value}</p>
              {m.desc && (
                <p className="font-serif text-[10px] text-ink/30">{m.desc}</p>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </article>
  );
}

/* ─── Page ─────────────────────────────────── */

export default function Home() {
  return (
    <div className="mx-auto max-w-page px-6 py-16 md:py-24">
      <div className={"grid grid-cols-1 md:grid-cols-4 " + "gap-12 md:gap-16"}>
        {/* ━━ LEFT COLUMN: Sticky Sidebar ━━━ */}
        <aside className={"md:col-span-1 md:sticky md:top-24 md:self-start"}>
          <h1
            className={
              "font-serif text-3xl font-bold " + "tracking-tight leading-tight"
            }
          >
            Carlos
            <br />
            Manuel
            <br />
            Mart&iacute;nez
            <br />
            V&aacute;zquez
          </h1>

          <p className="mt-4 text-sm text-ink/50 leading-relaxed">
            Computer Science Student
            <br />@ Monterrey Institute of Technology
          </p>

          <p
            className={
              "mt-2 font-mono text-[11px] " + "text-ink/35 leading-relaxed"
            }
          >
            Quantitative Researcher
            <br />
          </p>

          <nav className="mt-8 flex flex-col gap-3">
            <SidebarLink
              href="mailto:c.mtnzvzqz@gmail.com"
              icon={Mail}
              label="Email"
            />
            <SidebarLink
              href="https://github.com/CsVazquezz"
              icon={Github}
              label="GitHub"
              external
            />
            <SidebarLink
              href="https://www.linkedin.com/in/c-vzqz/"
              icon={Linkedin}
              label="LinkedIn"
              external
            />
            <SidebarLink href="/CMMV_CV.pdf" icon={FileDown} label="Download CV" />
          </nav>

          <p
            className={
              "mt-12 font-mono text-[10px] " + "text-ink/20 hidden md:block"
            }
          >
            &copy; 2026
          </p>
        </aside>

        {/* ━━ RIGHT COLUMN: Scrollable Content ━━ */}
        <div className="md:col-span-3 flex flex-col gap-16">
          {/* ── Research Experience ──────── */}
          <section>
            <SectionHeading>Research Experience</SectionHeading>

            <div className="flex flex-col gap-10">
              {experiences.map((exp) => (
                <article key={exp.org + exp.date}>
                  <div
                    className={
                      "flex flex-col sm:flex-row " +
                      "sm:items-baseline sm:justify-between gap-1"
                    }
                  >
                    <h3 className="font-serif text-lg font-semibold">
                      {exp.role}
                    </h3>
                    <span
                      className={
                        "font-mono text-[11px] text-ink/40 " +
                        "flex items-center gap-1.5 shrink-0"
                      }
                    >
                      <Calendar size={11} strokeWidth={1.5} />
                      {exp.date}
                    </span>
                  </div>

                  <p
                    className={
                      "mt-1 text-sm text-ink/40 " + "flex items-center gap-1.5"
                    }
                  >
                    {exp.location && <MapPin size={12} strokeWidth={1.5} />}
                    {exp.org}
                    {exp.location && <> &mdash; {exp.location}</>}
                  </p>
                  {exp.status && (
                    <p className="font-mono text-[11px] text-ink/40 mt-0.5">
                      {exp.status}
                    </p>
                  )}

                  <p className={"mt-4 text-[15px] leading-relaxed text-ink/70"}>
                    {exp.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Selected Research & Projects ── */}
          <section>
            <SectionHeading>Selected Research &amp; Projects</SectionHeading>

            <div className="flex flex-col gap-14">
              {projects.map((p) => (
                <ProjectAbstract key={p.title} project={p} />
              ))}
            </div>
          </section>

          {/* ── Footer (mobile only) ────── */}
          <footer className="md:hidden text-center pt-8">
            <p className="font-mono text-[10px] text-ink/20">
              &copy; 2026 Carlos Manuel Mart&iacute;nez V&aacute;zquez
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
