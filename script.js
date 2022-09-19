document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.fa-bars').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('toggled');
    console.log('ssss');
  })
})

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
