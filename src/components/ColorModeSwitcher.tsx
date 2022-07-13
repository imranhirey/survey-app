import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState } from "react";
const ColorModeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="absolute top-3 right-5 md:right-9">
      <button className="bg-gray-400/80 rounded-sm p-1 focus:ring-4 focus:ring-offset focus:ring-slate-700 border-none">
        {isDark && (
          <MoonIcon
            className="h-6 w-6 text-gray-700"
            onClick={() => setIsDark(false)}
          />
        )}
        {!isDark && (
          <SunIcon
            className="h-6 w-6 text-gray-700"
            onClick={() => setIsDark(true)}
          />
        )}
      </button>
    </div>
  );
};

export default ColorModeSwitcher;
