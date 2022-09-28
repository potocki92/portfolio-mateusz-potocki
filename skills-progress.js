// skills progression animation

// if .skills__outer is visible on screen, then animation is start .
// animation is started once. if you wanna see this again (or you missed), you need to restar the page.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
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
    }
  });
});

// tell the observer which elements to track
observer.observe(document.querySelector(".skills__outer"));