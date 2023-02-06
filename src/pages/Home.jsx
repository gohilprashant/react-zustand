import PostCard from '../components/post/PostCard';
import { usePosts } from '../store/usePostStore';

const Home = () => {
  const posts = usePosts();
  return (
    <div>
      <div className='card-row'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
