import { create } from 'zustand';
import { posts } from '../utils/defaultValues';

const usePostStore = create((set) => ({
  posts: posts,
}));

export const usePosts = () => usePostStore((state) => state.posts);
