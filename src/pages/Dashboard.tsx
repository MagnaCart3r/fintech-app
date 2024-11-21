import { 
  WalletIcon, 
  ArrowPathIcon, 
  BanknotesIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { useStore } from '../store/useStore';
import { DashboardCard } from '../components/DashboardCard';
import { TransactionList } from '../components/TransactionList';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { balance, transactions } = useStore();

  const quickActions = [
    { title: 'Send Money', icon: BanknotesIcon, path: '/send' },
    { title: 'Top Up', icon: PhoneIcon, path: '/topup' },
    { title: 'Pay Bills', icon: WalletIcon, path: '/bills' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowPathIcon className="w-5 h-5" />
        </button>
      </div>

      <DashboardCard
        title="Available Balance"
        value={`₦${balance.toLocaleString()}`}
        icon={<WalletIcon className="w-6 h-6" />}
        variant="success"
      />

      <div className="grid grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            to={action.path}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <action.icon className="w-6 h-6 mb-2" />
            <span className="text-sm font-medium">{action.title}</span>
          </Link>
        ))}
      </div>

      <TransactionList transactions={transactions} />
    </div>
  );
}