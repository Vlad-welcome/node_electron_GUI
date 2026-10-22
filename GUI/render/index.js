// render_index.js
$(function () {
  $("#add").on("click", function () {
    const $input = $("#new-todo");
    const todoText = $input.val().trim();

    if (todoText) {
      const $li = $("<li>")
        .addClass("list-group-item list-group-item-action")
        .css("cursor", "pointer")
        .text(todoText);

      $li.on("click", function () {
        $(this).remove();
      });

      $("#todos").append($li);
      $input.val("").trigger("focus");
    }
  });

  // Enter тоже добавляет задачу — удобно
  $("#new-todo").on("keypress", function (e) {
    if (e.which === 13) $("#add").trigger("click");
  });

  //Navigate//
  $("#go-second").on("click", function () {
    window.location.href = "second.html";
  });
});
