import { ChevronsRight, ListTodo, SlidersHorizontal, StickyNote } from "lucide-react";

export const tasks = [
    {
        id: 1,
        title: "Upcoming",
        Icon: ChevronsRight,
        link: "/",
    },
    {
        id: 2,
        title: "Today",
        Icon: ListTodo,
        link: "/today",
    },
    {
        id: 3,
        title: "Notes",
        Icon: StickyNote,
        link: "/notes",
    },
    {
        id: 4,
        title: "Settings",
        Icon: SlidersHorizontal,
        link: "/settings",
    },
]

export const palette = [
    "#10B981", // Emerald
    "#14B8A6", // Teal
    "#06B6D4", // Cyan
    "#0EA5E9", // Sky
    "#3B82F6", // Blue
    "#2563EB", // Royal Blue
    "#4F46E5", // Deep Indigo
    "#A855F7", // Purple
    "#D946EF", // Fuchsia
    "#FB7185", // Soft Red
    "#FBBF24",  // Warm Gold
    "#6366F1", // Indigo
    "#8B5CF6", // Violet
    "#EC4899", // Pink
    "#F43F5E", // Rose
    "#F97316", // Orange
    "#F59E0B", // Amber
    "#EAB308", // Yellow
    "#84CC16", // Lime
    "#22C55E", // Green
]

export const dueDate = [
    "Tomorrow", "This Week", "Next Week", "Later",
]
