import Post from "../../components/Post/Post";
import { posts } from "../../mock/posts";

export default function Posts() {
  const { data } = posts;
  return (
    <ul>
      {data.children.map((post) =>
        <div key={post.data.id}>
          {/* <hr className="text-stone-400"></hr> */}
          <Post postData={post.data} />
        </div>
      )}
    </ul>
  );
}