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
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};

export const createPosts = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: FETCH_POSTS,
        payload: post,
      })
    );
};
