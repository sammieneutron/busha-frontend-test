import { useState } from 'react';
import AppLayout from '../components/layout';
import Loader from '../components/shared/Loader';

import { AppPageHeader } from '../components/layout/AppPageHeader';
import { AddNewWallet } from '../features/wallets/components/AddNewWallet';
import { useGetAccounts } from '../features/wallets/api/get-accounts';
import { ErrorState } from '../components/shared/ErrorState';
import { WalletCardItem } from '../features/wallets/components/WalletCardItem';

export default function Wallets() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { accounts, loading, error, fetchAccounts } = useGetAccounts();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <AppLayout>
      <AppPageHeader 
        title='Wallet'
        description='View/Manage your wallet'
      >
        <p 
          className='font-bold cursor-pointer text-blue-500 hover:underline'
          onClick={handleOpenModal}
        >
          + Add new wallet
        </p>
      </AppPageHeader>

      <div className="mt-5">
        {loading && (
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center h-full">
            <ErrorState onRetry={fetchAccounts} />
          </div>
        )}
        {!loading && !error && (
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <WalletCardItem account={account} key={account.id} />
            ))}
          </dl>
        )}
      </div>

      <AddNewWallet 
        title='Add new wallet' 
        description='The crypto wallet will be created instantly and be available in your list of wallets.' 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </AppLayout>
  );
}
