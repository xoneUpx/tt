import Post from '@components/Post';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths} from 'next';

const Posti = ({post}) =>{
  const router = useRouter();
  return (
    <Post body={post.body} title={post.title} id={post.id} router_id = 'routerid' />
)
}
export const getStaticProps:GetStaticProps = async (context) =>{
  const { params } = context; 
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json();
  //add typechecking
  return {
    props: {post,}
}
  
} 
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json();
  const paths = posts.map(post=> ({
    params: { id: post.id.toString() }
}))
    return ({
      paths,
      fallback: false,
})
}
export default Posti;
