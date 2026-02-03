import { getAllPoems } from "@/lib/poems/api";
import { ContentsList } from "@/components/book/ContentsList";

export const metadata = {
    title: "One Cycle — Contents",
};

export default function ContentsPage() {
    const poems = getAllPoems();

    return (
        <main className="min-h-screen w-full bg-background flex flex-col items-center justify-center">
            <ContentsList poems={poems} />
        </main>
    );
}
