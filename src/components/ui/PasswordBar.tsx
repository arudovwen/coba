interface PasswordBarProps {
  percent: number;
}

const getStrengthColor = (threshold: number, percent: number): string => {
  if (percent >= threshold) {
    if (percent >= 100) return "#22C55E"; // Strong - Green
    if (percent >= 66.6) return "#FACC15"; // Medium - Yellow
    if (percent >= 33.3) return "#F97316"; // Weak - Orange
  }
  return "#D1D5DB"; // Default - Gray
};

const getStrengthLabel = (percent: number) => {
  if (percent >= 100) return { label: "Strong", color: "#22C55E" };
  if (percent >= 66.6) return { label: "Medium", color: "#FACC15" };
  if (percent >= 33.3) return { label: "Weak", color: "#F97316" };
  return { label: "Poor", color: "#ef5d5d" };
};

export default function PasswordBar({ percent }: PasswordBarProps) {
  const bars = [33.3, 66.6, 100];
  const strength = getStrengthLabel(percent);

  return (
    <div>
      <div className="flex gap-x-2">
        {bars.map((threshold, index) => (
          <div
            key={index}
            style={{
              backgroundColor: getStrengthColor(threshold, percent),
            }}
            className="py-[2.5px] rounded-full w-[120px]"
          />
        ))}
      </div>
      <span className="text-[11px] text-gray/70">
        Password strength:{" "}
        <span style={{ color: strength.color }}>{strength.label}</span>
      </span>
    </div>
  );
}
