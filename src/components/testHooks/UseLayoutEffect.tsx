import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TypesSetTargetRect, TypesTooltip, TypesTooltipContainer, TypesTooltipContent } from "../items/types";
import { createPortal } from "react-dom";

const UseLayoutEffect = () => {
  
  return (
    <>
      <h2>useLayoutEffect</h2>
      <ButtonWithTooltip
        tooltipContent={
          <>
            これはマルマルです1
            <br />
            下に.....
          </>
        }
      >
        ホバーしてね。1
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={
          <>
            これはマルマルです2
          </>
        }
      >
        ホバーしてね。2
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={
          <>
            これはマルマルです3
          </>
        }
      >
        ホバーしてね。3
      </ButtonWithTooltip>
      <UseEffectSample />
      <hr />
    </>
  );
}

export default UseLayoutEffect;

const ButtonWithTooltip = ({ tooltipContent, ...rest } : TypesTooltipContent) => {
  const [ targetRect, setTargetRect ] = useState<TypesSetTargetRect>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return(
    <div>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current?.getBoundingClientRect();
          setTargetRect({
            left: rect?.left,
            top: rect?.top,
            right: rect?.right,
            bottom: rect?.bottom,
          });
        }}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>
          {tooltipContent}
        </Tooltip>
      )}
    </div>
  )

}

const Tooltip = ({ children, targetRect }: TypesTooltip) => {
  const ref = useRef<HTMLElement>(null);
  const [ tooltipHeight, setTooltipHeight ] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height);
    }
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      tooltipY = targetRect.bottom;
    };
  };

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}

const TooltipContainer = ({children, x, y, contentRef} : TypesTooltipContainer) => {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
        backgroundColor: "yellow"
      }}
    >
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  )
}

const UseEffectSample = () => {
  //　再レンダリングか何かされて2段に動くが、改善されたか速すぎて分からなかった。
  const [ show, setShow ] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (popup.current == null || button.current == null ) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show])

  return(
    <>
      <button ref={button} onClick={() => setShow(p => !p)}>
        クリックしてくれ
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          これはpopup
        </div>
      )}
    </>
  )
}
