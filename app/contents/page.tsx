import { getAllPoems } from "@/lib/poems/api";
import { ShelfView } from "@/components/book/ShelfView";

export const metadata = {
    title: "One Cycle — Collection",
};

export default function ContentsPage() {
    const poems = getAllPoems();

    return (
        <main className="bg-background">
            <ShelfView poems={poems} />
        </main>
    );
}
