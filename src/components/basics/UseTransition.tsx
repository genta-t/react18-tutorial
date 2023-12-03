import React, { MouseEventHandler, ReactNode, memo, useState, useTransition } from "react";

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  const selectTab = (nextTab: string) => {
    startTransition(() => {
      setTab(nextTab);
    })
  } 

  const categories = [
    {
      tab: "about",
      name: "About",
      component: <AboutTab />,
    },
    {
      tab: "posts",
      name: "Posts(slow)",
      component: <PostsTab />,
    },
    {
      tab: "contact",
      name: "Contact",
      component: <ContactTab />,
    },
  ]

  return (
    <>
      <h2>useTransition</h2>
      {categories.map((c, i) => {
        return (
          <TabButton
            isActive={tab === c.tab}
            onClick={() => { selectTab(c.tab)}}
            key={i}
          >
            {c.name}
          </TabButton>
        )
      })}
      <hr />
      {categories.map((c, i) =>
        <React.Fragment key={i}>
          {tab === c.tab && c.component}
        </React.Fragment>
      )}
    </>
  );
}

export default UseTransition;

interface TabButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: MouseEventHandler;
}

const TabButton = ({ children, isActive, onClick }: TabButtonProps) => {
  if (isActive) {
    return <b style={{ marginRight: "8px"}}>{children}</b>
  }
  return (
    <button style={{ marginRight: "8px"}} onClick={(e) => { onClick(e); }}>{children}</button>
  )
}

const AboutTab = () => {
  return <p>ようこそ！！</p>;
}

const PostsTab = memo(() => {
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');

  let items = [];
  for(let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return (
    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
      {items}
    </ul>
  )
})

const SlowPost = ({ index } : { index: number }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // 遅延をして処理の確認する
  }

  return (
    <li>Post #{index +1}</li>
  )
}

const ContactTab = () => {
  return (
    <>
      <p>あなたはできるよ</p>
      <ul>
        <li>test@test.com</li>
        <li>+1234567890</li>
      </ul>
    </>
  );
}