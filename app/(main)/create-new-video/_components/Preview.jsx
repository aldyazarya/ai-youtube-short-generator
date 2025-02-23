import React from "react";
import { options } from "./VideoStytle";
import Image from "next/image";

function Preview({ formData }) {
  const selectedVideoStyle =
    formData && options.find((item) => item?.name == formData?.videoStyle);

  return (
    <div className=" relative">
        <h2 className=" mb-4 font-bold text-xl">Preview</h2>
      <Image
        src={selectedVideoStyle?.image}
        alt={selectedVideoStyle?.name}
        width={1000}
        height={300}
        className="w-full h-[66vh] rounded-lg object-cover"
      />
      <h2
        className={`${formData?.caption?.style} absolute bottom-8 text-center w-full`}
      >
        {formData?.caption?.name}
      </h2>
    </div>
  );
}

export default Preview;
