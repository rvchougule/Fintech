import { useLocation } from "react-router";

const Card = ({
  title,
  earn,
  benefits,
  joiningFee,
  annualFee,
  approvalRate,
}) => (
  <div className="dark:bg-darkBlue dark:text-white shadow-lg rounded-xl p-5 w-full max-w-md">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-xl font-semibold text-blue-800 dark:text-white">{title}</h2>
      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-bold dark:text-black">
        earn upto ₹{earn}
      </div>
    </div>
    <ul className="space-y-2 text-sm mb-4 text-gray-800 dark:text-white">
      {benefits.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-lg">{item.icon}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
    <div className="text-sm text-gray-700 border-t pt-3 dark:text-white">
      <div>Joining Fee: ₹{joiningFee}</div>
      <div>Annual Fee: ₹{annualFee}</div>
      <div>
        Approval Rate:{" "}
        <span className="font-medium text-green-700 dark:text-white">{approvalRate}</span>
      </div>
    </div>
    <button className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200">
      🔁 Share
    </button>
  </div>
);

const CreditCardModal = ({ CustomComponent }) => {
  const location = useLocation();
  const state = location.state || [];

  return (
    <div className="dark:bg-darkBlue/70 min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6 items-center justify-center">
      {state.map((item, index) => (
        <div className="" key={index}>
          <Card
            title={item.title}
            earn={item.earn}
            benefits={item.benefits}
            joiningFee={item.joiningFee}
            annualFee={item.annualFee}
            approvalRate={item.approvalRate}
          />
        </div>
      ))}
    </div>
  );
};

export default CreditCardModal;
