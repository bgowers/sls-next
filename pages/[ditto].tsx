import { useState } from "react";
import Link from "next/link";

const Ditto = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <span> {count} </span>
        <button onClick={() => setCount((x) => x + 1)}>Click me</button>
      </div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </>
  );
};

export default Ditto;
