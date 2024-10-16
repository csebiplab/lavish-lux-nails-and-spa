import BlogList from "@/components/Dashboard/blogs/BlogList/BlogList"

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/blogContent', { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


export default async function page() {
  const data = await getData()

  const { blogContentData } = data ?? {}

  return (
    <div>
      <BlogList allBlogList={blogContentData} />
    </div>
  );
}
