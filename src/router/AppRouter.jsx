import { Route, Routes } from 'react-router-dom';
import AddPost from '../pages/AddPost';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import UpdatePost from '../pages/UpdatePost';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts/add' element={<AddPost />} />
      <Route path='/posts/update/:id' element={<UpdatePost />} />
      <Route path='/posts/:id' element={<PostDetail />} />
    </Routes>
  );
};

export default AppRouter;
