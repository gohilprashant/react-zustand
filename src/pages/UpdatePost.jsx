import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/post/PostForm';
import usePostForm from '../hooks/usePostForm';
import { useGetPostById, usePostActions } from '../store/usePostStore';

const UpdatePost = () => {
  const navigate = useNavigate();
  // get id from route params
  const { id } = useParams();
  //   get post by current id
  const post = useGetPostById(id);

  useEffect(() => {
    if (!post) {
      navigate('/');
    }
  }, [post]);

  const { updatePost: updateCurPost } = usePostActions();
  const { formData, updateFormData, validate, errors, setErrors } = usePostForm({
    title: post?.title,
    detail: post?.body,
    category: post?.category,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const { title, detail: body, category } = formData;
      if (title === post.title && body === post.body && category === post.category) {
        alert(`You haven't updated anything in this post`);
      } else {
        updateCurPost({ id, title, body, category });
        navigate(`/posts/${id}`);
      }
    }
  };

  return <PostForm formData={formData} handleChange={updateFormData} handleSubmit={handleSubmit} errors={errors} />;
};

export default UpdatePost;
