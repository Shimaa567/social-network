import React from "react";

const Post = ({ title = "untitled", body = "blank" }) => {
  return (
    <div>
      <h2 className="display-4">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
