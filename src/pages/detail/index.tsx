import { useParams } from "react-router-dom";
import CommentCreate from "../../components/CommentCreate";
import CommentView from "../../components/CommentView";
import { useBlog } from "../../api/hooks/useBlog";

const Detail = () => {
  const { id } = useParams();
  const { blogOne } = useBlog();
  const { data } = blogOne(id || "");



  return (
    <div className="container mx-auto py-6">
      <div className="p-6 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold">{data?.title}</h2>
        <p className="text-gray-500 mt-4">{data?.desc}</p>
      </div>
      <div className="p-6 bg-white rounded-2xl mt-6">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        <CommentCreate blogId={id || ""} />
        <br />
        <CommentView blogId={id || ""}  />
      </div>
    </div>
  );
};

export default Detail;
