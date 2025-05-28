export async function initCarousel() {
  const response = await fetch("data/carousel.json");
  const carouselItem = await response.json();

  const items = carouselItem.map(
    (item) => `
      <div class="carousel__image">
              <img src=${item.image} alt="фото квартири" />
            </div>
    `
  );

  let currentImageIndex = 0;

  const carouselContainer = document.querySelector(".carousel__container");
  if (!carouselContainer) return;

  function renderImage() {
    carouselContainer.innerHTML = items[currentImageIndex];
  }

  function prevImage() {
    currentImageIndex =
      currentImageIndex - 1 < 0 ? items.length - 1 : currentImageIndex - 1;
    renderImage();
  }
  function nextImage() {
    currentImageIndex =
      currentImageIndex + 1 > items.length - 1 ? 0 : currentImageIndex + 1;
    renderImage();
  }

  const leftBtn = document
    .querySelector(".left")
    .addEventListener("click", prevImage);
  const rightBtn = document
    .querySelector(".right")
    .addEventListener("click", nextImage);

  renderImage();
}
