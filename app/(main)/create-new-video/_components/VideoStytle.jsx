import Image from "next/image";
import React, { useState } from "react";

export const options = [
  {
    name: "Realistic",
    image: "/video-image-style/realistic.webp",
  },
  {
    name: "Cinematic",
    image: "/video-image-style/cinematic.webp",
  },
  {
    name: "Cartoon",
    image: "/video-image-style/3d.webp",
  },
  {
    name: "Watercolor",
    image: "/video-image-style/watercolor.webp",
  },
  {
    name: "Cyberpunk",
    image: "/video-image-style/cyberpunk.webp",
  },
  {
    name: "GTA",
    image: "/video-image-style/gta.webp",
  },
  {
    name: "Anime",
    image: "/video-image-style/anim.webp",
  },
];

function VideoStytle({ onHandleInputChange }) {
  const [selectedStyle, setSelectedStyle] = useState();

  return (
    <div className=" mt-5">
      <h2>Video Styles</h2>
      <p className=" text-sm text-gray-400 mb-1">Select video style</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        {options?.map((option, i) => (
          <div
            key={i}
            className="relative"
            onClick={() => {
              setSelectedStyle(option.name);
              onHandleInputChange("videoStyle", option.name);
            }}
          >
            <Image
              src={option.image}
              alt={option.name}
              width={500}
              height={120}
              className={`object-cover h-[90px] lg:h-[130px] xl:h-[180px] rounded-lg p-1 hover:border border-gray-300 cursor-pointer ${option.name == selectedStyle && "border"}`}
            />
            <h2 className=" text-sm font-medium absolute bottom-1 text-center w-full">
              {option.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoStytle;
