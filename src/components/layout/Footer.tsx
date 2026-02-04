import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-900/50 pt-16 pb-8 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-bold text-xl tracking-tight mb-4 block">
                            Portfolio<span className="text-primary">.bi</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm">
                            Transforming complex data into clear, actionable insights.
                            Specializing in Power BI, SQL, and predictive analytics.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-slate-400">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-slate-400">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-slate-400">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors text-slate-400">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} BI Portfolio. All rights reserved.</p>
                    <p>Built with Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
