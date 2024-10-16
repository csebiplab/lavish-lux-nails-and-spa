import ShareComponent from "@/components/Dashboard/Common/shareComponent/ShareComponent";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/blogs', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}



const Page = async () => {
  const data = await getData()

  const editRoute = "dashboard/allpages/blogs/editblogs";
  const endPoints = "blogs";

  const { blogRouteAllMetaData } = data ?? {};


  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={blogRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default Page;

