require('dotenv').config({ path: './config/shell' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("Outside");
console.log("API Key:", shell.env.GEMINI_API_KEY);
console.log("All environment variables:", shell.env);


async function run(params) {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(shell.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Define the prompt
    const prompt = "Essay on achieving financial literacy via AI.";
    
    console.log("First problem");
    
    try {
        const result = await model.generateContent(prompt);
        console.log("Generated Content:", result.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

run();
