import { MetadataRoute } from 'next'
import { getAllPoems } from '@/lib/poems/api'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://example.com'
    const poems = getAllPoems()

    const poemEntries = poems.map((poem) => ({
        url: `${baseUrl}/poems/${poem.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contents`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...poemEntries,
    ]
}
