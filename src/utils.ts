import { FollowersData } from "./@types/follower";

export function paginate(followers: FollowersData[]) {
  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;

    return followers.slice(start, end);
  });

  return newFollowers;
}
