import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

const voiceOptions = [
  {
    value: "af_sarah",
    name: "🇺🇸 Sarah (Female)",
  },
  {
    value: "af_sky",
    name: "🇺🇸 Sky (Female)",
  },
  {
    value: "am_adam",
    name: "🇺🇸 Adam (Male)",
  },
  {
    value: "am_echo",
    name: "🇺🇸 Echo (Male)",
  },
  {
    value: "am_eric",
    name: "🇺🇸 Eric (Male)",
  },
  {
    value: "am_fenrir",
    name: "🇺🇸 Fenrir (Male)",
  },
  {
    value: "am_liam",
    name: "🇺🇸 Liam (Male)",
  },
  {
    value: "am_michael",
    name: "🇺🇸 Michael (Male)",
  },
  {
    value: "am_onyx",
    name: "🇺🇸 Onyx (Male)",
  },
];

function Voice({ onHandleInputChange }) {
  const [selectedVoice, setSelectedVoice] = useState();
  return (
    <div>
      <h2 className="mt-5">Video Voice</h2>
      <p className=" text-sm text-gray-400 mb-2">Select voice for your video</p>
      <ScrollArea className="h-[150px] w-full">
        <div className="grid grid-cols-2 gap-3">
          {voiceOptions?.map((voice, i) => (
            <h2
              key={i}
              className={`${selectedVoice == voice.name && "border"} text-sm cursor-pointer p-3 dark:bg-slate-900 dark:border-white rounded-lg hover:border`}
              onClick={() => {
                setSelectedVoice(voice.name);
                onHandleInputChange("voice", voice.value);
              }}
            >
              {voice.name}
            </h2>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Voice;
