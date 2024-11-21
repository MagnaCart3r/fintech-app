import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

export default function SendMoney() {
  const navigate = useNavigate();
  const { updateBalance, addTransaction } = useStore();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = Number(amount);

    if (!recipient || !numAmount) {
      toast.error('Please fill in all fields');
      return;
    }

    updateBalance(-numAmount);
    addTransaction({
      id: Date.now().toString(),
      amount: numAmount,
      type: 'send',
      description: `Transfer to ${recipient}`,
      date: new Date(),
      status: 'completed'
    });

    toast.success('Money sent successfully!');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Send Money</h1>
      
      <form onSubmit={handleSend} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Recipient</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter recipient name or number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount (₦)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter amount"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Send Money
        </button>
      </form>
    </div>
  );
}