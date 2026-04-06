import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div style={{ padding: 40, fontFamily: "monospace" }}>
      <h1>🧪 Env Var Test</h1>
      
      <h2>Server Vars (runtime injection):</h2>
      <p>MY_SECRET = {process.env.MY_SECRET || "❌ NOT SET"}</p>
      <p>DATABASE_URL = {process.env.DATABASE_URL || "❌ NOT SET"}</p>

      <h2>Public Vars (baked at build time):</h2>
      <p>NEXT_PUBLIC_MY_VAR = {process.env.NEXT_PUBLIC_MY_VAR || "❌ NOT SET"}</p>
    </div>
    </div>
  );
}
