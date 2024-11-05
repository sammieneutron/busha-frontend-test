
import * as React from 'react';

interface AppPageHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}
export function AppPageHeader({
  title,
  description,
  children,
}: AppPageHeaderProps) {
  return (
    <div className="mb-8 mt-4 flex items-center justify-between">
      <div className="flex items-center">
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="mt-1 text-base font-medium text-gray-700">
            {description}
          </p>
        </div>
        <hr/>
      </div>
      <div>{children}</div>
    </div>
  );
}
