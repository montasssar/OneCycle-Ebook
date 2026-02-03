"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Poem } from "@/lib/poems/api";

export function ContentsList({ poems }: { poems: Poem[] }) {
    return (
        <div className="w-full max-w-md mx-auto py-20 px-6">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center font-sans text-sm tracking-[0.2em] text-gray-400 uppercase mb-16"
            >
                Table of Contents
            </motion.h1>

            <ul className="space-y-8">
                {poems.map((poem, index) => (
                    <motion.li
                        key={poem.slug}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: index * 0.1 + 0.3,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <Link
                            href={`/poems/${poem.slug}`}
                            className="group block text-center sm:text-left"
                        >
                            <span className="block font-serif text-2xl sm:text-3xl text-white group-hover:text-gold transition-colors duration-300">
                                {poem.title}
                            </span>
                            <span className="block mt-1 font-sans text-xs tracking-widest text-gray-600 group-hover:text-gold/50 transition-colors uppercase">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}
