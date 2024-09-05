// import dbConnect from "@/lib/db.connect";
// import robottxts from "@/models/robots";

// export default async function robots() {
//     await dbConnect();
//     const data = await robottxts.find({});

//     if (data?.length < 1) {
//         return {
//             rules: [
//                 {
//                     userAgent: '*',
//                     allow: ['/'],
//                     disallow: ['/private/'],
//                 },
//             ],
//             sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
//         };
//     }

//     const rules = data.map(item => ({
//         userAgent: item.user_agent,
//         allow: item.allow,
//         disallow: item.disallow
//     }));

//     return {
//         rules,
//         sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
//     };
// }

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/'],
                disallow: ['/private/'],
            },
        ],
        sitemap: 'https://maricelascleaningmagnificence.com/sitemap.xml',
    }
}