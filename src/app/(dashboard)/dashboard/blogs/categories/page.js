import CategoryList from "@/components/Dashboard/blogs/CategoryList/CategoryList";


async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/blogCategory', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function page() {

  const data = await getData()

  return (
    <div>
      <CategoryList allCategorylist={data?.blogCategories} />
    </div>
  );
}

