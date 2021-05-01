import PostType from '../types/PostType.js'
const Post = (props:PostType) => {
  return (<>
    <h1>Post</h1>
    <p>{props.id}</p>
    <p>{props.title}</p>
    <p>{props.body}</p>
    <p>{props.router_id}</p>
</>);
};
export default Post;

