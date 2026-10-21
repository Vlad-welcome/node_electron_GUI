document.getElementById("add").addEventListener("click", () => {
  const input = document.getElementById("new-todo");
  const todoText = input.value.trim();

  if (todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;
    // Удаление задачи по клику
    li.addEventListener("click", () => li.remove());

    document.getElementById("todos").appendChild(li);
    input.value = "";
  }
});
