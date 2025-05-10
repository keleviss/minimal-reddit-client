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

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("query");

  useEffect(() => {
    async function fetchPosts() {
      setIsFetchingCurrent(true);
      const { data } = await fetchData(
        `/.netlify/functions/reddit-proxy?q=${searchTerm}&limit=10`
        // `https://www.reddit.com/search.json?q=${searchTerm}&limit=10`
      );

      if (data) {
        setCurrentPosts(data);
      } else {
        setErrorFetchingPosts(true);
      }
      setIsFetchingCurrent(false);
    }

    fetchPosts();
  }, [searchTerm]);

  useEffect(() => {
    async function fetchMorePosts() {
      setIsFetchingNext(true);
      try {
        const { data } = await fetchData(
          `/.netlify/functions/reddit-proxy?q=${searchTerm}&limit=10&after=${currentPosts?.after || ''}`
          // `https://www.reddit.com/search.json?q=${searchTerm}&limit=10&after=${currentPosts?.after || ''}`
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
      } catch (error) {
        setErrorFetchingPosts({
          message:
          error.message ||
          "Could not retrieve reddit posts. Please try again later.",
        });
        setIsFetchingNext(false);
      }
    }
    
    if (lastPostInView) {
      fetchMorePosts();
    }
  }, [lastPostInView])

  if (errorFetchingPosts) {
    return <p>Error fetching posts!</p>
  }

  return (
    <>
      <Sorts />
      {currentPosts && (
        <Posts
          posts={currentPosts}
          isFetchingCurrent={isFetchingCurrent}
          isFetchingNext={isFetchingNext}
          setLastPostInView={setLastPostInView}
        />
      )}
    </>
  );
}
