import CreateCategory from "@/components/Dashboard/blogs/CategoryList/CreateCategory/CreateCategory";

const page = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  return (
    <CreateCategory id={id} data={data} />
  );
};

export default page;

const getData = async (id) => {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogCategory/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
