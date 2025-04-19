import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-area">
        <button onClick={() => setCount(count + 1)} className="counter-btn">
        Count is: {count}
        </button>
    </div>
  );
}
