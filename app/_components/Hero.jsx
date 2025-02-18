import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <div className=" p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-48">
      <h2 className=" font-bold text-6xl text-center">
        AI Youtube Short Video Generator
      </h2>
      <p className=" mt-4 text-2xl text-center text-gray-500">
        🤖 AI generates scripts, images, and voiceovers in seconds. ⚡️ Create,
        edit,and publish engaging shorts with ease!
      </p>
      <div className="mt-8 flex gap-8">
        <Button size="lg" variant="secondary">
          Explore
        </Button>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  );
}

export default Hero;
