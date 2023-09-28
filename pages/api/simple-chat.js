import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

export default async (req, res) => {  

  if (req.body.prompt !== undefined) {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
    });

    res.status(200).json({ text: `${completion.data.choices[0].text}` });
  } else {
    res.status(400).json({ text: "No prompt provided." });
  }
};
  