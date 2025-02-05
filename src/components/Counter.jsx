import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="p-4 bg-blue-500 text-white rounded-md"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
}
