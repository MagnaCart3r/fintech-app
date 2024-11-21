import { Transaction } from '../types';
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  ReceiptIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  const getIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'send':
        return <ArrowUpIcon className="w-5 h-5 text-red-500" />;
      case 'receive':
        return <ArrowDownIcon className="w-5 h-5 text-green-500" />;
      case 'bill':
        return <ReceiptIcon className="w-5 h-5 text-blue-500" />;
      case 'topup':
        return <PhoneIcon className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recent Transactions</h2>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              {getIcon(transaction.type)}
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className={clsx(
              'font-semibold',
              transaction.type === 'receive' ? 'text-green-600' : 'text-gray-900'
            )}>
              {transaction.type === 'receive' ? '+' : '-'}₦{transaction.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}