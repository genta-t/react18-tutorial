import { useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

const ClickOutsideComp = () => {
  const [ open, setOpen ] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, () => {
    if (open) setOpen(false);
  });

  return (
    <>
      <h2>clickOutside</h2>
      <button onClick={() => setOpen(!open)}>
        {open ? "Close" : "Open"}
      </button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        <span>モーダル</span>
      </div>
      <hr />
    </>
  )
}

export default ClickOutsideComp;