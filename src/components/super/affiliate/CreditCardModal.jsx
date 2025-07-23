

const Card = ({
  title,
  earn,
  benefits,
  joiningFee,
  annualFee,
  approvalRate,
}) => (
  <div className="bg-white shadow-lg rounded-xl p-5 w-full max-w-md">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-xl font-semibold text-blue-800">{title}</h2>
      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-bold">
        earn upto ₹{earn}
      </div>
    </div>
    <ul className="space-y-2 text-sm mb-4 text-gray-800">
      {benefits.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-lg">{item.icon}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
    <div className="text-sm text-gray-700 border-t pt-3">
      <div>Joining Fee: ₹{joiningFee}</div>
      <div>Annual Fee: ₹{annualFee}</div>
      <div>Approval Rate: <span className="font-medium text-green-700">{approvalRate}</span></div>
    </div>
    <button className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200">
      🔁 Share
    </button>
  </div>
);

const CreditCardModal = () => {
  const sbiBenefits = [
    { icon: "🛍️", text: "Up to 5% Cashback on online spends" },
    { icon: "🎁", text: "Welcome Gifts like Smartwatch & Vouchers" },
    { icon: "🏆", text: "10X Reward Points on Myntra, BMS, Apollo, etc." },
    { icon: "🧳", text: "Free Airport Lounge Access (on select cards)" },
    { icon: "🛡️", text: "Insurance Cover up to ₹50 Lakhs*" },
    { icon: "⛽", text: "Fuel Surcharge Waiver" },
    { icon: "💳", text: "Instant EMI Conversion" },
    { icon: "🔥", text: "Trusted by 15 Million+ users | Backed by SBI" },
  ];

  const hsbcBenefits = [
    { icon: "🎁", text: "₹500 Cashback – Spend ₹5,000 in 30 days via HSBC App" },
    { icon: "🛢️", text: "Fuel Savings – Save up to ₹3,000 annually on fuel surcharge*" },
    { icon: "✈️", text: "Travel Smarter – Convert spends into Air Miles with InterMiles, British Airways & Singapore Airlines" },
    { icon: "🎯", text: "Accelerated Rewards – Earn 5X points post ₹4L spend (up to 15,000 bonus points)" },
    { icon: "🧳", text: "Lifestyle Perks – Enjoy complimentary domestic airport lounge access" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6 items-center justify-center">
      <Card
        title="SBI Credit Card"
        earn="1600.00"
        benefits={sbiBenefits}
        joiningFee="200.00"
        annualFee="480.00"
        approvalRate="Excellent"
      />
      <Card
        title="HSBC Credit Card"
        earn="2000.00"
        benefits={hsbcBenefits}
        joiningFee="1.00"
        annualFee="100.00"
        approvalRate="Excellent"
      />
    </div>
  );
};

export default CreditCardModal;
