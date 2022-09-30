// initialize wow.js
new WOW().init();

// animate burger button

const elem = document.querySelector(".burger__background"),
  body = document.querySelector("body"),
  toggleBtn = document.querySelector(".burger__icon"),
  elemH = elem.getBoundingClientRect().height,
  elemW = elem.getBoundingClientRect().width;

let open = false;
let scale, offsetX, offsetY;

const calculateValues = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const offsetValue = Number(
    getComputedStyle(elem).getPropertyValue("--offset-value")
  );

  offsetX = w / 2 - elemW / 2 - offsetValue;
  offsetY = h / 2 - elemH / 2 - offsetValue;

  const radius = Math.sqrt(h ** 2 + w ** 2);
  scale = radius / (elemW / 2) / 2 + 0.1;
  return scale;
};

const openMenu = () => {
  elem.style.setProperty("--translate-x", `-${offsetX}px`);
  elem.style.setProperty("--translate-y", `${offsetY}px`);
  elem.style.setProperty("--scale", scale);
};
const closeMenu = () => {
  elem.style.setProperty("--scale", 1);
  elem.style.setProperty("--translate-x", 0);
  elem.style.setProperty("--translate-y", 0);
};
const animateMenu = () => {
  open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
  open = !open;
  animateMenu();
  body.classList.toggle("shown");
};

const resizeHandler = () => {
  window.requestAnimationFrame(() => {
    calculateValues();
    animateMenu();
  });
};

calculateValues();

// create "shown" class into body
// hide or visible "header__links" <a> if "shown" class is exist
var headerLink = document.querySelector(".header__link");
toggleBtn.addEventListener("click", function () {
  body.classList.toggle("shown");
  if (body.classList.contains("shown")) {
    headerLink.style.visibility = "visible";
    openMenu();
  } else {
    headerLink.style.visibility = "hidden";
    closeMenu();
  }
});

//toggleBtn.onclick = toggleMenu;
//  toggleBtn.addEventListener('click', toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);

// smooth scroll
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    // after click the link menu button is hidden and body class "shown" is remove
    closeMenu();
    body.classList.remove("shown");

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// typing animation

$(document).ready(function () {
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 50);
    };
  })(jQuery);

  $("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");
});
