import axios from "axios";

export async function fetchPosts(
  limit: number,
  offset: number,
  params: Record<string, any>,
) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      params: {
        _limit: limit,
        _page: offset,
        ...params,
      },
    },
  );
  return response.data;
}
