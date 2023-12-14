import { useQuery } from 'react-query';
import PageLinks from './items/PageLinks';

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
