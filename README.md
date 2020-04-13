## This repository houses the implementation of useObjectState hook.

useObjectState is a custom react hook developed to mimic the behavior of the old setState method while using class components.

This hook uses `useState` hook under the hood. In fact, it is just a wrapper around it to ensure that we dont have to perform destructuring operation when dealing with object state and also to ensure that we dont intruduce a data reset bug by accident; happens when we setState without specifying other values when using react hook `useState`

The implementation is simple and given below : 
```js

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

```

You can use the above hook in your react components.

```js
  const [state, updateState] = useObjectState({
    name : "Name",
    unchangedValue : 12
  });
  const updateName = () => updateState({
    name : "New updated name"
  });
  // updateName method just updates the name. We dont have to care about the other values in the object here.
  // without it, we would have to use something like Object.assign({}, state, {name : "new name"}); or setState({...state, {name:"New name"}})
  // Our custom hook uses the latter approach under the hood.
  ```
