import { Link } from 'react-router-dom'
import { classNames, navigation } from './NavigationMenu'

export function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="/img/logo.svg"
          className="h-8 w-auto"
          data-testid="logo"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-[#04A700]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#04A700]',
                      'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                    )}
                  >
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current ? 'text-[#04A700]' : 'text-gray-400 group-hover:text-[#04A700]',
                        'h-6 w-6 shrink-0',
                      )}
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}