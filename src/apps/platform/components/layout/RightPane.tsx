import React from 'react';
import { TeamMember, Nudge } from '../../types/task.types';

interface RightPaneProps {
  teamMembers: TeamMember[];
  nudges: Nudge[];
}

/**
 * RightPane Component
 *
 * AI co-pilot, proactive nudges, and execution metrics
 */
export const RightPane: React.FC<RightPaneProps> = ({ teamMembers, nudges }) => {
  return (
    <aside className="flex h-full w-80 flex-col gap-3">
      {/* AI Co-pilot */}
      <section className="rounded-2xl border border-gray-200 bg-white p-4 text-xs shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-900">AI Co-pilot</div>
            <div className="text-xs text-gray-500">Edit tasks, replan, summarise.</div>
          </div>
          <button className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] text-gray-700 hover:bg-gray-50">
            # What slipped today?
          </button>
        </div>

        {/* Conversation Preview */}
        <div className="mb-2 h-24 overflow-auto rounded-xl border border-gray-200 bg-gray-50 p-3 text-[11px] text-gray-700">
          <div className="mb-2">
            <div className="mb-0.5 text-[10px] font-medium text-gray-500">YOU</div>
            <p>Show tasks at risk this week.</p>
          </div>
          <div>
            <div className="mb-0.5 text-[10px] font-medium text-gray-500">NEXUS</div>
            <p>
              3 tasks look risky. I suggest moving the dashboard work, pairing Ajay + Vasanth,
              and narrowing profiling scope.
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="mt-1 flex items-end gap-2">
          <textarea
            rows={2}
            className="min-h-[40px] flex-1 resize-none rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Ask: 'Draft standup', 'Replan sprint around latency'…"
          />
          <button className="mb-0.5 inline-flex h-8 items-center gap-1 rounded-full bg-gray-900 px-4 text-xs font-semibold text-white hover:bg-gray-800">
            ✨ Send
          </button>
        </div>
      </section>

      {/* Proactive Nudges */}
      <section className="rounded-2xl border border-gray-200 bg-white p-4 text-xs shadow-sm">
        <div className="mb-2 text-sm font-semibold text-gray-900">Proactive nudges</div>
        <div className="text-[11px] text-gray-500">
          AI surfaces what needs attention before it slips.
        </div>

        <div className="mt-2 space-y-2">
          {nudges.map((nudge) => (
            <div
              key={nudge.id}
              className="rounded-xl border border-gray-200 bg-gray-50 p-3 hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <div className="mb-1 flex items-center gap-1 text-[11px] font-medium text-gray-800">
                <span>{nudge.icon}</span>
                <span>{nudge.title}</span>
              </div>
              <div className="text-[11px] text-gray-600">{nudge.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Snapshot */}
      <section className="rounded-2xl border border-gray-200 bg-white p-4 text-xs shadow-sm">
        <div className="mb-2 text-sm font-semibold text-gray-900">Execution snapshot</div>

        {/* Metrics Grid */}
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

        {/* Team Load */}
        <div className="space-y-2 text-[11px]">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-[11px] font-medium text-gray-700">
                {member.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    {member.name} · <span className="text-gray-500">{member.role}</span>
                  </span>
                  <span className="text-gray-500">{member.load}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-900"
                    style={{ width: `${member.load}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default RightPane;
