"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CoverView() {
    return (
        <main className="relative h-screen w-full overflow-hidden bg-background">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/cover/one-cycle-cover.jpg"
                    alt="One Cycle Cover"
                    fill
                    className="object-cover opacity-90"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" // Dark placeholder
                />
                {/* Dark Overlay - very subtle to ensure button contrast but keep image vivid */}
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="space-y-12"
                >
                    {/* Title Area Removed - Image contains text */}
                    {/* CTA Button is below */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0, duration: 1.0 }}
                        className="mt-48 sm:mt-64" // Push down significantly to leave center art clear
                    >
                        <Link
                            href="/contents"
                            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-sans font-medium tracking-wide text-white transition-all duration-300 border border-white/30 rounded-full hover:bg-white/10 hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm"
                        >
                            <span className="mr-2">Enter</span>
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
                </motion.div>
            </div>
        </main>
    );
}
