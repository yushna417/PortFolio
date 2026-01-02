interface ControlledSwitchProps {
  value: "left" | "right";
  onChange: (value: "left" | "right") => void;
  leftText: string;
  rightText: string;
}

export const ControlledSwitch = ({
  value,
  onChange,
  leftText,
  rightText,
}: ControlledSwitchProps) => {
  return (
    <div className="relative md:w-2/5 w-full rounded-xl bg-white dark:bg-slate-800 py-3 px-2 overflow-x-hidden">
      <div
        className={`absolute top-1.5  h-[calc(100%-12px)] w-[calc(60%-9px)] md:w-[calc(50%-9px)] rounded-2xl shadow-2xl bg-[#0f172a] transition-all
          ${value === "right" ? "translate-x-full" : ""}`}
      />

      <button
        onClick={() => onChange("left")}
        className={`relative z-10 md:w-1/2 w-2/3 md:text-xl text-lg text-center 
          ${value === "left" ? "font-semibold text-slate-300" : "text-gray-500"}`}
      >
        {leftText}
      </button>

      <button
        onClick={() => onChange("right")}
        className={`relative z-10 md:w-1/2 text-center w-1/3 md:text-xl text-lg 
          ${value === "right" ? "font-semibold text-slate-300" : "text-gray-500"}`}
      >
        {rightText}
      </button>
    </div>
  );
};


