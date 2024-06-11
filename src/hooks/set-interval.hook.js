import { useMemo, useRef, useEffect, useCallback } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);
  const intervalRef = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(savedCallback.current, delay);
      intervalRef.current = id;
      return () => clearInterval(id);
    }
  }, [delay]);

  useEffect(()=>{
    // clear interval on when component gets removed to avoid memory leaks
    return () => clearInterval(intervalRef.current);
  },[])

  const reset = useCallback(() => {
      if(intervalRef.current!==null){
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(savedCallback.current,delay)
      }
   });

   const stop = useCallback(() => {
      if(intervalRef.current!==null){
        clearInterval(intervalRef.current);
      }     
   })

  return { reset, stop };
};



const useIntervalLegacy = (callback, delay) => {
  const savedCallback = useRef();

  useMemo(() => {
    savedCallback.current = callback;
  }, [callback]);

  useMemo(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default useInterval;
