import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { MasonryLayout, Spinner } from "../components";

const Feed = () => {
  const [loading, setLoading] = useState(false);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!!" />;
  return <div></div>;
};

export default Feed;
