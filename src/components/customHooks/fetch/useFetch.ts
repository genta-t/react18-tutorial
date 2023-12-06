import { useAsync } from "../async/useAsync";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

export const useFetch = (url: string, options = {}, dependencies: any[] = []) => {
  return useAsync(async() => {
    const res =  await fetch(url, {...DEFAULT_OPTIONS, ...options});
    if (res.ok) return res.json();
    return res.json().then(json => Promise.reject(json));
  }, dependencies);
}
