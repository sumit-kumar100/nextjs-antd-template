import axios from "axios";
import { cookies } from "next/headers";
import { API_BASE_URL, STALE_TIME } from "@/constants/globals";
import { QueryClient } from "@tanstack/query-core";

/*
  if any occurs happens while fetching data from server that will be handled on client-side @tanstack/queryClient.
  Example : if server fails to fetch data due to token expired then on client side axios will refresh the token and 
  then it will refetch the data.
*/
export class ServerQuery extends QueryClient {
  constructor() {
    super();

    this.setDefaultOptions({
      queries: {
        staleTime: STALE_TIME,
        retry: false,
        refetchOnMount: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
      },
    });

    this.setAxiosDefaults();
  }

  private setAxiosDefaults() {
    const accessToken = cookies().get("accessToken")?.value;
    axios.defaults.baseURL = API_BASE_URL;
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
}
