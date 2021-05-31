const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});

const Car = sequelize.define('Car', {
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bigImg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'cars',
  timestamps: false,
});

const Parameter = sequelize.define('Parameter', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'parameters',
  timestamps: false,
});

const Brand = sequelize.define('Brand', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'brands',
  timestamps: false,
});

const Model = sequelize.define('Model', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'models',
  timestamps: false,
});

Brand.hasMany(Model);
Model.belongsTo(Brand);

Brand.hasMany(Car);
Car.belongsTo(Brand);

Model.hasMany(Car);
Car.belongsTo(Model);

Car.hasMany(Parameter);
Parameter.belongsTo(Car);

module.exports = sequelize;
