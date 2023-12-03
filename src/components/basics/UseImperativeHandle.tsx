import { forwardRef, useImperativeHandle, useRef } from "react";

// ボタンを押した時に複数の処理を行いたい時に使う感じ？？
interface PostHandle {
  scrollAndFocusAddComment: () => void;
}

const UseImperativeHandle = () => {
  const postRef = useRef<PostHandle | null>(null);

  const handleClick = () => {
    if(postRef.current) {
      postRef.current.scrollAndFocusAddComment();
    }
  }
  return (
    <>
      <h2>useImperativeHandle</h2>
      <button onClick={handleClick}>
        コメント書いて
      </button>
      <Post ref={postRef}/>
      <hr />
    </>
  );
}

export default UseImperativeHandle;

const Post = forwardRef((props, ref) => {
  const commentsRef = useRef<CommentListHandle | null>(null);
  const addCommentRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        if (commentsRef.current) {
          commentsRef.current.scrollToBottom();
        }
        if (addCommentRef.current) {
          addCommentRef.current.focus();
        }
      }
    }
  }, []);
  return (
    <>
      <article>
        <p>ようこそぶろぐへ</p>
      </article>
      <CommentList ref={commentsRef}/>
      <AddComment ref={addCommentRef}/>
    </>
  );
});

interface CommentListHandle {
  scrollToBottom: () => void;
}

const CommentList = forwardRef<CommentListHandle>((props, ref) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        if (node) {
          node.scrollTop = node.scrollHeight;
        }
      }
    };
  }, [])

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>こめんと #{i}</p>);
  }
  return (
    <div style={{ overflow: "scroll", width: "40%", height: "200px", border: "1px solid #000000" }} ref={divRef}>
      {comments}
    </div>
  )
});

const AddComment = forwardRef<HTMLInputElement>((props, ref) => {
  return (<input placeholder="コメントかいて..." ref={ref}/>);
});
