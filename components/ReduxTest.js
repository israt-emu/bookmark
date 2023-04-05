import {useDispatch, useSelector} from "react-redux";
import {getPosts, getRunningQueriesThunk, useGetPostsQuery} from "../redux/features/postSlice";
import {wrapper} from "../redux/store";

function Blog({results}) {
  const {data: posts} = useGetPostsQuery();
  console.log(results);
  return (
    <ul>
      {posts?.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const results = await store.dispatch(getPosts.initiate());

  const data = await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {results},
  };
});

export default Blog;
