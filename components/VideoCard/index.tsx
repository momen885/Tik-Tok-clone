import React from "react";
import { Video } from "../../types";

interface Props {
  post: Video;
}

const index = ({ post }: Props) => {
  return (
    <div>
      <h2>Video card </h2>
    </div>
  );
};

export default index;
