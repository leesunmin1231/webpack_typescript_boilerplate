import express from "express";
import { api } from "./api.js";
class App {
  app;

  constructor() {
    this.app = express();
  }
}

const app = new App().app;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

api(app);

app.listen(process.env.PORT || 8080, function () {
  console.log("Express server listening...");
});
