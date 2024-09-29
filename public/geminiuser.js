const submitButton = document.getElementById("submitButton");
const userInput = document.getElementById("textinput");
const inputHistoryDiv = document.getElementById("input-history");

submitButton.addEventListener("click", async function(event) {
    event.preventDefault();
    
    const prompt = userInput.value;  // Get the user's input

    // Create and append the user's prompt to the input history
    const userPromptDiv = document.createElement("div");
    userPromptDiv.textContent = "User: " + prompt;
    userPromptDiv.classList.add("user-message");  // Add a class for styling
    inputHistoryDiv.appendChild(userPromptDiv);
    
    // Clear the input field after submission
    userInput.value = ""; 

    try {
        const response = await fetch('/gemini', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Generated content:', data);

            
            const aiResponseDiv = document.createElement("div");
            aiResponseDiv.textContent = "\nAI: " + data + "\n";  
            aiResponseDiv.classList.add("ai-response");  
            inputHistoryDiv.appendChild(aiResponseDiv);

        } else {
            const errorDiv = document.createElement("div");
            errorDiv.textContent = "Error generating content.";
            errorDiv.classList.add("error-message");  
            inputHistoryDiv.appendChild(errorDiv);
        }
    } catch (error) {
        const errorDiv = document.createElement("div");
        errorDiv.textContent = "Error: " + error.message;
        errorDiv.classList.add("error-message");  
        inputHistoryDiv.appendChild(errorDiv);
    }
});
