import React from "react";
import featchApi from "../api/featchApi";

const resosuce = featchApi('https://jsonplaceholder.typicode.com/posts?_limit=5')

function Posts({ handleSelectedData }) {
    const posts = resosuce.read();
  return (
    <>
      <h3>This is Post Selected box</h3>
      <select onChange={handleSelectedData}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option value={post.id} key={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </>
  );
}

export default Posts;
