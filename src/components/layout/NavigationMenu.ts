import {
  Cog6ToothIcon,
  CurrencyDollarIcon,
  ArrowsRightLeftIcon,
  PresentationChartLineIcon,
  WalletIcon
} from '@heroicons/react/24/outline'


export const navigation = [
  { name: 'Wallets', href: '#', icon: WalletIcon, current: true },
  { name: 'Prices', href: '#', icon: CurrencyDollarIcon, current: false },
  { name: 'Peer2Peer', href: '#', icon: ArrowsRightLeftIcon, current: false },
  { name: 'Activity', href: '#', icon: PresentationChartLineIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
