import React from "react";

function Loading({ text }) {
  return <div className="loader-backdrop">{text}..</div>;
}

export default Loading;
