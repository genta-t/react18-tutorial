import { useRef } from "react";
import { useSize } from "./useSize";

const SizeComp = () => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const size = useSize(ref);

  return (
    <>
      <h2>size</h2>
      <p style={{ maxWidth: "700px"}}>{JSON.stringify(size)}</p>
      <textarea ref={ref} />
      <hr />
    </>
  )
}

export default SizeComp;