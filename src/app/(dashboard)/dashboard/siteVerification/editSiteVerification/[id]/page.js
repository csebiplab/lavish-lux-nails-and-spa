import SiteVerificationComponent from "@/components/Dashboard/SiteVerification/SiteVerification";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verificationUrl/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


const EditSiteVerification = async ({ params }) => {
  const { id } = params;

  const data = await getData(id)

  const { verificationData } = data ?? {};

  const { title, url } = verificationData ?? {};
  return (
    <SiteVerificationComponent id={id} titleValue={title} urlValue={url} />
  );
};

export default EditSiteVerification;

