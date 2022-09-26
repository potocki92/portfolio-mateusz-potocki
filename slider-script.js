VanillaTilt.init(document.querySelector(".slider"), {
  max: 5,
  speed: 800,
  scale: 1.0,
});

const slider = document.querySelector(".slider");
const sliderImageWrapper = document.querySelector(".slider .slider__wrapper");
const sliderHandle = document.querySelector(".slider .slider__handle");

slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {
  if (isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if (mouseX < 0) mouseX = 0;
  else if (mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImageWrapper.style.width = `${(
    (1 - mouseX / sliderWidth) *
    100
  ).toFixed(4)}%`;
  sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
    4
  )}% - ${sliderHandleWidth / 2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touched", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
  if (isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if (!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if (isSliderLocked) isSliderLocked = false;
}

// buttons after - before

const image_input_before = document.querySelector("#before__file");

var upload_image_before = "";

image_input_before.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upload_image_before = reader.result;
    document.querySelector("#before__image").src = upload_image_before;
  });
  reader.readAsDataURL(this.files[0]);
});

const image_input_after = document.querySelector("#after__file");

var upload_image_after = "";

image_input_after.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upload_image_after = reader.result;
    document.querySelector("#after__image").src = upload_image_after;
  });
  reader.readAsDataURL(this.files[0]);
});
