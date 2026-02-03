import { notFound } from "next/navigation";
import { getAllPoems, getPoemWithNeighbors } from "@/lib/poems/api";
import { PoemView } from "@/components/book/PoemView";
import { PoemNav } from "@/components/book/PoemNav";
import { FooterPoem } from "@/components/layout/FooterPoem";

export async function generateStaticParams() {
    const poems = getAllPoems();
    return poems.map((poem) => ({
        slug: poem.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getPoemWithNeighbors(slug);
    if (!data) return {};
    return {
        title: `One Cycle — ${data.poem.title}`,
    };
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getPoemWithNeighbors(slug);

    if (!data) {
        notFound();
    }

    const { poem, prev, next } = data;

    return (
        <main className="min-h-screen bg-background flex flex-col items-center py-20 transition-colors duration-1000">
            <div className="flex-1 w-full flex flex-col items-center justify-center">
                <PoemView title={poem.title} content={poem.content} />
            </div>
            <PoemNav prev={prev} next={next} />
            <FooterPoem />
        </main>
    );
}
