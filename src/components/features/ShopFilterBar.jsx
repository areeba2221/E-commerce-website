import { useState } from "react";
import { shopFilterData } from "/src/data/Data";
import { FilterRing, Grid, Viewlist } from "/src/assets/Svg";

const ShopFilterBar = () => {
  const [view, setView] = useState("grid");
  const [show, setShow] = useState(16);

  return (
    <div className="w-full bg-[#F9F1E7] px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4 px-18">
        <button
          className="flex items-center gap-2 text-[20px] font-normal text-[#000000]
                 hover:text-[#C8A96E] transition-colors"
        >
          <FilterRing />
          {shopFilterData.filterLabel}
        </button>

        <button
          onClick={() => setView("grid")}
          className={`transition-colors ${
            view === "grid"
              ? "text-[#000000]"
              : "text-gray-400 hover:text-[#C8A96E]"
          }`}
        >
          <Grid />
        </button>

        <button
          onClick={() => setView("list")}
          className={`transition-colors ${
            view === "list"
              ? "text-[#000000]"
              : "text-gray-400 hover:text-[#C8A96E]"
          }`}
        >
          <Viewlist />
        </button>

        <div className="w-px h-6 bg-[#9F9F9F]" />

        <span className="text-[16px] text-[#000000] font-normal">
          {shopFilterData.resultText}
        </span>
      </div>

      <div className="flex items-center gap-3 px-18">
        <span className="text-[20px] text-[#000000] font-normal">
          {shopFilterData.showLabel}
        </span>

        <div className="flex items-center">
          {shopFilterData.showOptions.map((n) => (
            <button
              key={n}
              onClick={() => setShow(n)}
              className={`w-10 h-9 text-sm font-medium border transition-colors ${
                show === n
                  ? "bg-white border-gray-300 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <span className="text-[20px] text-[#000000] font-normal">
          {shopFilterData.sortLabel}
        </span>

        <select className="h-9 px-3 text-[20px] text-gray-400 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 cursor-pointer">
          {shopFilterData.sortOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ShopFilterBar;
