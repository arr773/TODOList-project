var li = $("li");
var span = $("span");
var input = $("input[type='text']");
var ul = $("ul");

ul.on("click", "li", function () {
  if ($(this).hasClass("checked")) {
    $(this).removeClass("checked");
  } else {
    $(this).addClass("checked");
  }
});

// ul.on(
//   {
//     mouseenter: function () {
//       $(this).children().text("x");
//     },
//     mouseleave: function () {
//       $(this).children().text("");
//     },
//   },
//   "li"
// );

ul.on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      this.remove();
    });
  event.stopPropagation();
});

input.on("keypress", function (event) {
  if (event.which === 13) {
    var add = $(this).val();
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + add + "</li>"
    );
    $(this).val() = "";
  }
});

$(".fa-plus").on("click", function () {
  input.fadeToggle(100);
});
