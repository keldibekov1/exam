import  { useState } from "react";
import { useBlog } from "../../api/hooks/useBlog";
import { useNavigate } from "react-router-dom";

const BlogCreate = () => {
  const { createBlog } = useBlog();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createBlog.mutate({ title, desc });
    navigate("/");
    
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold py-5">Create blog</h2>
      <form className="flex flex-col max-w-[400px] gap-4" onSubmit={handleSubmit}>
        <input
          className="bg-white p-2 rounded-md"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="bg-white rounded-md p-2"
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button className="bg-black text-white p-2 rounded-md" type="submit">Create</button>
      </form>
    </div>
  );
};

export default BlogCreate;