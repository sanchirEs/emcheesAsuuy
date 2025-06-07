'use client';
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="flex h-screen items-center justify-center">
        <div>
          <h2 className="text-2xl font-semibold">Something went wrong</h2>
          <p className="mt-2 opacity-80">{error.message}</p>
          <button onClick={reset} className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
