import ShareComponent from "@/components/Dashboard/Common/shareComponent/ShareComponent";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/concreteDelivery`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const page = async () => {

  const data = await getData()

  const editRoute = "dashboard/allpages/concreteDelivery/editConcreteDelivery";
  const endPoints = "concreteDelivery";


  const { concreteDeliveryRouteAllMetaData } = data ?? {};


  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={concreteDeliveryRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;
