import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchPosts";
import Posts from "../features/Posts/Posts";
import Sorts from "../features/Sorts/Sorts";

export default function SearchPage() {
  const [currentPosts, setCurrentPosts] = useState();
  const [isFetchingCurrent, setIsFetchingCurrent] = useState(false);
  const [isFetchingNext, setIsFetchingNext] = useState(false);
  const [lastPostInView, setLastPostInView] = useState(false);
  const [errorFetchingPosts, setErrorFetchingPosts] = useState();

  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("query");

  useEffect(() => {
    async function fetchPosts() {
      setIsFetchingCurrent(true);
      setErrorFetchingPosts(null);
      try {
        const { data } = await fetchData(
          `/.netlify/functions/reddit-proxy?q=${searchTerm}&limit=10`
          // `https://www.reddit.com/search.json?q=${searchTerm}&limit=10`
        );
        setCurrentPosts(data);
        setIsFetchingCurrent(false);
      } catch {
        setErrorFetchingPosts({
          message: "Could not retrieve reddit posts. Please refresh or try again later.",
        });
        setIsFetchingCurrent(false);
      }
    }

    fetchPosts();
  }, [searchTerm]);

  useEffect(() => {
    async function fetchMorePosts() {
      setIsFetchingNext(true);
      setErrorFetchingPosts(null);
      try {
        const { data } = await fetchData(
          `/.netlify/functions/reddit-proxy?q=${searchTerm}&limit=10&after=${currentPosts?.after || ''}`
          // `https://www.reddit.com/search.json?q=${searchTerm}&limit=10&after=${currentPosts?.after || ''}`
        );
        setCurrentPosts((prevPosts) => ({
          ...data,
          children: [
            ...(prevPosts?.children ?? []),
            ...data.children,
          ]
        }));
        setIsFetchingNext(false);
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
  }, [lastPostInView])

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
