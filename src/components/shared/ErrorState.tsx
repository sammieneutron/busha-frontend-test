import { Button } from "./Button";

interface ErrorStateProps {
  onRetry: () => void; // Accept a function to retry fetching accounts
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full"> {/* Use Flexbox for vertical alignment */}
      <img 
        src="/img/error-icon.png"
        alt="error state"
      />
      <p className="mt-5 text-center">Network Error</p>

      <div className="mt-10">
        <Button onClick={onRetry} type="button">Try again</Button>
      </div>
    </div>
  );
}
