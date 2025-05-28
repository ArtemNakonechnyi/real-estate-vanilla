let allItems = [];

export async function renderItems() {
  const rentContainer = document.getElementById("rent");
  if (!rentContainer) return;

  const res = await fetch("data/data.json");
  if (!res.ok) throw new Error("failed to fetch data");

  allItems = await res.json();

  filterAndRender();
}

function filterAndRender() {
  const rentContainer = document.getElementById("rent");
  const searchValue = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const roomValue = document.getElementById("roomFilter").value;

  const filteredItems = allItems.filter((item) => {
    let cityMatch = true;
    let roomMatch = true;

    if (searchValue !== "") {
      cityMatch = item.city.toLowerCase().includes(searchValue);
    }

    if (roomValue !== "all") {
      roomMatch = item.rooms.toString() === roomValue;
    }
    return cityMatch && roomMatch;
  });

  // Очищаем и рендерим результат
  rentContainer.innerHTML = "";
  filteredItems.forEach((item) => {
    rentContainer.innerHTML += `
      <div class="rent__item">
        <div class="item-image">
          <img src="${item.image}" alt="фото квартири" />
        </div>
        <div class="item-description">
          <div class="description-city">Місто: <span>${item.city}</span></div>
          <div class="description-district">Район: <span>${item.district}</span></div>
          <div class="description-rooms">Кімнати: <span>${item.rooms}</span></div>
          <div class="description-area">Площа: <span>${item.area} м/кв</span></div>
          <div class="description-price">Ціна: <span>${item.price} грн</span></div>
          <div class="description-title">Опис: <span>${item.description}</span></div>
        </div>
      </div>
    `;
  });
}

// Навешиваем обработчики
export function setupFilters() {
  document
    .getElementById("searchInput")
    .addEventListener("input", filterAndRender);
  document
    .getElementById("roomFilter")
    .addEventListener("change", filterAndRender);
}
