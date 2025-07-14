import React, { useState } from "react";
import { useComment } from "../api/hooks/useComment";

interface CommentCreateProps {
  blogId: string;
}

const CommentCreate: React.FC<CommentCreateProps> = ({ blogId }) => {
  const [message, setMessage] = useState("");
  const { createComment } = useComment(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createComment.mutate(
      { blogId, message },
      { onSuccess: () => setMessage("") } 
    );
  };
  
  return (
    
    <form onSubmit={handleSubmit} className="flex gap-2 flex-col items-start">
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-white border p-2 rounded-md flex-1 border-gray-200 w-[400px]"
        placeholder="message..."
        required
      />      <button className="bg-black p-2 text-white rounded-md">Send</button>
    </form>
  );
};

export default React.memo(CommentCreate);
