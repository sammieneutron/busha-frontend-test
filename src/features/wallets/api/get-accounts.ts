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
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return { accounts, loading, error, fetchAccounts }; 
};
