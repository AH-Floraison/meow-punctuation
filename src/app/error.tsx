"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>出错了</h1>
      <p>{error.message}</p>
      <button onClick={reset}>重试</button>
    </div>
  );
}

