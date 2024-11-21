import { create } from 'zustand';
import { User, Transaction } from '../types';

interface Store {
  user: User | null;
  transactions: Transaction[];
  balance: number;
  setUser: (user: User | null) => void;
  addTransaction: (transaction: Transaction) => void;
  updateBalance: (amount: number) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  transactions: [],
  balance: 0,
  setUser: (user) => set({ user }),
  addTransaction: (transaction) => 
    set((state) => ({ transactions: [transaction, ...state.transactions] })),
  updateBalance: (amount) => 
    set((state) => ({ balance: state.balance + amount })),
}));