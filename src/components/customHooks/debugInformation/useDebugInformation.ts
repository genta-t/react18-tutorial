import { useEffect, useRef } from "react";
import { useRenderCount } from "../renderCount/useRenderCount"

export type TypesChildComp = {
  boolean: boolean;
  count: number;
}

export const useDebugInformation = (compName: string, props: TypesChildComp) => {
  const count = useRenderCount();
  const changedProps = useRef({});
  const previousProps = useRef(props);
  const lastRenderTimestamp = useRef(Date.now());

  const propKeys = Object.keys({ ...props, ...previousProps.current }) as (keyof TypesChildComp)[];
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj;
    return {
      ...obj,
      [key] : {
        previous: previousProps.current[key],
        current: props[key]
      },
    }
  }, {});
  
  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current,
  }

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();
    console.log("[debug-info]", compName, info);
  })

  return info;
}
