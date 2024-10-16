import SiteVerificationComponent from "@/components/Dashboard/SiteVerification/SiteVerification"

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/verificationUrl', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function SeoSiteVerification() {
  const data = await getData()

  const { verificationUrl } = data ?? {};



  return (
    <>
      <SiteVerificationComponent verificationUrl={verificationUrl} />
    </>
  );
}
