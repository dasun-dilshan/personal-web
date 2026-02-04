"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "glass border-white/10 py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <BarChart2 className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Portfolio<span className="text-primary">.bi</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="default" size="sm" asChild>
                            <Link href="#contact">Hire Me</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 w-full glass border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full" asChild>
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
