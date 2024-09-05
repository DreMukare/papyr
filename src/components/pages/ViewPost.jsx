import React from "react";
import { useParams } from "react-router-dom";

const ViewPost = () => {
  const params = useParams();

  return <div>This is post {params.postId}</div>;
};

export default ViewPost;
