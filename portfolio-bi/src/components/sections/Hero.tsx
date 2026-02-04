"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart, Database, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70vh] h-[70vh] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
                <div className="absolute top-[40%] -right-[10%] w-[60vh] h-[60vh] rounded-full bg-accent/20 blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-4 md:px-6 z-10 relative">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm inline-flex items-center gap-2"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-300">Available for Freelance & Full-time</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-400"
                    >
                        Turning Complex Data into <br className="hidden md:block" />
                        <span className="text-primary">Actionable Insights</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        I'm a Business Intelligence specialist designing interactive dashboards and data stories.
                        I bridge the gap between raw data and strategic decisions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button size="lg" className="h-12 px-8 text-base rounded-full" asChild>
                            <Link href="#projects">
                                View My Work <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-white/20 hover:bg-white/10" asChild>
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </motion.div>

                    {/* Floating Icons */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl pointer-events-none -z-10 opacity-30 md:opacity-100">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] left-[10%] p-4 glass rounded-2xl"
                        >
                            <BarChart className="w-8 h-8 text-primary" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] right-[15%] p-4 glass rounded-2xl"
                        >
                            <PieChart className="w-8 h-8 text-accent" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-[30%] right-[5%] p-4 glass rounded-2xl"
                        >
                            <Database className="w-8 h-8 text-secondary" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
