import React from "react";
import { keyboard } from "./kb_constant";
import "./keyboard.css";

export const Keyboard = () => {
  const render = keyboard.map((row, i) => (
    <div className="row" key={i}>
      {row.map(({ key }) => (
        <div className="item" key={key}>
          {key}
        </div>
      ))}
    </div>
  ));

  return <div>{render}</div>;
};
