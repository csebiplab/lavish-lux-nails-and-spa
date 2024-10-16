import ShareComponent from "@/components/Dashboard/Common/shareComponent/ShareComponent";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/testimonials', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


const page = async () => {
  const data = await getData()

  const editRoute = "dashboard/allpages/testimonials/editTestimonials";
  const endPoints = "testimonials";

  const { testimonialRouteAllMetaData } = data ?? {};

  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={testimonialRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;
