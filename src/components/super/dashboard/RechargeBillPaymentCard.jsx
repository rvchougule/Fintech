import {
  FaMobileAlt,
  FaTv,
  FaBolt,
  FaShieldAlt,
  FaTint,
  FaGasPump,
  FaCreditCard,
  FaEllipsisH,
} from "react-icons/fa";

const services = [
  { label: "Mobile", icon: <FaMobileAlt /> },
  { label: "DTH", icon: <FaTv /> },
  { label: "Electricity", icon: <FaBolt /> },
  { label: "Life", icon: <FaShieldAlt /> },
  { label: "Water", icon: <FaTint /> },
  { label: "Pipe Gas", icon: <FaGasPump /> },
  { label: "Credit", icon: <FaCreditCard /> },
  { label: "View More", icon: <FaEllipsisH /> },
];

export default function RechargeBillPaymentCard() {
  return (
    <div className="border border-dashed border-yellow-400 rounded-xl p-4  ">
      <h2 className=" font-semibold text-lg mb-4">Recharge & Bill Payments</h2>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-accentGreen"
          >
            <div className="text-2xl bg-yellow-900/10 p-4 rounded-full mb-1">
              {service.icon}
            </div>
            <span className="text-xs text-center">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
