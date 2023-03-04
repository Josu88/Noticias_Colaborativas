import { useEffect, useState } from "react";

const useCounter = (initialCounter = 0) => {
  const [counter1, setCounter1] = useState(initialCounter);
  const [counter2, setCounter2] = useState(initialCounter);
  useEffect(() => {
    document.title = ` ${counter1}`;
  }, [counter1]);
  useEffect(() => {
    document.title = ` ${counter2}`;
  }, [counter2]);
  const like = () => {
    setCounter1(counter1 + 1);
  };
  const unlike = () => {
    setCounter2(counter2 + 1);
  };

  return { counter1, counter2, like, unlike };
};

export default useCounter;
