import React from "react";

// Balanced minimal light theme (white background, thin borders, soft radius, compact spacing)
// This is a self‑contained UI shell, ready to drop into a React + Tailwind project.

// ----- Types -----
type Task = {
  id: string;
  title: string;
  type: "Bug" | "Feature" | "Task";
  priority: "P0" | "P1" | "P2";
  status: string;
  source: string;
  owner: string;
  project: string;
  due: string;
};

// ----- Dummy data -----
const tasks: Task[] = [
  {
    id: "WX-1243",
    title: "Reduce AI calling latency below 1.5s",
    type: "Feature",
    priority: "P0",
    status: "In Progress",
    source: "Slack",
    owner: "SC",
    project: "Voice Platform",
    due: "Today",
  },
  {
    id: "WX-1244",
    title: "NPS calls drop below 60% completion",
    type: "Task",
    priority: "P1",
    status: "Planned",
    source: "Meet",
    owner: "AJ",
    project: "NPS Engine",
    due: "This week",
  },
  {
    id: "WX-1245",
    title: "Fix 500 error on profiling webhook",
    type: "Bug",
    priority: "P0",
    status: "Blocked",
    source: "GitHub",
    owner: "VV",
    project: "Platform",
    due: "Overdue",
  },
  {
    id: "WX-1246",
    title: "Auto-generate end-of-day recap",
    type: "Feature",
    priority: "P2",
    status: "In Review",
    source: "Doc",
    owner: "SC",
    project: "Assistant",
    due: "Next week",
  },
];

// ----- Small UI primitives -----

// Status dot shown on the left of each task
const StatusDot = ({ status }: { status: string }) => {
  const color =
    status === "In Progress"
      ? "bg-amber-400"
      : status === "Blocked"
      ? "bg-red-500"
      : status === "In Review"
      ? "bg-emerald-500"
      : "bg-gray-400";

  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />;
};

// Priority pill – not used in the list row now, but handy for future use
const PriorityPill = ({ value }: { value: Task["priority"] }) => {
  const map: Record<Task["priority"], string> = {
    P0: "border-red-500 text-red-600",
    P1: "border-yellow-500 text-yellow-600",
    P2: "border-blue-500 text-blue-600",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${
        map[value]
      }`}
    >
      {value}
    </span>
  );
};

const Tag = ({
  label,
  tone,
}: {
  label: string;
  tone?: "blue" | "red" | "green";
}) => {
  const map: Record<NonNullable<typeof tone>, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    red: "bg-red-50 text-red-700 border-red-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  const classes = tone ? map[tone] : "bg-gray-50 border-gray-200 text-gray-600";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${classes}`}
    >
      {label}
    </span>
  );
};

const Chip = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] text-gray-500">
    {label}
  </span>
);

// ----- Sidebar -----
const Sidebar = () => (
  <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white p-5">
    <div className="mb-8 flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900 text-xs font-semibold text-white">
        NX
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900">NexusOps</div>
        <div className="text-xs text-gray-500">AI Work Execution</div>
      </div>
    </div>

    <nav className="flex-1 text-sm text-gray-700">
      <div className="mb-2 text-xs uppercase text-gray-500">Main</div>

      <button className="mb-1 flex w-full items-center justify-between rounded-lg bg-gray-100 px-3 py-2 text-left text-gray-900">
        <span className="flex items-center gap-2">📥 Inbox</span>
        <span className="rounded-full bg-gray-900 px-2 py-0.5 text-[10px] text-white">7</span>
      </button>

      <button className="mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-gray-50">
        📌 My Work
      </button>
      <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-gray-50">
        📊 Analytics
      </button>

      <div className="mt-6 mb-2 text-xs uppercase text-gray-500">Focus Views</div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50">
          <span>Today</span>
          <span className="text-gray-500">3 due</span>
        </div>
        <div className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-gray-50">
          <span>This week</span>
          <span className="text-gray-500">Sprint 14</span>
        </div>
      </div>

      <div className="mt-6 mb-2 text-xs uppercase text-gray-500">Projects</div>
      <div className="space-y-1 text-sm">
        {["Voice Platform", "NPS Engine", "P2P System", "Quality Intelligence"].map((p) => (
          <button
            key={p}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-gray-50"
          >
            <span className="truncate">{p}</span>
            <span className="text-xs text-gray-400">▾</span>
          </button>
        ))}
      </div>
    </nav>

    <div className="mt-4 rounded-xl border border-gray-200 bg-white p-3 text-xs shadow-sm">
      <div className="mb-1 text-gray-700">Team execution</div>
      <div className="mb-1 flex items-center justify-between text-gray-500">
        <span>Score</span>
        <span className="text-sm font-semibold text-emerald-600">72%</span>
      </div>
      <div className="mb-1 h-1.5 w-full rounded-full bg-gray-100">
        <div className="h-full w-[72%] rounded-full bg-emerald-500" />
      </div>
      <div className="text-[11px] text-gray-500">3 tasks at risk · 2 blockers unresolved</div>
    </div>
  </aside>
);

