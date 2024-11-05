import { useState, useEffect } from 'react';

export const useGetWallets = () => {
  const [wallets, setWallets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const BASE_URL = 'http://localhost:3090';

  const fetchWallets = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/wallets`);
      if (!response.ok) {
        throw new Error('Network Error');
      }
      const data = await response.json();
      setWallets(data); 
      setError(null); 
    } catch (error: any) {
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchWallets();
  }, []);

  return { wallets, loading, error, fetchWallets }; 
};
