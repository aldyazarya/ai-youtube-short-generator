const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const generateScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a two different script for 30 seconds video on Topic:Kids Story,\nGive me response in JSON format and follow the schema\n{\nscripts: [\n{\ncontent:''\n}\n]\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"(SCENE START)\\n\\n[SCENE START]\\n\\nVISUAL: A brightly colored animated illustration of a small, curious-looking caterpillar munching on a bright green leaf.\\n\\nNARRATOR (Warm, friendly voice): Once upon a time, in a lush green garden, lived a tiny caterpillar named Pip.\\n\\nVISUAL: Pip wriggles excitedly on the leaf.\\n\\nNARRATOR: Pip loved to eat! He munched and crunched all day long. (Sound of exaggerated crunching)\\n\\nVISUAL: The leaf is almost completely gone. Pip looks plump and sleepy.\\n\\nNARRATOR: One day, Pip felt very tired. He spun a cozy little cocoon around himself.\\n\\nVISUAL: Animation shows Pip inside the cocoon. Time lapse effect as days pass with changing light.\\n\\nNARRATOR: He slept for a long, long time. And when he woke up...\\n\\nVISUAL: The cocoon cracks open, and a beautiful butterfly emerges.\\n\\nNARRATOR: ...Pip was a beautiful butterfly! He fluttered his wings and flew off to explore the garden.\\n\\nVISUAL: Butterfly flying through the garden. Upbeat, gentle music plays. Company logo appears subtly in a corner.\\n\\nNARRATOR: The End.\\n\\n(SCENE END)\"\n    },\n    {\n      \"content\": \"(SCENE START)\\n\\nVISUAL: Open on a live-action shot of a child (5-7 years old) holding a picture book open. The book shows a simple drawing of a friendly monster.\\n\\nCHILD (Enthusiastically): Let me tell you about Monster Mike!\\n\\nVISUAL: Transition to animated version of the Monster Mike character from the book. He waves cheerfully.\\n\\nCHILD (V.O., as if narrating the book): Monster Mike loved to play hide-and-seek. But he was terrible at hiding!\\n\\nVISUAL: Monster Mike tries to hide behind a very thin tree. His large, colorful feet are clearly visible.\\n\\nSOUND: Comical hiding/rustling sounds.\\n\\nCHILD (V.O.): Everyone could always see his big, orange feet!\\n\\nVISUAL: Other animated animal characters giggle and point playfully at Monster Mike's feet.\\n\\nCHILD (V.O.): But Monster Mike didn't mind. He just loved to laugh and have fun!\\n\\nVISUAL: Monster Mike joins in the laughter. The animal characters and Monster Mike are all smiling.\\n\\nVISUAL: Returns to the child holding the book. Child smiles at the camera.\\n\\nCHILD: Isn't Monster Mike funny? \\n\\nVISUAL: Text overlay: \"[Company Name] - Making Storytime Fun!\"\\n\\n(SCENE END)\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
