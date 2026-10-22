// render_index.js
$(function () {
  setTimeout(() => {
    window.alert("Вас поймали ;)");
  }, 3000);

  //Navigate//
  $("#go-index").on("click", function () {
    window.location.href = "index.html";
  });
});
