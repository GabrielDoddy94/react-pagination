import { useState, useEffect } from "react";
import { FollowersData, ResponseFollowersData } from "./@types/follower";

import { paginate } from "./utils";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export function useFetch() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<FollowersData[]>([]);

  async function getProducts() {
    const response = await fetch(url);
    const data: ResponseFollowersData[] = await response.json();
    paginate(data);
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, data };
}
