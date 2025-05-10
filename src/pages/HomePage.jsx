import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchPosts";
import Sorts from "../features/Sorts/Sorts";
import Posts from "../features/Posts/Posts";
import { useParams } from "react-router";

export default function HomePage() {
  const [currentPosts, setCurrentPosts] = useState();
  const [isFetchingCurrent, setIsFetchingCurrent] = useState(false);
  const [isFetchingNext, setIsFetchingNext] = useState(false);
  const [lastPostInView, setLastPostInView] = useState(false);
  const [errorFetchingPosts, setErrorFetchingPosts] = useState();

  const { sort } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetchingCurrent(true);
      try {
        const { data } = await fetchData(
          `https://www.reddit.com/r/popular${sort ? '/' + sort : ''}.json?limit=10`
        );
        setCurrentPosts(data);
        setIsFetchingCurrent(false);
        setErrorFetchingPosts(null);
      } catch {
        setErrorFetchingPosts({
          message: "Could not retrieve reddit posts. Please refresh or try again later.",
        });
        setIsFetchingCurrent(false);
      }
    }

    fetchPosts();
  }, [sort]);

  useEffect(() => {
    async function fetchMorePosts() {
      setIsFetchingNext(true);
      try {
        const { data } = await fetchData(
          `https://www.reddit.com/r/popular/${sort || ""
          }.json?limit=10&after=${currentPosts?.after || ''}`
        );
        setCurrentPosts((prevPosts) => ({
          ...prevPosts,
          after: data.after,
          children: [
            ...(prevPosts?.children ?? []),
            ...data.children,
          ]
        }));
        setIsFetchingNext(false);
        setErrorFetchingPosts(null);
      } catch {
        setErrorFetchingPosts({
          message: "Could not retrieve reddit posts. Please refresh or try again later.",
        });
        setIsFetchingNext(false);
      }
    }

    if (lastPostInView) {
      fetchMorePosts();
    }
  }, [lastPostInView]);

  return (
    <>
      <Sorts />
      {isFetchingCurrent && <div className="flex justify-center">
        <div className="w-4xl mt-30 sm:mt-40 text-center">
          <p className="my-20 text-center text-xl">🔃 Loading reddit posts...</p>
        </div>
      </div>}
      {currentPosts && (
        <Posts
          posts={currentPosts}
          isFetchingCurrent={isFetchingCurrent}
          isFetchingNext={isFetchingNext}
          setLastPostInView={setLastPostInView}
        />
      )}
      {errorFetchingPosts &&
        <div className="flex justify-center">
          <div className="w-4xl mt-30 sm:mt-40 text-center">
            <p>{errorFetchingPosts.message}</p>
          </div>
        </div>
      }
    </>
  );
}
