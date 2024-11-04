import { useState } from "react";

interface Props {
  onClose: () => void;
}
export const useAddWallet = ({ onClose }: Props) => {
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [alertState, setAlertState] = useState<"success" | "error" | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const BASE_URL = 'http://localhost:3090';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/accounts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ wallet: selectedWallet }),
      });
  
      if (!response.ok) {
        setAlertState('error');
        setAlertMessage('Network error');
      } else {
        // Handle successful creation
        setAlertState('success');
        setAlertMessage('Wallet created successfully!');
        // Close the modal after a successful creation
        onClose(); // Close the modal
      }
    } catch (error: any) {
      console.error(error);
      setAlertState('error');
      setAlertMessage('Error creating wallet: ' + error.message);
    } finally {
      setIsLoading(false); // Ensure this is in a finally block to always run
    }
  };
  return { 
    isLoading, 
    alertMessage, 
    alertState, 
    selectedWallet, 
    setSelectedWallet, 
    handleSubmit 
  }
}