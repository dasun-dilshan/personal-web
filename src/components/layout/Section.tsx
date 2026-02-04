"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export function Section({ id, className, children, delay = 0 }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
                className="container mx-auto px-4 md:px-6 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}
