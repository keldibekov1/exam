import React from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useComment } from "../api/hooks/useComment";

type CommentViewProps = {
  blogId: string;
};

const CommentView: React.FC<CommentViewProps> = ({ blogId }) => {
  const { deleteComment } = useComment();
  const { comment } = useComment(blogId);
  const { data = [] } = comment;

  const handleDelete = (id: string) => {
    deleteComment.mutate(id);
  };
  const handleEdit = (item: any) => {
    console.log("Edit", item);
  };

  return (
    <div className="flex overflow-auto gap-4">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="w-[400px] min-w-[400px] relative border overflow-hidden group border-gray-200 rounded-md p-2"
        >
          <div className="min-h-[60px]">
            <p className="italic">{item.message}</p>
          </div>
          <span className="text-right block text-sm text-gray-500">
            {item.blog?.title}
          </span>
          <button onClick={() => handleDelete(item.id)} className="text-red-800 cursor-pointer absolute top-2 -right-5 duration-300 group-hover:right-2">
            <FaRegTrashAlt />
          </button>
          <button onClick={() => handleEdit(item)} className="text-green-800 cursor-pointer absolute top-8 -right-5 duration-300 group-hover:right-2 delay-75">
            <FaRegEdit />
          </button>
        </div>
      ))}
    </div>
  );
};

export default React.memo(CommentView);
