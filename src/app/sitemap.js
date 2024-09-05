// import dbConnect from "@/lib/db.connect";
// import siteMap from "@/models/siteMap";

// export default async function sitemap() {
//     await dbConnect();
//     const data = await siteMap.find({});

//     if (data?.length < 1) {
//         return [{
//             url: `${process.env.NEXT_PUBLIC_API_URL}`,
//             lastModified: new Date().toISOString(),
//             changeFrequency: 'weekly',
//             priority: 1,
//         }];
//     }

//     const sites = data.map(site => ({
//         url: site.url,
//         lastModified: site.updatedAt.toISOString(),
//         changeFrequency: 'weekly',
//         priority: 1,
//     }));

//     return sites;
// }

export default function sitemap() {
    return [
        {
            url: 'https://maricelascleaningmagnificence.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ]
}