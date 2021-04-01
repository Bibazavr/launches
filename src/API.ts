import { BaseCallResult, ILaunch } from "./types";

const apiUrl = "https://api.spacexdata.com/";

/**
 * API
 */
class API {
  _apiBase = apiUrl;

  request = async (
    url: string,
    method = "GET",
    data: Record<string, unknown> | null = null
  ): Promise<BaseCallResult> => {
    const headers: HeadersInit = {};
    let body;
    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    return await fetch(this._apiBase + url, {
      method,
      headers,
      body,
      credentials: "same-origin",
    })
      .then((r) => {
        console.debug("backend response", r);
        return r.json();
      })
      .catch((e) => {
        console.error("backend error", e);
        return e;
      });
  };

  /**
   * loadLaunches
   */
  loadLaunches = async (): Promise<ILaunch[]> => {
    return ((await this.request("v3/launches")) as unknown) as Promise<
      ILaunch[]
    >;
  };
}

export default new API();
