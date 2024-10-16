import ShareComponent from "@/components/Dashboard/Common/shareComponent/ShareComponent";



async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const page = async ({ params }) => {
  const { id } = params;


  const data = await getData(id)


  const endPoints = "home";



  const { home } = data ?? {};

  const { title, description, keywords } = home ?? {}
  return (
    <ShareComponent
      id={id}
      titleValue={title}
      descriptionValue={description}
      keywordsValue={keywords}
      endPoints={endPoints}
    />
  );
};

export default page;
