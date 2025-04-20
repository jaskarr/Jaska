function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() !== "") {
    // Foydalanuvchi xabari
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = input.value;
    chatBox.appendChild(userMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";

    // Bot javobi 1 soniyadan keyin
    setTimeout(() => {
      const botReply = document.createElement("div");
      botReply.className = "message bot";
      botReply.innerText =
        "Assalomu alaykum! Men operator Shahlo bo‘laman. Ayni damda bizning operatorlarimiz band. Iltimos, kuting — sizga tez orada aloqaga chiqamiz. Hurmat bilan Jasur Studio jamoasi.";
      chatBox.appendChild(botReply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}