// ----- Header -----
const HeaderBar = () => (
  <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-500">Workspace</span>
      <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
        Sprint 14 · AI Calling
        <span className="text-[10px] text-gray-400">▾</span>
      </button>
    </div>

    <div className="flex flex-1 justify-center px-6">
      <div className="flex w-full max-w-2xl items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-500">
        <span className="text-gray-400">✨</span>
        <input
          className="h-5 flex-1 border-none bg-transparent text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none"
          placeholder="Ask in natural language: ‘Summarise today’s work’, ‘Show bugs likely to slip’, ‘Create tasks from standup’"
        />
        <span className="rounded border border-gray-200 bg-white px-2 py-0.5 text-[10px] text-gray-400">⌘K</span>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-xs text-gray-500">
        🔍
      </button>
      <button className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-xs text-gray-500">
        🔔
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-semibold text-white">
          3
        </span>
      </button>
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-xs font-medium text-gray-700">
        SC
      </div>
    </div>
  </header>
);

// ----- Task list -----
const TaskList = () => (
  <section className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
    <div className="mb-3 flex items-center justify-between">
      <div>
        <div className="text-sm font-semibold text-gray-900">Inbox · Captured work</div>
        <div className="text-xs text-gray-500">AI is pulling tasks from Slack, GitHub, Meetings & Docs.</div>
      </div>
      <button className="inline-flex items-center gap-1 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-medium text-white">
        ＋ New task
      </button>
    </div>

    <div className="mb-2 flex items-center justify-between text-xs">
      <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1">
        <button className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-900">Today</button>
        <button className="rounded-full px-3 py-1 text-gray-500">This week</button>
        <button className="rounded-full px-3 py-1 text-gray-500">All</button>
      </div>
      <div className="flex gap-2 text-[11px] text-gray-600">
        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5">
          ⚠ 3 at risk
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5">
          ✓ 8 done
        </span>
      </div>
    </div>

    <div className="mt-1 flex-1 space-y-1 overflow-auto pr-1">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between rounded-xl border border-gray-200 px-3 py-2 text-xs hover:bg-gray-50"
        >
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="flex w-8 flex-col items-center gap-1 text-[10px] text-gray-500">
              <StatusDot status={task.status} />
              <span>{task.priority}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                <span className="truncate">{task.title}</span>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-gray-500">
                <span className="font-mono text-[10px] text-gray-400">{task.id}</span>
                {task.type === "Bug" && <Tag label="Bug" tone="red" />}
                {task.type === "Feature" && <Tag label="Feature" tone="green" />}
                {task.type === "Task" && <Tag label="Task" tone="blue" />}
                <Chip label={task.source} />
                <Chip label={`Owner · ${task.owner}`} />
                <span className="text-[11px] text-gray-500">{task.project}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 text-[11px] text-gray-500">
            <span>{task.due}</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px]">
              ✨ AI-synced
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ----- Right pane (AI + nudges + metrics) -----
const RightPane = () => (
  <aside className="flex h-full w-80 flex-col gap-3">
    {/* AI Co-pilot */}
    <section className="rounded-2xl border border-gray-200 bg-white p-4 text-xs shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-gray-900">AI Co-pilot</div>
          <div className="text-xs text-gray-500">Edit tasks, replan, summarise.</div>
        </div>
        <button className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] text-gray-700">
          # What slipped today?
        </button>
      </div>

      {/* Short, balanced conversation preview */}
      <div className="mb-2 h-24 overflow-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-[11px] text-gray-700">
        <div className="mb-2">
          <div className="mb-0.5 text-[10px] font-medium text-gray-500">YOU</div>
          <p>Show tasks at risk this week.</p>
        </div>
        <div>
          <div className="mb-0.5 text-[10px] font-medium text-gray-500">NEXUS</div>
          <p>3 tasks look risky. I suggest moving the dashboard work, pairing Ajay + Vasanth, and narrowing profiling scope.</p>
        </div>
      </div>

      <div className="mt-1 flex items-end gap-2">
        <textarea
          rows={2}
          className="min-h-[40px] flex-1 resize-none rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Ask: ‘Draft standup’, ‘Replan sprint around latency’…"
        />
        <button className="mb-0.5 inline-flex h-8 items-center gap-1 rounded-full bg-gray-900 px-4 text-xs font-semibold text-white">
          ✨ Send
        </button>
      </div>
    </section>

    {/* Proactive nudges */}
    <section className="rounded-2xl border border-gray-200 bg-white p-4 text-xs shadow-sm">
      <div className="mb-2 text-sm font-semibold text-gray-900">Proactive nudges</div>
      <div className="text-[11px] text-gray-500">AI surfaces what needs attention before it slips.</div>

      <div className="mt-2 space-y-2">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
          <div className="mb-1 flex items-center gap-1 text-[11px] font-medium text-gray-800">
            <span>⚠</span>
            <span>3 tasks likely to slip</span>
          </div>
          <div className="text-[11px] text-gray-600">Tap to replan or reassign.</div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
          <div className="mb-1 flex items-center gap-1 text-[11px] font-medium text-gray-800">
            <span>⏱</span>
            <span>2 PRs stuck &gt; 24h</span>
          </div>
          <div className="text-[11px] text-gray-600">Suggest reviewers or nudge owners.</div>
        </div>
      </div>
    </section>

    {/* Execution snapshot */}
    <section className="rounded-2xl border border-gray-200 bg-white p-4 text-xs shadow-sm">
      <div className="mb-2 text-sm font-semibold text-gray-900">Execution snapshot</div>

      <div className="mb-3 grid grid-cols-3 gap-2 text-center text-sm">
        <div className="rounded-lg border border-gray-200 bg-white px-2 py-2">
          <div className="text-[11px] text-gray-500">Sprint</div>
          <div className="text-sm font-semibold text-blue-600">72%</div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white px-2 py-2">
          <div className="text-[11px] text-gray-500">Slip risk</div>
          <div className="text-sm font-semibold text-red-600">3 tasks</div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white px-2 py-2">
          <div className="text-[11px] text-gray-500">NPS</div>
          <div className="text-sm font-semibold text-emerald-600">+35%</div>
        </div>
      </div>

      <div className="space-y-2 text-[11px]">
        {[
          { name: "You", initials: "SC", role: "PM & TL", load: 82 },
          { name: "Ajay", initials: "AJ", role: "Backend", load: 68 },
          { name: "Vasanth", initials: "VV", role: "Frontend", load: 54 },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-[11px] font-medium text-gray-700">
              {p.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">
                  {p.name} · <span className="text-gray-500">{p.role}</span>
                </span>
                <span className="text-gray-500">{p.load}%</span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gray-900"
                  style={{ width: `${p.load}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </aside>
);

// ----- Main layout -----
const MainLayout = () => (
  <div className="flex h-screen w-screen bg-white text-gray-900">
    <Sidebar />
    <div className="flex min-w-0 flex-1 flex-col">
      <HeaderBar />
      <main className="flex min-h-0 flex-1 gap-4 bg-white px-4 py-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <TaskList />
        </div>
        <RightPane />
      </main>
    </div>
  </div>
);

export default MainLayout;
