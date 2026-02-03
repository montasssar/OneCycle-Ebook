"use client";

import { motion } from "framer-motion";

interface PoemViewProps {
    title: string;
    content: string;
}

export function PoemView({ title, content }: PoemViewProps) {
    return (
        <article className="max-w-3xl px-6 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="font-serif text-4xl sm:text-5xl text-white mb-12"
            >
                {title}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="font-serif text-lg sm:text-xl leading-relaxed sm:leading-loose text-gold whitespace-pre-wrap antialiased"
            >
                {content}
            </motion.div>
        </article>
    );
}
