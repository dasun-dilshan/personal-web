"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function About() {
    return (
        <Section id="about" className="bg-slate-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    {/* Stylized background for profile placeholder */}
                    <div className="relative aspect-square w-full max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl opacity-20 rotate-6" />
                        <div className="absolute inset-0 bg-slate-800 rounded-3xl border border-white/10 flex items-center justify-center p-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">[Your Photo]</h3>
                                <p className="text-slate-500">Add your professional headshot here</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-primary">Me</span></h2>
                    <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                        <p>
                            I am a final year Business Intelligence student passionate about uncovering the stories hidden within data.
                            My journey began with a fascination for patterns, leading me to specialize in data visualization and predictive analytics.
                        </p>
                        <p>
                            With a strong foundation in SQL, Power BI, and Python, I transform complex datasets into intuitive dashboards
                            that drive decision-making. I believe that good data analysis isn't just about numbers—it's about
                            clarity, context, and impact.
                        </p>
                        <p>
                            When I'm not building dashboards, I'm exploring new data tools, participating in hackathons,
                            or analyzing public datasets for fun.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Button className="rounded-full" asChild>
                            <Link href="/resume.pdf" target="_blank">
                                <Download className="mr-2 w-4 h-4" /> Download CV
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
