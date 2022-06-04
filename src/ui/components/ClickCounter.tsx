import { useState } from "react";

export function ClickCounter() {
  const [checked, setChecked] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <label>
        Check <br />
        <input
          type={"checkbox"}
          name={"checker"}
          id={"checker"}
          onChange={(e) => {
            setCounter(counter + 1);
            setChecked(e.target.checked);
          }}
          checked={checked}
        />
      </label>
      <div>{checked ? "ON" : "OFF"}</div>
      <div>
        <strong>Counter: </strong>
        {counter}
      </div>
    </div>
  );
}
