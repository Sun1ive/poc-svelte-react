import React, { useCallback, useEffect } from "react";
import { keyboard } from "./kb_constant";
import "./keyboard.css";

export const Keyboard = ({ callback }) => {
  const handleClick = useCallback(
    (e) => {
      let value;

      if (typeof e === "string") {
        value = e;
      } else {
        value = e.currentTarget.innerText;
      }

      if (value === "backspace") {
        callback((v) => v.slice(0, v.length - 1));
      } else if (value === "space") {
        callback((v) => v + " ");
      } else {
        callback((v) => v + value);
      }
    },
    [callback]
  );

  useEffect(() => {
    const handle = (e) => {
      const { key } = e;
      handleClick(key);
    };

    window.addEventListener("keydown", handle);
    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [handleClick]);

  const render = keyboard.map((row, i) => (
    <div className="row" key={i}>
      {row.map(({ key }) => (
        <div onClick={handleClick} className="item" key={key}>
          {key}
        </div>
      ))}
    </div>
  ));

  return <div>{render}</div>;
};
