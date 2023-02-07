import { create } from 'zustand';
import { posts } from '../utils/defaultValues';
import { v4 as uuid } from 'uuid';

const usePostStore = create((set, get) => ({
  posts: posts,
  // create object containing all actions
  actions: {
    addPost: (postData) => {
      const newPost = { ...postData, id: uuid() };
      return set((state) => ({ posts: [newPost, ...state.posts] }));
    },
    updatePost: (postData) => {
      const updatedPosts = get().posts.map((post) => {
        return post.id === postData.id ? postData : post;
      });
      return set({ posts: updatedPosts });
    },
    removePost: (id) => {
      const filteredPosts = get().posts.filter((post) => post.id !== id);
      return set({ posts: filteredPosts });
    },
  },
}));

export const usePosts = () => usePostStore((state) => state.posts);

export const useGetPostById = (id) => {
  const posts = usePostStore((state) => state.posts);

  return posts.find((post) => post.id === id);
};

// export all actions
export const usePostActions = () => usePostStore((state) => state.actions);
