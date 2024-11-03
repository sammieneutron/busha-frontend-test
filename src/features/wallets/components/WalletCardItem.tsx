import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { CurrencyPresenter } from "../../../components/shared/CurrencyPresenter";

interface Props{
  account: any;
}
export function WalletCardItem({account}: Props) {
  return (
    <div
      key={account.id}
      className="relative overflow-hidden rounded-2xl bg-gray-900 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
      >
      <dt className="flex items-center">
        <div className="rounded-full p-3">
          <img 
            src={account.imgURL}
            onError={(e) => {
              const currencyToImage: any = {
                BTC: '/img/BTC.png',
                NGN: '/img/NGN.png',
                ETH: '/img/ETH.png',
                LTC: '/img/LTC.png', // Default image if no match
              };

              e.currentTarget.src = currencyToImage[account.currency] || 
              currencyToImage.LTC; // Fallback to LTC
            }}
            className="h-12 w-12" 
            alt={account.name || "Account icon"}
          /> 
        </div>
        <p className="ml-4 truncate text-lg font-medium text-gray-500">{account.name}</p>
      </dt>
      <dd className="ml-4">
        <p className="text-2xl font-semibold text-[#ffffff]">
          {/* <CurrencyPresenter prefix={account.currency === 'NGN' ? '₦' : ''} value={account.balance} />{' '} 
          {account.currency !== 'NGN' ? account.currency : ''} */}
          {account.balance}
        </p>
      </dd>
      <div className="absolute right-0 bottom-0 px-4 py-4 sm:px-6">
        <a href="#">
          <div className="bg-[#303030] text-[#ffffff] rounded-full p-3 flex items-center justify-center">
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </div>
        </a>
      </div>
    </div>
  )
}