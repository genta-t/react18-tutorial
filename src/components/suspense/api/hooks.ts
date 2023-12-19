import axios from "axios";

const delay = (): Promise<void> => 
  new Promise((res) => setTimeout(() => res(), 1800));

const baseApiUrl = axios.create({
  baseURL: "http://localhost:3500"
});

export const postsUrlEndpoint = '/posts';

export const getPostsByUserId = async (url: string, userId: string) => {
  await delay()
  const response = await baseApiUrl.get(`${url}?userId=${userId}`)
  return response.data
};

export const usersUrlEndpoint = '/users';

export const getUsers = async () => {
  await delay()
  const response = await baseApiUrl.get(usersUrlEndpoint)
  return response.data
}

export const getUserById = async (url: string, userId: string) => {
  await delay()
  const response = await baseApiUrl.get(`${url}/${userId}`)
  return response.data
}