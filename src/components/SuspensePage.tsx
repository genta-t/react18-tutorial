import { Suspense, useState } from 'react';
import PageLinks from './items/PageLinks';
import HeaderComp from './suspense/HeaderComp';
import PostsList from './suspense/PostsList';
import SkeletonPage from './suspense/sleletons/Skelton';

const SuspensePage = () => {
  const [currentUserId, setCurrentUserId] = useState(0);

  const content = currentUserId === 0
    ? <p>空です</p>
    : (
      <Suspense fallback={<SkeletonPage />}>
        <PostsList currentUserId={currentUserId} />
      </Suspense>
    )
  return (
    <>
      <PageLinks link={"/suspense"}/>
      <p>SuspensePageです</p>
      <HeaderComp
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      {content}
    </>
  );
}

export default SuspensePage;

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
}
