"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const[count, setCount] = useState(0)
  return (
    <div>
      i am a component {count}
      <br />
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  );
}
