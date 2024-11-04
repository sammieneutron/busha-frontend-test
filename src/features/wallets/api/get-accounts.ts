import { useState, useEffect } from 'react';

export const useGetAccounts = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const BASE_URL = 'http://localhost:3090';

  const fetchAccounts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/accounts`);
      if (!response.ok) {
        throw new Error('Network Error');
      }
      const data = await response.json();
      setAccounts(data);
      setError(null);
    } catch (error: any) {
      if (error.name !== 'AbortError') { // Avoid updating state if the error is from an aborted fetch
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        if (isMounted) {
          await fetchAccounts();
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup to prevent state updates
    };
  }, []);

  return { accounts, loading, error, fetchAccounts };
};
