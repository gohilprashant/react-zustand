const post = {
  id: '5903abf4-c73b-4758-a3ef-f255b8aa7f0f',
  title: 'Asperiores quisquam accusantium ab porro earum optio magni veritatis animi.',
  body: 'Ut laborum expedita. Inventore non enim sed animi eius quo mollitia voluptatem consequuntur. Asperiores fugiat non.\nAliquam quia alias placeat. Esse sequi iure odio porro ab at. Omnis modi omnis alias vitae optio dolore asperiores modi. Ipsa qui sapiente vel eius. Sequi deserunt impedit.\nMagni corrupti impedit molestiae facilis. Sapiente corporis occaecati excepturi nam odio. Ullam unde est.',
  category: 'Outdoors',
};

const PostDetail = () => {
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
        <button className='btn btn-info'>Edit</button>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
  );
};

export default PostDetail;
