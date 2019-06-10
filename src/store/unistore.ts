import createStore from "unistore";
import devtools from "unistore/devtools";

// initial state
// TODO: persist it
const initialState = { count: 0 };

const actions = (state) => ({
    increase: ({ count }, event) => {
      return { count: count + 1 };
    },
  });

const store = process.env.NODE_ENV === "production" ?  createStore(initialState) : devtools(createStore(initialState));

export { actions };
export default store;
