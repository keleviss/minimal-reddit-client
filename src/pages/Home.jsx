import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchPosts";
import Sorts from "../features/Sorts/Sorts";
import Posts from "../features/Posts/Posts";
import { useParams } from "react-router";

export default function Home() {
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
          `https://www.reddit.com/r/popular/${sort ? sort : ""}.json?limit=10`
        );
        setCurrentPosts(data);
        setIsFetchingCurrent(false);
      } catch (error) {
        setErrorFetchingPosts({
          message:
          error.message ||
          "Could not retrieve reddit posts. Please try again later.",
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
          `https://www.reddit.com/r/popular/${
            sort ? sort : ""
          }.json?limit=10&after=${currentPosts.after}`
        );
        setCurrentPosts((prevPosts) => ({
          ...prevPosts,
          after: data.after,
          children: [
            ...prevPosts.children,
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
  }, [lastPostInView]);

  if (errorFetchingPosts) {
    return <p>{errorFetchingPosts.message}</p>;
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
