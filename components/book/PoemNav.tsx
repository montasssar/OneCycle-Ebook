import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import type { Poem } from "@/lib/poems/api";

interface PoemNavProps {
    prev: Poem | null;
    next: Poem | null;
}

export function PoemNav({ prev, next }: PoemNavProps) {
    return (
        <nav className="flex items-center justify-between w-full max-w-2xl px-6 mt-16 text-gray-400">
            <div className="flex-1 text-left">
                {prev ? (
                    <Link
                        href={`/poems/${prev.slug}`}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest hover:text-gold transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span className="hidden sm:inline">Previous</span>
                    </Link>
                ) : (
                    <span className="opacity-20 cursor-default inline-flex items-center space-x-2 text-xs uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" />
                    </span>
                )}
            </div>

            <div className="flex-0 mx-4">
                <Link
                    href="/contents"
                    className="p-2 hover:text-gold transition-colors"
                    title="Back to Contents"
                >
                    <BookOpen className="w-5 h-5" />
                </Link>
            </div>

            <div className="flex-1 text-right">
                {next ? (
                    <Link
                        href={`/poems/${next.slug}`}
                        className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest hover:text-gold transition-colors group"
                    >
                        <span className="hidden sm:inline">Next</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                ) : (
                    <span className="opacity-20 cursor-default inline-flex items-center space-x-2 text-xs uppercase tracking-widest">
                        <ArrowRight className="w-4 h-4" />
                    </span>
                )}
            </div>
        </nav>
    );
}
