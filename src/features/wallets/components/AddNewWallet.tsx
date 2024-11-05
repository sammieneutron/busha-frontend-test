import { XMarkIcon } from "@heroicons/react/20/solid";
import Modal from "../../../components/shared/Modal";
import { SelectField } from "../../../components/shared/SelectField";
import { Button } from "../../../components/shared/Button";
import { useGetWallets } from "../api/get-wallets";
import Loader from "../../../components/shared/Loader";
import { ErrorState } from "../../../components/shared/ErrorState";
import { useState } from "react";
import Alert from "../../../components/shared/Alert";
import { useAddWallet } from "../api/add-wallet";

interface Props {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export function AddNewWallet({ isOpen, title, description, onClose }: Props) {
  const { wallets, loading, error, fetchWallets } = useGetWallets();
  const { isLoading, alertMessage, alertState, setSelectedWallet, handleSubmit } = useAddWallet({ onClose });
  // Handle select change
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWallet(event.target.value);
  };
  const BASE_URL = 'http://localhost:3090';
  // Handle form submission  

  // Map the wallets to the expected format for the SelectField options
  const walletOptions = wallets.map(wallet => ({
    label: wallet.name,
    value: wallet.currency,
  }));

  return (
    <Modal isOpen={isOpen}>
      {loading && (
        <div className="flex items-center justify-center h-full">
          <Loader />
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center h-full">
          <ErrorState onRetry={fetchWallets} />
        </div>
      )}

      {!loading && !error && (
        <div className="p-8">
          <div className="flex justify-between mt-5">
            <p className="font-bold text-xl">{title}</p>
            <button
              type="button"
              aria-label="Close button"
              onClick={onClose} // Ensure the close functionality is attached
            >
              <XMarkIcon className="h-5 w-5 cursor-pointer" />
            </button>

          </div>

          <div className="mt-10">
            <p className="text-[#3E4C59]">{description}</p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <>
                <SelectField
                  label="Select wallet"
                  options={walletOptions}
                  onChange={handleSelectChange} // Update state on select change
                />
                <div className="mt-5 flex justify-center">
                  <Button type="submit">
                    {isLoading ? <span aria-label="Loading...">Loading...</span> : "Create wallet"}
                  </Button>
                </div>
              </>
            </form>
            <div className="mt-10">
              {alertState && <Alert state={alertState} message={alertMessage} />}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
