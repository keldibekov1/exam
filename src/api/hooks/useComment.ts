import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../axios";

const key = "comment";

export const useComment = (blogId?: string | number) => {
  const queryClient = useQueryClient();

  const comment = useQuery({
    queryKey: [key, blogId],
    queryFn: () =>
      api.get(`/comment`, { params: { blogId } }).then((res) => res.data),
    enabled: !!blogId,
  });

  const createComment = useMutation({
    mutationFn: (body: any) =>
      api.post("/comment", body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });

  const deleteComment = useMutation({
    mutationFn: (id: string) =>
      api.delete(`/comment/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });

  const updateComment = useMutation({
    mutationFn: (data: any) =>
      api.put(`/comment/${data.id}`, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] });
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });

  return { comment, createComment, deleteComment, updateComment };
};
