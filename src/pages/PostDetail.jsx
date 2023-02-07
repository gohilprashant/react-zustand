import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostById } from '../store/usePostStore';

const PostDetail = () => {
  const navigate = useNavigate();
  // get id from route params
  const { id } = useParams();
  //   get post by current id
  const post = useGetPostById(id);

  if (!post) {
    return <h2>Post Not Found!</h2>;
  }

  const handleUpdate = () => {
    navigate(`/posts/update/${id}`);
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        <p className='card-text'>{post.body}</p>
      </div>
      <div className='card-category'>
        <span>Category: {post.category}</span>
      </div>
      <div className='card-actions'>
        <button className='btn btn-info' onClick={handleUpdate}>
          Edit
        </button>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;
