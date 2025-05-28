// import { initBurgerMenu } from "./burger.js";
// import { renderItems } from "./rent.js";

// initBurgerMenu();
// renderItems();

// import { initBurgerMenu } from "./burger.js";
// import { renderItems, setupFilters } from "./rent.js";

// initBurgerMenu();

// renderItems().then(() => {
//   setupFilters();
// });

import { initCarousel } from "./carousel.js";
import { initBurgerMenu } from "./burger.js";
import { renderItems, setupFilters } from "./rent.js";

initBurgerMenu();
initCarousel();
renderItems();
setupFilters();
