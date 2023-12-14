import { useQuery } from 'react-query';
import PageLinks from './items/PageLinks';
import { useEffect, useState } from 'react';

// useQueryはAPIなどの　データ取得に使う
const UseQueryPage = () => {
  const { isLoading, error, data } = useQuery(
    "resData",
    () => fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json(),)
  );

  if (isLoading) return <p>loading...</p>;
  
  if (error instanceof Error) return <p>エラーが出ています{error.message}</p>;

  return (
    <>
      <PageLinks link={"/use-query"}/>
      <p>reactQueryUseQueryPageです</p>
      {data.map((d: TypesData, i: number) => {
        return (
          <div key={i}>
            <p>{d.id}</p>
            <p>{d.title}</p>
            <p>{d.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default UseQueryPage;

type TypesData = {
  id: string;
  title: string;
  body: string;
}

// useState, useEffectで書くとこうなる

const UseEffect = () => {
  const [ posts, setPosts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);

  const fetchTodos =  async () => {
    try {
      setIsLoading(true);
      console.log("取得中");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.ok) {
        const results = await res.json();
        console.log("完了");
        setPosts(results);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  
  if (isError) return <p>エラーが出ています</p>;

  return(
    <>
      <p>useEffect</p>
      { isLoading ? (
        <p>ローディング中</p>
      ) : (
        posts.map((p: TypesData, i: number) => {
          return (
            <div key={i}>
              <p>{p.id}</p>
              <p>{p.title}</p>
              <p>{p.body}</p>
            </div>
          );
        }
      ))}
    </>
  )
}