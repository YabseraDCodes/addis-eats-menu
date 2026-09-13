import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ctrl = new AbortController();

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url, { signal: ctrl.signal,});

                if (!response.ok) {
                    throw new Error("Unable to load the menu");
                }
                const result = await response.json();
                setData(result);
            } catch (e) {
                if (e.name === "AbortError") {
                    return;
                }
                console.error("Error Fetching data:", e);
                setError(e.message);
            } finally {
                if (!ctrl.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => ctrl.abort();
    }, [url]);

    return { data, loading, error };
}