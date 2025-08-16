import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function testOpenAI() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "hi" }],
    });

    console.log("Full response:", response);

    if (response.choices && response.choices.length > 0) {
      console.log("Message from OpenAI:", response.choices[0].message.content);
    } else {
      console.log("No choices returned from OpenAI.");
    }
  } catch (err) {
    console.error("Error from OpenAI:", err);
  }
}

testOpenAI();
