export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'send' | 'receive' | 'bill' | 'topup';
  description: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}