import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../axios";

const key = "blog";

export const useBlog = () => {
  const queryClient = useQueryClient();

  const blog = useQuery({
    queryKey: [key],
    queryFn: () => api.get("/blog").then((res) => res.data),
  });

  const blogOne = (id: string) =>
    useQuery({
      queryKey: [key, id],        
      queryFn: () => api.get(`/blog/${id}`).then((res) => res.data),
    });

  const createBlog = useMutation({
    mutationFn: (body: any) =>
      api.post("/blog", body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
      queryClient.invalidateQueries({ queryKey: ["comment"] });
    },
  });

  return { blog, blogOne, createBlog };
};
