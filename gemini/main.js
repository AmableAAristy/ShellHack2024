require('dotenv').config({ path: '../config/process' });

 console.log("Got");

 async function run(params) {
     console.log("to");
     console.log("this");
     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
     console.log("part");
     const prompt = "Essay on achieving financial literacy via AI.";
     console.log("of");
     const result = await model.generateContent(prompt);
     const response = await model.
     console.log("the");
     console.log(result.response.text());
     console.log("project");
     console.log("?");
 }

 run();

