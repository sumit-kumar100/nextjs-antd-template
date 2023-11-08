import notification from "@/components/next-notification";
import { DEFUALT_API_BASE_URL, DEFUALT_STALE_TIME } from "@/constants/globals";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

class Client extends QueryClient {
  constructor() {
    super({
      queryCache: new QueryCache({
        onError: (error) => {
          this.handleErrorResponse(error);
        },
      }),
      mutationCache: new MutationCache({
        onError: (error) => {
          this.handleErrorResponse(error);
        },
      }),
    });

    this.setDefaultOptions({
      queries: {
        staleTime: DEFUALT_STALE_TIME,
        retry: false,
        refetchOnMount: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
      },
    });

    this.setAxiosDefaults();
    this.setupTokenInterceptor();
  }

  private setAxiosDefaults() {
    const accessToken = getCookie("accessToken");
    axios.defaults.baseURL = DEFUALT_API_BASE_URL;
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  private setupTokenInterceptor() {
    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error) => {
        if (error?.response?.status === 401) {
          await this.handleRefreshToken();
          const accessToken = getCookie("accessToken");
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
          error.config.headers["Authorization"] = `Bearer ${accessToken}`;
          return axios(error.config);
        }
        return Promise.reject(error);
      },
    );
  }

  private handleErrorResponse(error: any) {
    const errorMessage = error?.response?.data?.message;
    if (errorMessage) {
      notification.error({ message: errorMessage });
    }
  }

  private async handleRefreshToken(): Promise<any> {
    const response = await fetch(DEFUALT_API_BASE_URL + "/refresh-token", {
      method: "POST",
      body: JSON.stringify({ refreshToken: getCookie("refreshToken") }),
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      this.handleReAuthorized(await response.json());
    } else {
      this.handleUnauthorized();
    }
  }

  private handleReAuthorized(data: {
    accessToken: string;
    refreshToken: string;
  }) {
    setCookie("accessToken", data.accessToken);
    setCookie("refreshToken", data.refreshToken);
  }

  private handleUnauthorized() {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    window.location.replace("/login");
  }
}

export const ClientQuery = Client;
