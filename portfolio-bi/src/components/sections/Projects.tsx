"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Sales Performance Dashboard",
        category: "Power BI",
        description: "Interactive dashboard tracking regional sales performance, KPI variance analysis, and forecasting future trends.",
        image: "/api/placeholder/600/400", // Using placeholder for now
        tags: ["Power BI", "DAX", "SQL"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Customer Churn Analysis",
        category: "Python & SQL",
        description: "Predictive model identifying at-risk customers with 85% accuracy using Random Forest classifiers.",
        image: "/api/placeholder/600/400",
        tags: ["Python", "Scikit-Learn", "Pandas"],
        demoLink: "#",
        repoLink: "#"
    },
    {
        title: "Supply Chain Optimization",
        category: "Tableau",
        description: "Visualizing inventory turnover and bottleneck identification across 5 distribution centers.",
        image: "/api/placeholder/600/400",
        tags: ["Tableau", "Excel", "Data Cleaning"],
        demoLink: "#",
        repoLink: "#"
    }
];

export function Projects() {
    return (
        <Section id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-slate-400 max-w-lg">
                        A selection of my recent work in data visualization and analysis.
                    </p>
                </div>
                <Button variant="outline" className="mt-4 md:mt-0 glass hover:bg-white/10" asChild>
                    <Link href="https://github.com" target="_blank">
                        View Github <Github className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group relative rounded-2xl overflow-hidden glass border border-white/10">
                        {/* Image Placeholder */}
                        <div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
                            {/* Gradients to simulate image content if no image */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-105 transition-transform duration-500`} />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium bg-slate-900/50">
                                Project Screenshot
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                                    <h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                                <Link href={project.demoLink} className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/5 text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
