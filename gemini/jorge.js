require('dotenv').config({ path: '.env' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("Outside");
console.log("API Key:", process.env.GEMINI_API_KEY);

async function run(params, prompt) {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const defaultInstruction = "Please respond to the following prompt in a polite and formal manner, as if you where a financial guru for young minorities who need heavy guidance. :";

    if (prompt === "") {
        prompt = "Essay on achieving financial literacy via AI.";
    }

    console.log("Processing prompt:", prompt);

    try {
        const result = await model.generateContent(defaultInstruction + prompt);
        const resultText = result.response.text();
        console.log("Generated Content:", resultText);

        return resultText;
    } catch (error) {
        console.error("Error generating content:", error);
    }
}


module.exports = { run };