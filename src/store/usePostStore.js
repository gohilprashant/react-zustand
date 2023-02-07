import { create } from 'zustand';
import { posts } from '../utils/defaultValues';
import { v4 as uuid } from 'uuid';

const usePostStore = create((set) => ({
  posts: posts,
  // create object containing all actions
  actions: {
    addPost: (postData) =>
      set((state) => {
        const newPost = { ...postData, id: uuid() };
        return { posts: [newPost, ...state.posts] };
      }),
  },
}));

export const usePosts = () => usePostStore((state) => state.posts);

export const useGetPostById = (id) => {
  const posts = usePostStore((state) => state.posts);

  return posts.find((post) => post.id === id);
};

// export all actions
export const usePostActions = () => usePostStore((state) => state.actions);
