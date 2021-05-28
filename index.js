const express = require("express");
const fs = require("fs");
const cors = require("cors");
const db = require("./db/cars.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send(fs.readFileSync("./html/index.html", "utf8"));
});

app.get("/cars", (req, res) => {
  const cars = db.getCars();
  const isModelProvided = req.query && req.query.model;
  const isBrandProvided = req.query && req.query.brand;

  res.send(
    cars.filter(({ brand, model }) => {
      if (!isBrandProvided && !isModelProvided) {
        return true;
      }
      if (isBrandProvided && !isModelProvided) {
        return brand === req.query.brand;
      }
      if (isBrandProvided && isModelProvided) {
        return brand === req.query.brand && model === req.query.model;
      }
      return false;
    })
  );
});

app.get("/cars/:id", (req, res) => {
  const carId = req.params.id;
  const car = db.getCar(carId);
  if (!car) {
    res.status(404).send(`Авто с id "${req.params.id}" не найден`);
  }
  res.send(car);
});

app.get("/brands", (req, res) => {
  res.send(db.getBrands());
});

app.get("/models/:brand", (req, res) => {
  const brand = req.params.brand;
  const models = db.getModels(brand);
  if (models.length === 0) {
    res.status(404).send(`Моделей для бренда "${brand}" не найдено`);
  }
  res.send(models);
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
