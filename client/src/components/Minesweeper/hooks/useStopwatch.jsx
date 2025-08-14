import { useEffect, useRef, useState } from "react";

export function useStopwatch(active, frozenAt = 999) {
  const [elapsed, setElapsed] = useState(0);
  const id = useRef(null);

  useEffect(() => {
    if (active) {
      if (!id.current) {
        id.current = setInterval(() => {
          setElapsed((s) => Math.min(s + 1, frozenAt));
        }, 1000);
      }
    } else {
      clearInterval(id.current);
      id.current = null;
    }
    return () => clearInterval(id.current);
  }, [active, frozenAt]);

  const reset = () => setElapsed(0);
  return { elapsed, reset };
}
