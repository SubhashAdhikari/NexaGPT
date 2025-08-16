import "dotenv/config";
import fetch from "node-fetch";

const testOpenAI = async () => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: "Hello!" }]
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        console.log("Full response:", data); // <--- check the full response
        if (data.choices && data.choices.length > 0) {
            console.log("Reply:", data.choices[0].message.content);
        } else {
            console.log("No choices returned from OpenAI.");
        }
    } catch (err) {
        console.error("Error calling OpenAI API:", err);
    }
};

testOpenAI();
