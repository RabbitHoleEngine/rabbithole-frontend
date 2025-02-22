const API_BASE_URL = process.env.RABBIT_API;

const fetchData = async <T>(
  endpoint: string,
  queryParams?: Record<string, string>,
) => {
  try {
    const url = new URL(`${API_BASE_URL}/${endpoint}`);

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) =>
        url.searchParams.append(key, value),
      );
    }

    const res = await fetch(url.toString(), { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const defaultSearch = (query: string) =>
  fetchData<{ title: string; url: string }[]>("search", { q: query });
