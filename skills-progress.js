$(".skills__outer").each(function () {
  $(this)
    .find(".skills__inner")
    .animate(
      {
        width: $(this).attr("data-percent"),
      },
      2500
    );
});
