import CreateBlog from "@/components/Dashboard/blogs/CreateBlog/CreateBlog";

const getData = async (id) => {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogContent/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);


  return <CreateBlog id={id} data={data} />;
};
export default page;


