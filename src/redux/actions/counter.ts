export const INCREMENT = "INCREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const asyncIncrementCreator = () => {
  return {
    type: ASYNC_INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
