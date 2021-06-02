const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require('body-parser');
const { Parameter, Brand, Car, Model, sequelize } = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(fs.readFileSync("./html/index.html", "utf8"));
});

app.get("/brands", async (req, res) => {
  res.send(await Brand.findAll());
});

app.get("/models/:brandId", async (req, res) => {
  const models = await Model.findAll({
    where: {
      BrandId: req.params.brandId
    },
    attributes: ['id', 'name']
  })
  res.send(models);
});

// cars
app.get("/cars", async (req, res) => {
  let where = {};
  if(req.query && req.query.BrandId) where.BrandId = req.query.BrandId;
  if(req.query && req.query.ModelId) where.ModelId = req.query.ModelId;

  res.send(await Car.findAll({
    where,
    include: [
      {
        model: Brand,
      },
      {
        model: Model,
        attributes: ['id', 'name'],
      },
    ],
    attributes: ['id', 'img', 'bigImg', 'description', 'price'],
  }))
})

app.get("/cars/:carId", async (req, res) => {
  const carId = req.params.carId;
  const car = await Car.findOne({
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
  Car.create(req.body)
    .then(response => res.send(response))
    .catch(error => res.status(400).send({ status: 400, message: 'В запросе ошибка', error }));
})

app.delete("/cars/:carId", async (req, res) => {
  const carId = req.params.carId;
  Car.destroy({
    where: {
      id: carId
    }
  })
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.sendStatus(400)
    });
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
