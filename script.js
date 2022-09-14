// switch color between screen position

$(function () {
  $(window).scroll(function () {
    var top = window.scrollY;
    if (top >= 100) {
      $("a").css("color", "black");
      $("li").css("border", "1px solid black");
      $(".logo__header a").css("border", "1px solid black");
    } else {
      $("a").css("color", "white");
      $("li").css("border", "1px solid white");
      $(".logo__header a").css("border", "1px solid white");
    }
  });
});

// smooth scroll - jQuery

$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});