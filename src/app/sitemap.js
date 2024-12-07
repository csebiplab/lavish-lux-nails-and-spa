import { projectfor } from "@/constants/projectfor";

export default async function sitemap() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sitemap?projectFor=${projectfor}`, {
            cache: "no-store",
        });
        const { data } = await response.json();

        const sitemapData = data?.map((singleData) => ({
            url: singleData?.loc,
            priority: singleData?.priority,
            changeFrequency: singleData?.changefreq,
            lastModified: singleData?.updatedAt,
        }));

        if (sitemapData?.length > 0) {
            return sitemapData;
        } else {
            return [
                {
                    url: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
                    lastModified: new Date().toISOString(),
                    changeFrequency: 'yearly',
                    priority: 1,
                },
            ];
        }
    } catch (error) {
        console.error("Error fetching sitemap data:", error);
        return [
            {
                url: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
                lastModified: new Date().toISOString(),
                changeFrequency: 'yearly',
                priority: 1,
            },
        ];
    }
}
