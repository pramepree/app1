import React from "react";

function App() {
  let r = '<b>React</b>';
  let rn = "React Native";
  const el = (
    <div>
      Create Web & Moblie Apps <br />
      wiht <span dangerouslySetInnerHTML={{__html:r}}/> & {rn}
    </div>
  )
  return el
}

export default App;
