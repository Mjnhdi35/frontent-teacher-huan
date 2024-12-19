const features = document.querySelector(".container-features");
let index = 0;
function moveFeatures() {
  index++;
  const totalProducts = document.querySelectorAll(".products").length;
  if (index >= totalProducts) {
    index = 0;
  }
  const translateX = -index * 90;
  features.style.transform = `translateX(${translateX}%)`;
}
setInterval(moveFeatures, 3000);
