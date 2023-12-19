import useSWR from 'swr'
import {
  getPostsByUserId,
  getUserById,
  usersUrlEndpoint as postsCacheKey,
  usersUrlEndpoint as usersCacheKey
} from './api/hooks';

import Post from './Post'
import { TypePost } from '../types';

const PostsList = ({ currentUserId } : { currentUserId : any }) => {

  const { data: posts } = useSWR(
    [postsCacheKey, currentUserId],
    ([url, userId]) => getPostsByUserId(url, userId),
    { suspense: true }
  )
  console.log("dataPost", posts);

  const { data: user } = useSWR(
    posts?.length ? [usersCacheKey, currentUserId] : null,
    ([url, userId]) => getUserById(url, userId),
    { suspense: true }
  )
  console.log("dataUser", user);

  const content = (
    <main>
      {posts.map((post: TypePost) => {
        return (
          <>
            <Post key={post.id} post={post} user={user} />
          </>
        )
      })}
    </main>
  )

  return content
}
export default PostsList