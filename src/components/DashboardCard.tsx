import { ReactNode } from 'react';
import clsx from 'clsx';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  variant?: 'default' | 'success' | 'warning';
}

export function DashboardCard({ title, value, icon, variant = 'default' }: DashboardCardProps) {
  return (
    <div className={clsx(
      'rounded-xl p-6 shadow-sm',
      variant === 'default' && 'bg-white',
      variant === 'success' && 'bg-green-50',
      variant === 'warning' && 'bg-yellow-50'
    )}>
      <div className="flex items-center gap-4">
        <div className={clsx(
          'rounded-full p-3',
          variant === 'default' && 'bg-blue-100 text-blue-600',
          variant === 'success' && 'bg-green-100 text-green-600',
          variant === 'warning' && 'bg-yellow-100 text-yellow-600'
        )}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}