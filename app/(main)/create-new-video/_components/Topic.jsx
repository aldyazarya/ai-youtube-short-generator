"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import axios from "axios";

const suggestions = [
  "Historic Story",
  "Kids Story",
  "Movie Stories",
  "AI Innovations",
  "Space Mysteries",
  "Horror Stories",
  "Mythological Tales",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Adventures",
  "Science Experiments",
  "Motivational Stories",
];

function Topic({ onHandleInputChange }) {
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedScriptIndex, setSelectedScriptIndex] = useState();
  const [scripts, setScripts] = useState();

  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    setLoading(true);
    setSelectedScriptIndex(null);
    try {
      const result = await axios.post("/api/generate-script", {
        topic: selectedTopic,
      });

      console.log("====================================");
      console.log(result.data);
      console.log("====================================");

      setScripts(result.data?.scripts);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className=" mb-1">Project Title</h2>
      <Input
        placeholder="Enter project Title"
        onChange={(event) => onHandleInputChange("title", event.target.value)}
      />
      <div className="mt-5">
        <h2>Video Topic</h2>
        <p className=" text-sm text-gray-600">Select topic for your video</p>
        <Tabs defaultValue="suggestion" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestion">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestion">
            <div className=" ">
              {suggestions.map((sugg, i) => (
                <Button
                  variant="outline"
                  key={i}
                  className={`m-1 ${sugg === selectedTopic && "bg-secondary"}`}
                  onClick={() => {
                    setSelectedTopic(sugg);
                    onHandleInputChange("topic", sugg);
                  }}
                >
                  {sugg}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <div>
              <h2 className=" mb-1">Enter your own topic</h2>
              <Textarea
                placeholder="Enter your topic"
                onChange={(event) =>
                  onHandleInputChange("topic", event.target.value)
                }
              />
            </div>
          </TabsContent>
        </Tabs>

        {scripts?.length > 0 && (
          <div className=" mt-3">
            <h2>Select the Script</h2>
            <div className="grid grid-cols-2 gap-5 mt-1">
              {scripts?.map((item, i) => (
                <div
                  key={i}
                  className={`p-3 border rounded-lg mt-3 cursor-pointer ${selectedScriptIndex == i && "border-white bg-secondary"}`}
                  onClick={() => setSelectedScriptIndex(i)}
                >
                  <h2 className=" line-clamp-4 text-sm text-gray-300">
                    {item.content}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {!scripts && (
        <Button
          disabled={loading}
          className="mt-3"
          size="sm"
          onClick={generateScript}
        >
          {loading ? (
            <Loader2Icon className=" animate-spin" />
          ) : (
            <SparkleIcon />
          )}
          Generate Script
        </Button>
      )}
    </div>
  );
}

export default Topic;
