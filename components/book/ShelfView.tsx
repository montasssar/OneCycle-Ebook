"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Poem } from "@/lib/poems/api";

export function ShelfView({ poems }: { poems: Poem[] }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform vertical scroll progress to horizontal translation
    // Moves from 1% to -95% (adjusted for safety)
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[500vh] bg-background">
            {/* Sticky Container */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Desktop: Animated Horizontal Scroll */}
                <motion.div style={{ x }} className="hidden lg:flex gap-16 px-12">
                    {poems.map((poem, index) => (
                        <BookCard key={poem.slug} poem={poem} index={index} />
                    ))}
                </motion.div>

                {/* Mobile: Native Horizontal Scroll */}
                <div className="flex lg:hidden w-full h-full overflow-x-auto snap-x snap-mandatory gap-8 px-8 items-center no-scrollbar">
                    {poems.map((poem, index) => (
                        <div key={poem.slug} className="snap-center shrink-0">
                            <BookCard poem={poem} index={index} mobile />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

function BookCard({ poem, index, mobile = false }: { poem: Poem; index: number, mobile?: boolean }) {
    return (
        <Link
            href={`/poems/${poem.slug}`}
            className={`
        group relative block bg-[#1a1a1a] shadow-2xl border border-white/5 
        transition-all duration-500 hover:-translate-y-4 hover:shadow-gold/10 hover:border-gold/30
        flex flex-col justify-between p-8
        ${mobile ? 'w-[75vw] h-[65vh]' : 'w-[400px] h-[60vh]'}
      `}
        >
            {/* Decorative spine line */}
            <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-white/10 group-hover:bg-gold/40 transition-colors" />

            {/* Top: Order */}
            <div className="pl-6">
                <span className="block font-sans text-xs tracking-[0.3em] text-gray-500 group-hover:text-gold transition-colors">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            {/* Center: Title (Vertical Text Effect option, or just big bold) */}
            <div className="pl-6 flex-1 flex items-center">
                <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight group-hover:text-gold transition-colors">
                    {poem.title}
                </h2>
            </div>

            {/* Bottom: Label */}
            <div className="pl-6 border-t border-white/5 pt-4 mt-4">
                <span className="block font-sans text-[10px] uppercase tracking-widest text-gray-600">
                    Read Poem
                </span>
            </div>
        </Link>
    );
}
