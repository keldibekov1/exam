import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

type BlogItem = {
  id: string | number;
  title: string;
  desc: string;
};

type BlogViewProps = {
  data: BlogItem[];
};

const BlogView: React.FC<BlogViewProps> = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="p-4 bg-white rounded-xl border border-gray-200">
          <div className="pb-2 mb-2 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-xl font-semibold  line-clamp-1">{item.title}</h3>
            <button className="cursor-pointer">
              <FaRegBookmark />
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">
            {item.desc}
          </p>
          <Link to={`/detail/${item.id}`} className="text-sm text-blue-500 hover:underline">
            Show more
          </Link>
        </div>
      ))}
    </>
  );
};

export default React.memo(BlogView);
