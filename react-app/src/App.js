import { useMemo, useState } from "react";
import "./App.css";
import { Input } from "./Input";
import { Keyboard } from "./Keyboard";

function App() {
  const [text, setState] = useState("");

  const nodes = useMemo(() => text.split(/(\s|&nbsp;)/g), [text]);

  return (
    <div className="App">
      <Input text={text} />
      <hr />
      <div className="container node">
        {nodes.map((node, k) => (
          <div key={k}>{node}</div>
        ))}
        {nodes.map((node, k) => (
          <div key={k}>{node}</div>
        ))}
        {nodes.map((node, k) => (
          <div key={k}>{node}</div>
        ))}
      </div>
      <hr />
      <Keyboard callback={setState} />
    </div>
  );
}

export default App;
