import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function Editor() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} autoFocus preview="live" />
    </div>
  );
}

export default Editor;
