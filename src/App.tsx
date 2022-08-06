import { useState, useEffect } from "react";

import { useFetch } from "./useFetch";
import { Follower } from "./Follower";

export function App() {
  const { data, loading } = useFetch();

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {data.map(follower => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}
