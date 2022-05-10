import { useEffect, useState } from "react";

const useDebounce = (input: string, delay: number) => {
  const [output, setOutput] = useState<string>(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(input);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, input]);

  return output;
};

export default useDebounce;
