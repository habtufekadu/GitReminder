// 1. Find the container and the search box
const container = document.querySelector("#commands-container");
const searchInput = document.querySelector("#search-input");

// 2. This function displays commands that match a search term
function displayCommands(searchTerm) {

  // Clear whatever is currently shown
  container.innerHTML = "";

  // Loop through each command
  for (const cmd of gitCommands) {

    // Check if this command matches the search term
    const matchesCommand = cmd.command.toLowerCase().includes(searchTerm);
    const matchesDescription = cmd.description.toLowerCase().includes(searchTerm);
    const matchesCategory = cmd.category.toLowerCase().includes(searchTerm);

    // If any of them match, show the card
    if (matchesCommand || matchesDescription || matchesCategory) {

      // Make the command safe for HTML
      const safeCommand = cmd.command
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // Build the card HTML
      const cardHTML = `
        <div class="command-card">
          <span class="command-category">${cmd.category}</span>
          <code class="command-text">${safeCommand}</code>
          <p class="command-description">${cmd.description}</p>
        </div>
      `;

      // Add the card to the container
      container.innerHTML += cardHTML;
    }
  }
}

// 3. Show all commands when the page loads
displayCommands("");

// 4. Re-run the display every time the user types
searchInput.addEventListener("input", function () {
  const term = searchInput.value.toLowerCase();
  displayCommands(term);
});