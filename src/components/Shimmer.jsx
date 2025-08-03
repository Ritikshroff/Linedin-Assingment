import React from "react";

const Shimmer = ({ height = 20, width = "100%", className = "" }) => (
  <div
    className={`animate-pulse bg-gray-200 rounded ${className}`}
    style={{ height, width }}
  />
);

export default Shimmer;
