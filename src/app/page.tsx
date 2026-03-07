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
  location: string;
  date: string;
  description: string;
  tags: string[];
}

const experiences: Experience[] = [
  {
    role: "Quantitative Researcher Intern",
    org: "Moreton Capital Partners",
    location: "Mexico City, M\u00e9xico",
    date: "April 2026 \u2013 TBD",
    description: [
      "Incoming intern focusing on systematic commodity",
      "strategies and multi-horizon signal blending.",
      "Developing regime-aware portfolio optimization",
      "frameworks and risk-parity allocation models.",
    ].join(" "),
    tags: ["Portfolio Optimization", "Signal Blending", "Risk-Parity"],
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
    title: "Hybrid Asset Pricing: LLM Sentiment & MLP Noise Reduction",
    date: "Dec 2025 \u2013 Present",
    status: "Working Paper",
    abstract: [
      "A comparative study challenging static lexicon-based",
      "models (VADER) in high-volatility markets. The",
      "proposed architecture utilizes Large Language Models",
      "(LLMs) to extract context-aware sentiment, coupled",
      "with a Multilayer Perceptron (MLP) to filter",
      "stochastic noise. The hypothesis focuses on isolating",
      "high-fidelity alpha signals that traditional linear",
      "regression models miss.",
    ].join(" "),
    metrics: [
      { label: "Sharpe Ratio",  value: "Computing...",   desc: "Waiting for valid backtest" },
      { label: "P-Value",       value: "< 0.05",         desc: "Target Significance" },
      { label: "Overfitting",   value: "0%",             desc: "Strictly Enforced" },
      { label: "Alpha",         value: "Seeking...",     desc: "The eternal pursuit" }
    ],
    tags: ["Python", "PyTorch", "LLMs", "Hypothesis Testing"],
  },
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
    title: "Bloomly: Multi-Spectral Satellite Data Analysis",
    date: "Oct 2025",
    abstract: [
      "Engineered a LightGBM-based predictive model",
      "leveraging multi-spectral satellite imagery (GEE)",
      "and NASA POWER meteorological data. Conducted",
      "rigorous dimensionality reduction across 44 distinct",
      "ecological indicators to classify global algal bloom",
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
        "font-serif text-xs uppercase tracking-[0.2em] " + "text-ink/40 mb-10"
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
                    <MapPin size={12} strokeWidth={1.5} />
                    {exp.org} &mdash; {exp.location}
                  </p>

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
