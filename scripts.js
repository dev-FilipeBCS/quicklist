document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const itemInput = document.getElementById("itemInput");
  const itemsContainer = document.getElementById("items");
  const WarningMsg = document.querySelector(".warning-msg");
  const closeWarningBtn = document.getElementById("close");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload

    const itemText = itemInput.value.trim();

    addItemToList(itemText);
    itemInput.value = ""; // Clear input field
  });

  function addItemToList(text) {
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("item-wrapper");

    itemWrapper.innerHTML = `
      <div class="item-background"></div>
      <img src="assets/checked.svg" alt="ícone de check">
      <input type="checkbox">
      <div class="item-text">${text}</div>
      <button class="delete">
        <img class="trash" src="assets/trash.svg" alt="Excluir">
      </button>
    `;

    itemsContainer.appendChild(itemWrapper);

    // Ensure delete works when clicking the button
    const deleteButton = itemWrapper.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      itemWrapper.remove();
      showWarningMsg();
    });
  }

  function showWarningMsg() {
    WarningMsg.classList.add("show"); // Add class to display the Warning message
  }

  // Close button functionality
  closeWarningBtn.addEventListener("click", function () {
    WarningMsg.classList.remove("show");
  });
});
