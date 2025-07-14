import { useBlog } from "../../api/hooks/useBlog"
import BlogView from "../../components/BlogView"

const Home = () => {
  const { blog } = useBlog();
  console.log(blog.data);




  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold py-5">All blogs</h2>
      <BlogView data={blog.data} />
    </div>
  )
}

export default Home