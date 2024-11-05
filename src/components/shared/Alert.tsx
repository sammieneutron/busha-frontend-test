import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

interface Props {
  state: string;
  message: string;
}
export default function Alert({ state, message }: Props) {
  return (
    <div className={`rounded-md ${state === 'error' ? 'bg-red-50' : 'bg-green-50'}  p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {state === 'error' ? 
            <XMarkIcon aria-hidden="true" className={`h-5 w-5 text-red-400`} /> :
            <CheckCircleIcon aria-hidden="true" className={`h-5 w-5 text-green-400`} />
          }
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${state === 'error' ? 'text-red-800' : 'text-green-800'} `}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`inline-flex rounded-md ${state === 'error' ? 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-gredreen-50 focus:ring-red-600' : 'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600'}  p-1.5  focus:outline-none focus:ring-2  focus:ring-offset-2 `}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
