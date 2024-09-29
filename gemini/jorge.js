require('dotenv').config({ path: '.env' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("Outside");
console.log("API Key:", process.env.GEMINI_API_KEY);

async function run(params, prompt) {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    if (prompt === "") {
        prompt = "Essay on achieving financial literacy via AI.";
    }
    
    console.log("Processing prompt:", prompt);
    
    try {
        const result = await model.generateContent(prompt);
        const resultText = result.response.text();
        console.log("Generated Content:", resultText);
        
        return resultText;
    } catch (error) {
        console.error("Error generating content:", error);
    }
}


module.exports = { run };