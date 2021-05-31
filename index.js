const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require('body-parser');

const sequelize = require("./db");
const { response } = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(fs.readFileSync("./html/index.html", "utf8"));
});

app.get("/brands", async (req, res) => {
  res.send(await sequelize.models.Brand.findAll());
});

app.get("/models/:brand", async (req, res) => {
  const brand = req.params.brand;
  const models = await sequelize.models.Model.findAll({
    where: {
      BrandId: brand
    }
  })
  res.send(models);
});

// cars
app.get("/cars", async (req, res) => {
  let where = {};
  if(req.query && req.query.brand) where.BrandId = req.query.brand;
  if(req.query && req.query.model) where.ModelId = req.query.model;

  res.send(await sequelize.models.Car.findAll({
    where,
    include: [
      {
        model: sequelize.models.Brand,
      },
      {
        model: sequelize.models.Model,
        attributes: ['id', 'name'],
      },
      {
        model: sequelize.models.Parameter,
        attributes: ['id', 'name', 'value'],
      },
    ],
    attributes: ['id', 'img', 'bigImg', 'description', 'price'],
  }))
})

app.get("/cars/:id", async (req, res) => {
  const carId = req.params.id;
  const car = await sequelize.models.Car.findOne({
    where: {
      id: carId,
    },
    include: [
      {
        model: sequelize.models.Brand,
      },
      {
        model: sequelize.models.Model,
        attributes: ['id', 'name'],
      },
      {
        model: sequelize.models.Parameter,
        attributes: ['id', 'name', 'value'],
      },
    ],
    attributes: ['id', 'img', 'bigImg', 'description', 'price'],
  })
  if (!car) {
    res.status(404).send(`Авто с id "${req.params.id}" не найден`);
  }
  res.send(car);
});

app.post("/cars", async (req, res) => {
  sequelize.models.Car.create(req.body)
    .then(response => res.send(response))
    .catch(error => res.status(400).send({ status: 400, message: 'В запросе ошибка', error }));
})

app.listen(port, async () => {
  console.log(`Server started on ${port}`);
  sequelize.sync();
  try {
    await sequelize.authenticate();
    console.log('DB connection has been established successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
