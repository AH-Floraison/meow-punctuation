"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
          <h1>全局错误</h1>
          <p>{error.message}</p>
          <button onClick={reset}>重试</button>
        </div>
      </body>
    </html>
  );
}

