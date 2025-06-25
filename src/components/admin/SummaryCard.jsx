// Subcomponent: Summary Card
export function SummaryCard({ label, value, color }) {
  const bg = {
    green: "bg-green-100",
    yellow: "bg-yellow-100",
    red: "bg-red-200",
  }[color];

  return (
    <div
      className={`${bg} px-4 py-2 rounded-lg shadow-md text-center flex flex-col gap-2 items-center justify-center h-20`}
    >
      <h3 className="font-bold">{label}</h3>
      {value && <span className="">{value}</span>}
    </div>
  );
}
