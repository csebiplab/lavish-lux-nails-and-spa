import SiteMapComponent from "@/components/Dashboard/SiteMap/SiteMapComponent";


async function getData() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/siteMap', { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function siteMap() {

    const data = await getData()



    const { sitemap } = data ?? {};


    return (
        <>
            <SiteMapComponent sitemap={sitemap} />
        </>
    );
}
