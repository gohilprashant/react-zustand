import PostForm from '../components/post/PostForm';
import usePostForm from '../hooks/usePostForm';

const AddPost = () => {
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
      // send post data
    }
  };

  return <PostForm formData={formData} handleChange={updateFormData} handleSubmit={handleSubmit} errors={errors} />;
};

export default AddPost;
