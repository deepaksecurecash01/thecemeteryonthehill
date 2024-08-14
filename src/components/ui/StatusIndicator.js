const StatusIndicator = ({ color, text }) => (
  <div className="flex justify-start gap-4 items-center">
    <div className={`bg-${color} w-16 h-[6px] rounded-full`} />
    <h2>{text}</h2>
  </div>
);

export default StatusIndicator