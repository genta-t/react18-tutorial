import { Link } from 'react-router-dom';

const PartPageLinks = ({ link }: { link: string }) => {
  const links = [
    {
      to: "/react-hook-form-3/1",
      label: "Part1"
    },
    {
      to: "/react-hook-form-3/2",
      label: "Part2"
    },
    {
      to: "/react-hook-form-3/3",
      label: "Part3"
    },
    {
      to: "/react-hook-form-3/confirm",
      label: "Confirm"
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

export default PartPageLinks;
