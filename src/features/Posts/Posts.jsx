import Post from "../../components/Post/Post";

export default function Posts({ posts, isFetching }) {
  return (
    <div className="w-full flex justify-center px-4 lg:px-0">
      <div className="w-4xl">
        {isFetching && <p>Loading reddit posts...</p>}
        {!isFetching && posts && (
          <ul className="mt-40">
            {posts.children.map((post) => (
              <div key={post.data.id}>
                <Post postData={post.data} />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
