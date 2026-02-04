"use client";

import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { Database, FileSpreadsheet, BarChart3, PieChart, Code2, LineChart } from "lucide-react";

const skills = [
    {
        name: "Power BI",
        icon: BarChart3,
        level: "Advanced",
        description: "DAX, Data Modeling, Custom Visuals",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
    {
        name: "Tableau",
        icon: PieChart,
        level: "Advanced",
        description: "Interactive Dashboards, Storytelling",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        name: "SQL",
        icon: Database,
        level: "Intermediate",
        description: "Querying, stored procedures, optimization",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        name: "Python",
        icon: Code2,
        level: "Intermediate",
        description: "Pandas, NumPy, Matplotlib for analysis",
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        name: "Excel",
        icon: FileSpreadsheet,
        level: "Expert",
        description: "VBA, Macros, Advanced Formulas",
        color: "text-emerald-600",
        bg: "bg-emerald-600/10"
    },
    {
        name: "Data Mining",
        icon: LineChart,
        level: "Intermediate",
        description: "Pattern recognition, predictive modeling",
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    },
];

export function Skills() {
    return (
        <Section id="skills" className="bg-slate-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Expertise</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    My toolkit for turning raw data into strategic business insights.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group p-6 rounded-2xl glass border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors group-hover:scale-110 duration-300", skill.bg)}>
                            <skill.icon className={cn("w-6 h-6", skill.color)} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                        <p className="text-sm text-primary mb-2 font-medium">{skill.level}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
