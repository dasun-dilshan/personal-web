"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss data strategies? Let's connect.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="p-6 rounded-2xl glass border border-white/5 flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Email Me</h3>
                            <p className="text-slate-400">hello@example.com</p>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl glass border border-white/5 flex items-start gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg text-accent">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Call Me</h3>
                            <p className="text-slate-400">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl glass border border-white/5 flex items-start gap-4">
                        <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Location</h3>
                            <p className="text-slate-400">New York, NY (Open to Remote)</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Name</label>
                            <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Email</label>
                            <input type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Subject</label>
                        <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="Project Inquiry" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Message</label>
                        <textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors min-h-[120px]" placeholder="Tell me about your project..." />
                    </div>

                    <Button className="w-full" size="lg">Send Message</Button>
                </form>
            </div>
        </Section>
    );
}
