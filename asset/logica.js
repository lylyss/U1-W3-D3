document.addEventListener("DOMContentLoaded", () => {
  const Input = document.getElementById("Input");
  const aggiungiButton = document.getElementById("aggiungiButton");
  const Lista = document.getElementById("Lista");

  aggiungiButton.addEventListener("click", () => {
    const taskText = Input.value.trim();
    if (taskText === " ") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "-X-";
    deleteButton.classList.add("delete-btn");

    listItem.appendChild(deleteButton);
    Lista.appendChild(listItem);
    Input.value = " ";

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completo");
    });

    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      Lista.removeChild(listItem);
    });
  });
});
