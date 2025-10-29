import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(250);
  const adminNumber = "27640408073";  // Your number

  const sendWhatsApp = (type) => {
    const messages = {
      register: `New Registration: R${amount} investment.`,
      payment: `Payment sent: R${amount}.`,
      matured: `Maturity Request: R${Math.floor(amount * 1.3)}.`
    };
    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(messages[type])}`, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-5xl font-bold mb-4">Earn 30% in 14 Days</h1>
      <p className="text-xl mb-8">Start from R250 — no limit</p>

      <div className="bg-gray-800 p-6 rounded-xl cyber-border mb-8">
        <label className="block mb-2 text-lg">Investment Amount</label>
        <input
          type="number"
          min="250"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-48 p-3 bg-gray-700 text-white rounded text-center text-xl"
        />
        <p className="mt-2 text-cyan-400 text-2xl">→ R{Math.floor(amount * 1.3)} in 14 days</p>
      </div>

      <div className="space-y-4">
        <button onClick={() => sendWhatsApp("register")} className="w-full py-3 bg-green-600 rounded-lg hover:bg-green-700 font-bold">
          Confirm Registration
        </button>
        <button onClick={() => sendWhatsApp("payment")} className="w-full py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 font-bold">
          Confirm Payment
        </button>
        <button onClick={() => sendWhatsApp("matured")} className="w-full py-3 bg-red-600 rounded-lg hover:bg-red-700 font-bold">
          Request Maturity
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        Fill form → Pay → Confirm via WhatsApp → Admin activates → Withdraw after 14 days.
      </p>
    </div>
  );
}