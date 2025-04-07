function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const toggleButton = document.getElementById('chatbot-toggle');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'flex';
        toggleButton.style.display = 'none';
    } else {
        chatbot.style.display = 'none';
        toggleButton.style.display = 'block';
    }
}

function sendMessage(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chatbot-input');
        const messages = document.getElementById('chatbot-messages');
        const userMessage = input.value.trim();
        if (userMessage) {
            // Add user message
            const userMessageElement = document.createElement('div');
            userMessageElement.textContent = userMessage;
            userMessageElement.className = 'user-message';
            messages.appendChild(userMessageElement);

            // Add bot response
            const botMessageElement = document.createElement('div');
            botMessageElement.textContent = "Thank you for your message! We'll get back to you soon.";
            botMessageElement.className = 'bot-message';
            messages.appendChild(botMessageElement);

            // Clear input and scroll to the bottom
            input.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    }
}