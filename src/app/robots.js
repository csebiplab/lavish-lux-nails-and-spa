import { projectfor } from "@/constants/projectfor";

export default async function robots() {
    const sitemapUrl = `https://lavishluxnailsandspa.com/sitemap.xml`;
    const robotStatic = {
        rules: [
            {
                userAgent: '*',
                allow: ['/public/'],
                disallow: ['/private/'],
            },
        ],
        sitemap: sitemapUrl,
    };

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/robot-txt?projectFor=${projectfor}`, {
            cache: "no-store",
        });
        const { data } = await response.json();

        const rules = data?.map((singleData) => ({
            userAgent: singleData?.user_agent || '*',
            allow: [singleData?.allow] || ['/public/'],
            disallow: [singleData?.disallow] || ['/private/'],
        }));

        return {
            rules: rules?.length > 0 ? rules : robotStatic.rules,
            sitemap: sitemapUrl,
        };
    } catch (error) {
        return robotStatic;
    }
}
