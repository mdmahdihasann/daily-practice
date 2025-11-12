import React, { useEffect, useState } from "react";

function Comments({selectData}) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const featchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${selectData}/comments`    
        );
        const data = await response.json();

        if (response.ok) {
          setIsLoading(false);
          setComments(data);
        } else {
          setIsLoading(false);
          setError("there was an error");
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    featchPost();
  }, [selectData]);

  let contentData;

  if (isLoading) {
    contentData = "data is loading....";
  } else if (!isLoading && error) {
    contentData = <h3>{error}</h3>;
  } else {
    contentData = (
      <>
        <h3>This is comments Selected box</h3>
        <ul style={{display: "grid"}}>
          {comments.map((comment, index) => (
            <li key={index}>{comment.name}</li>
          ))}
        </ul>
      </>
    );
  }

  return <>{contentData}</>;
}

export default Comments;
