import {useDispatch, useSelector} from "react-redux";

import {wrapper} from "../redux/store";
import {getPosts, getRunningQueriesThunk, useGetPostsQuery} from "../redux/features/bookmark/bookmarkApi";

function Blog({data}) {
  const {data: posts} = useGetPostsQuery();
  return (
    <ul>
      {data?.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  );
}

export const getStaticProps = wrapper.getServerSideProps((store) => async (context) => {
  const result = await store.dispatch(getPosts.initiate());
  await Promise.all(store.dispatch(getRunningQueriesThunk()));
  const data = result?.data;
  return {
    props: {data},
  };
});

export default Blog;
