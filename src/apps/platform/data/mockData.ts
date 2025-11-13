import { Task, TeamMember, Nudge } from '../types/task.types';

/**
 * Mock Data for Nexus AI Dashboard
 *
 * Sample data for development and testing
 */

export const mockTasks: Task[] = [
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

export const mockTeamMembers: TeamMember[] = [
  { name: "You", initials: "SC", role: "PM & TL", load: 82 },
  { name: "Ajay", initials: "AJ", role: "Backend", load: 68 },
  { name: "Vasanth", initials: "VV", role: "Frontend", load: 54 },
];

export const mockNudges: Nudge[] = [
  {
    id: "nudge-1",
    icon: "⚠",
    title: "3 tasks likely to slip",
    description: "Tap to replan or reassign.",
    type: "warning",
  },
  {
    id: "nudge-2",
    icon: "⏱",
    title: "2 PRs stuck > 24h",
    description: "Suggest reviewers or nudge owners.",
    type: "info",
  },
];
