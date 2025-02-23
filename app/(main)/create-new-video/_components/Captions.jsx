import React, { useState } from "react";

const options = [
  {
    name: "Youtuber",
    style:
      "text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Supreme",
    style:
      "text-white text-3xl font-bold italic drop-shadow-lg px-3 py-1 rounded-lg",
  },
  {
    name: "Neon",
    style:
      "text-green-400 text-3xl font-semibold uppercase tracking-widest drop-shadow-lg px-3 py-1 rounded-lg",
  },
  {
    name: "Cyber",
    style:
      "text-blue-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-xl px-3 py-1 rounded-lg",
  },
  {
    name: "Elegant",
    style:
      "text-purple-500 text-3xl font-light italic tracking-wide drop-shadow-md px-3 py-1 rounded-lg",
  },
  {
    name: "Fire",
    style:
      "text-red-500 text-3xl font-black uppercase tracking-widest drop-shadow-2xl px-3 py-1 rounded-lg",
  },
  {
    name: "Frost",
    style:
      "text-cyan-300 text-3xl font-medium uppercase tracking-wider drop-shadow-lg px-3 py-1 rounded-lg",
  },
  {
    name: "Futuristic",
    style:
      "text-teal-400 text-3xl font-medium uppercase tracking-[0.2em] drop-shadow-2xl px-3 py-1 rounded-lg",
  },
];

function Captions({ onHandleInputChange }) {
  const [selectedCaption, setSelectedCaption] = useState();

  return (
    <div className="mt-5">
      <h2>Caption Style</h2>
      <p className=" text-sm text-gray-400 ">Select Caption style</p>

      <div className=" flex flex-wrap gap-4 mt-2">
        {options?.map((option, i) => (
          <div
            key={i}
            className={`p-2 hover:border border-gray-300 cursor-pointer rounded-lg bg-slate-900 ${selectedCaption == option.name && "border"}`}
            onClick={() => {
              setSelectedCaption(option.name);
              onHandleInputChange("caption",option);
            }}
          >
            <h2 className={option.style}>{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Captions;
