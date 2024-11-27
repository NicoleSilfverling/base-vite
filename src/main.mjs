import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import products from "./modules/products.mjs";

const productsContainer = document.querySelector("#productsContainer");
products.forEach((product) => {
  productsContainer.innerHTML += `
    <div>
      <h1>${product.name}</h1>
      <h4>${product.age}</h4>
       <img src="${product.img.src}" class="logo vanilla" alt="JavaScript logo" />
    </div>
  `;
});

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
