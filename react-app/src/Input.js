import React from "react";
import "./input.css";

export const Input = ({ text }) => {
  return (
    <div className="typewriter" dangerouslySetInnerHTML={{ __html: text }} />
  );
};
