
import { useState, useEffect } from "react";
import "./App.css";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        setLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
         setError(err.message);
      } finally {
          setLoading(false);
      }
    };

    
    fetchData();
  }, [url]);

  return { data, loading, error };
}

function App() {
  
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [colors] = useState(() =>
    Array.from(
      { length: 100 },
      () =>
        `#${Math.floor(
          Math.random() * 16777215
        )
          .toString(16)
          .padStart(6, "0")}`
    )
  );

  return (
    <section className="min-h-screen w-full bg-gray-800 text-white">
      {loading && (
        <p className="flex h-screen items-center justify-center text-lg text-gray-200">
          Loading...
        </p>
      )}

      {error && (
        <p className="flex h-screen items-center justify-center p-4 text-center text-red-300">
          Error: {error}
        </p>
      )}

      {!loading && !error && posts && (
        <div className="mx-auto max-w-6xl px-5 py-5">
          <h1 className="py-10 text-center text-2xl font-bold">
            Photos
          </h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="rounded-lg border border-gray-400"
              >
                <div className="flex flex-col items-center p-5">
                  <div
                    className="flex h-40 w-40 items-center justify-center border border-gray-400"
                    style={{
                      backgroundColor: colors[index],
                    }}
                  >
                    <p className="text-center">
                      600 x 600
                    </p>
                  </div>

                  <p className="mt-3 text-center font-semibold">
                    {post.title}
                  </p>  
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
