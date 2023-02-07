import { useNavigate } from 'react-router-dom';
import PostForm from '../components/post/PostForm';
import usePostForm from '../hooks/usePostForm';
import { usePostActions } from '../store/usePostStore';

const AddPost = () => {
  const navigate = useNavigate();
  const { addPost: addNewPost } = usePostActions();
  const { formData, updateFormData, validate, errors, setErrors } = usePostForm({
    title: '',
    detail: '',
    category: 'Sports',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      addNewPost({ title: formData.title, body: formData.detail, category: formData.cateogry });
      navigate('/');
    }
  };

  return <PostForm formData={formData} handleChange={updateFormData} handleSubmit={handleSubmit} errors={errors} />;
};

export default AddPost;
