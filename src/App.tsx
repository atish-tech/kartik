import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>App</h1>
      <p style={{backgroundColor: "darkcyan"}} className="mt-5 p-10">{state}</p>
      <button className="bg-green-500 m-5 p-3" onClick={() => setState(state + 1)}>Increment</button>
    </div>
  );
}

export default App;
