"use client";
import React, { useState } from "react";
import Topic from "./_components/Topic";
import VideoStytle from "./_components/VideoStytle";
import Voice from "./_components/Voice";
import Captions from "./_components/Captions";
import { WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Preview from "./_components/Preview";

function CreateNewVideo() {
  const [formData, setFormData] = useState();

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  console.log("formData", formData);

  return (
    <div>
      <h2 className="text-3xl font-medium">Create New Video</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 mt-8 gap-7">
        <div className=" col-span-2 p-7 border rounded-xl h-[72vh] overflow-auto">
          {/* Topic & Script */}
          <Topic onHandleInputChange={onHandleInputChange} />
          {/* Video Image Style */}
          <VideoStytle onHandleInputChange={onHandleInputChange} />
          {/* Voice */}
          <Voice onHandleInputChange={onHandleInputChange} />
          {/* Captions */}
          <Captions onHandleInputChange={onHandleInputChange} />

          <Button className="w-full mt-5">
            <WandSparkles />
            Generate Video
          </Button>
        </div>
        <div>

          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
