import { FETCH_POSTS, NEW_POST } from "./types";

// export function fetchPosts() {
//   return function (dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => dispatch({
//           type: FETCH_POSTS,
//           payload: posts
//       }));
//   };
// } OR

export const fetchPosts = () => (dispatch) => {
  console.log("fetching");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};
