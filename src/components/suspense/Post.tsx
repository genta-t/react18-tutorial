import { Suspense } from "react"
import { TypePostUser } from "../types"

const Post = ({ post, user } : TypePostUser) => {
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
      {user && user.company ? (
        <>
          <Suspense fallback={<p>loading中</p>}>
            <p>Author: {user.name} from {user.company.name}</p>
            <p>Tagline: {user.company.catchPhrase}</p>
          </Suspense>
        </>
      ) : (
        <p>not data</p>
      )}
    </article>
  )
}
export default Post