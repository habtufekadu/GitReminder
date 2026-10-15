// 1. Find the container
const container = document.querySelector("#commands-container");

// 2. Loop through each command
for (const cmd of gitCommands) {

  // 3. Make the command safe for HTML
  const safeCommand = cmd.command
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 4. Build the card HTML
  const cardHTML = `
    <div class="command-card">
      <span class="command-category">${cmd.category}</span>
      <code class="command-text">${safeCommand}</code>
      <p class="command-description">${cmd.description}</p>
    </div>
  `;

  // 5. Add the card to the container
  container.innerHTML += cardHTML;
}