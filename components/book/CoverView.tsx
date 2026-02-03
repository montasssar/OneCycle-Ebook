"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CoverView() {
    return (
        <main className="relative h-screen w-full overflow-hidden bg-background">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
                <div className="relative w-full h-full max-w-4xl max-h-screen aspect-[2/3]">
                    <Image
                        src="/cover/one-cycle-cover.jpg"
                        alt="One Cycle Cover"
                        fill
                        className="object-contain"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                </div>
            </div>

            {/* CTA Overlay - Positioned at bottom */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0, duration: 1.5 }}
                    className="pointer-events-auto"
                >
                    <Link
                        href="/contents"
                        className="group relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-sans font-medium tracking-wide text-white transition-all duration-300 border border-white/40 rounded-full hover:bg-white/10 hover:border-white/80 focus:outline-none backdrop-blur-md bg-black/20 shadow-2xl"
                    >
                        <span className="mr-2 text-sm uppercase tracking-[0.2em] drop-shadow-md">Enter</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
