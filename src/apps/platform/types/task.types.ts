/**
 * Task Types for Nexus AI Platform
 *
 * Type definitions for tasks, work units, and related data structures
 */

export type TaskType = "Bug" | "Feature" | "Task";

export type TaskPriority = "P0" | "P1" | "P2";

export type TaskStatus = "In Progress" | "Planned" | "Blocked" | "In Review" | "Completed";

export type TaskSource = "Slack" | "GitHub" | "Meet" | "Doc" | "Jira" | "Linear";

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  priority: TaskPriority;
  status: TaskStatus;
  source: TaskSource;
  owner: string;
  project: string;
  due: string;
}

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  load: number;
}

export interface ExecutionMetrics {
  sprintProgress: number;
  slipRisk: number;
  npsChange: number;
}

export interface Nudge {
  id: string;
  icon: string;
  title: string;
  description: string;
  type: "warning" | "info" | "success";
}
