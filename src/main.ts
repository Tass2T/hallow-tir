import { Application } from "pixi.js";

const app = new Application();

await app.init({
  background: "#1099bb",
  resolution: Math.max(window.devicePixelRatio, 2),
});

document.body.appendChild(app.canvas);
