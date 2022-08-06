import { useState, useEffect } from "react";
import classnames from "classnames";

import { useFetch } from "./useFetch";
import { Follower } from "./Follower";
import { FollowersData } from "./@types/follower";

export function App() {
  const { data, loading } = useFetch();

  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState<FollowersData[]>([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  function handlePage(index: number) {
    setPage(index);
  }

  function prevPage() {
    setPage(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  }

  function nextPage() {
    setPage(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {followers.map(follower => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={classnames("page-btn", {
                    "active-btn": index === page,
                  })}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
