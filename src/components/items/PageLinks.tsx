import { Link } from 'react-router-dom';

const PageLinks = ({ link }: { link: string }) => {
  const links = [
    {
      to: "/",
      label: "ホーム"
    },
    {
      to: "/basic",
      label: "基本ページへ"
    },
    {
      to: "/application",
      label: "応用ページへ"
    },
    {
      to: "/test-hooks",
      label: "テストフックページへ"
    },
    {
      to: "/custom-hooks-1",
      label: "カスタムフックページ1へ"
    },
    {
      to: "/custom-hooks-2",
      label: "カスタムフックページ2へ"
    },
    {
      to: "/react-hook-form-1",
      label: "ReactHookForm1へ"
    },
    {
      to: "/react-hook-form-2",
      label: "ReactHookForm2へ"
    },
    {
      to: "/react-hook-form-3",
      label: "ReactHookForm3へ"
    },
    {
      to: "/react-hook-form-4",
      label: "ReactHookForm4へ"
    },
    {
      to: "/react-hook-form-5",
      label: "ReactHookForm5へ"
    },
    {
      to: "/use-query",
      label: "UseQueryへ"
    },
    {
      to: "/jotai-base",
      label: "jotai基本へ"
    },
    {
      to: "/jotai-app",
      label: "jotaiへ"
    },
    {
      to: "/suspense",
      label: "suspenseへ"
    },
  ];

  const visibleLinks = links.filter(l => l.to !== link);
  
  return (
    <>
      {visibleLinks.map((l, i) => (
        <Link key={i} to={l.to} style={{ marginRight: "8px"}}>{l.label}</Link>
      ))}
    </>
  );
}

export default PageLinks;
