import { useState } from "react";

const useObjectState = (initial = {}) => {
  if(typeof initial != "object") {
    throw new Error("useObjectState can only be used with objects");
  }
  const [state, updateState] = useState(initial);

  const setState = (newStateValue) => {
    updateState({
      ...state,
      ...newStateValue
    });
  }

  return [
    state,
    setState
  ];
};

export default useObjectState;