const cars = [
    {
        id: 1,
        brand: 'Audi',
        model: 'A1',
        img: 'audi-a1-1.jpeg',
        bigImg: 'audi-a1-1-big.jpeg',
        price: 30000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1250кг'
            }, {
                name: 'Привод',
                value: 'Передний'
            }, {
                name: 'Цвет',
                value: 'Синий'
            }, {
                name: 'Модельный год',
                value: '2020'
            }
        ],
    },
    {
        id: 2,
        brand: 'Audi',
        model: 'A1',
        img: 'audi-a1-2.jpeg',
        bigImg: 'audi-a1-2-big.jpeg',
        price: 30000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '230 км/ч'
            }, {
                name: 'Вес',
                value: '1100кг'
            }, {
                name: 'Привод',
                value: 'Передний'
            }, {
                name: 'Цвет',
                value: 'Серый'
            }, {
                name: 'Модельный год',
                value: '2019'
            }
        ],
    },
    {
        id: 3,
        brand: 'Audi',
        model: 'A8',
        img: 'audi-a8-1.jpeg',
        bigImg: 'audi-a8-1-big.jpeg',
        price: 40000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '300 км/ч'
            }, {
                name: 'Вес',
                value: '1800кг'
            }, {
                name: 'Привод',
                value: 'Полный'
            }, {
                name: 'Цвет',
                value: 'Серый'
            }, {
                name: 'Модельный год',
                value: '2019'
            }
        ],
    },
    {
        id: 4,
        brand: 'Audi',
        model: 'Q7',
        img: 'audi-q7-1.jpeg',
        bigImg: 'audi-q7-1-big.jpeg',
        price: 60000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '280 км/ч'
            }, {
                name: 'Вес',
                value: '2000кг'
            }, {
                name: 'Привод',
                value: 'Полный'
            }, {
                name: 'Цвет',
                value: 'Серебристый'
            }, {
                name: 'Модельный год',
                value: '2019'
            }
        ],
    },
    {
        id: 5,
        brand: 'BMW',
        model: 'e60',
        img: 'bmw-e60-1.jpeg',
        bigImg: 'bmw-e60-1-big.jpeg',
        price: 50000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '360 км/ч'
            }, {
                name: 'Вес',
                value: '1700кг'
            }, {
                name: 'Привод',
                value: 'Задний'
            }, {
                name: 'Цвет',
                value: 'Серый'
            }, {
                name: 'Модельный год',
                value: '2020'
            }
        ],
    },
    {
        id: 6,
        brand: 'BMW',
        model: 'x5',
        img: 'bmw-x5-1.jpeg',
        bigImg: 'bmw-x5-1-big.jpeg',
        price: 40000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '300 км/ч'
            }, {
                name: 'Вес',
                value: '2100кг'
            }, {
                name: 'Привод',
                value: 'Полный'
            }, {
                name: 'Цвет',
                value: 'Черный'
            }, {
                name: 'Модельный год',
                value: '2020'
            }
        ],
    },
    {
        id: 7,
        brand: 'Skoda',
        model: 'Fabia',
        img: 'skoda-fabia-1.jpeg',
        bigImg: 'skoda-fabia-1-big.jpeg',
        price: 40000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '210 км/ч'
            }, {
                name: 'Вес',
                value: '1000кг'
            }, {
                name: 'Привод',
                value: 'Передний'
            }, {
                name: 'Цвет',
                value: 'Красный'
            }, {
                name: 'Модельный год',
                value: '2010'
            }
        ],
    },
    {
        id: 8,
        brand: 'Skoda',
        model: 'Octavia',
        img: 'skoda-octavia-1.jpeg',
        bigImg: 'skoda-octavia-1-big.jpeg',
        price: 30000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '230 км/ч'
            }, {
                name: 'Вес',
                value: '1800кг'
            }, {
                name: 'Привод',
                value: 'Передний'
            }, {
                name: 'Цвет',
                value: 'Красный'
            }, {
                name: 'Модельный год',
                value: '2018'
            }
        ],
    },
    {
        id: 9,
        brand: 'Mitsubishi',
        model: 'Lancer',
        img: 'mitsu-lancer-1.jpeg',
        bigImg: 'mitsu-lancer-1-big.jpeg',
        price: 45000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1600кг'
            }, {
                name: 'Привод',
                value: 'Передний'
            }, {
                name: 'Цвет',
                value: 'Белый'
            }, {
                name: 'Модельный год',
                value: '2011'
            }
        ],
    },
    {
        id: 10,
        brand: 'Mitsubishi',
        model: 'Pajero',
        img: 'mitsu-pajero-1.jpeg',
        bigImg: 'mitsu-pajero-1-big.jpeg',
        price: 45000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '180 км/ч'
            }, {
                name: 'Вес',
                value: '2200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
            }, {
                name: 'Цвет',
                value: 'Серый'
            }, {
                name: 'Модельный год',
                value: '2016'
            }
        ],
    },
    {
        id: 11,
        brand: 'Mitsubishi',
        model: 'Pajero',
        img: 'mitsu-pajero-2.jpeg',
        bigImg: 'mitsu-pajero-2-big.jpeg',
        price: 45000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '160 км/ч'
            }, {
                name: 'Вес',
                value: '2400кг'
            }, {
                name: 'Привод',
                value: 'Полный'
            }, {
                name: 'Цвет',
                value: 'Белый'
            }, {
                name: 'Модельный год',
                value: '2010'
            }
        ],
    },
    {
        id: 12,
        brand: 'Volvo',
        model: 's60',
        img: 'volvo-s60-1.jpeg',
        bigImg: 'volvo-s60-1-big.jpeg',
        price: 45000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '220 км/ч'
            }, {
                name: 'Вес',
                value: '1900кг'
            }, {
                name: 'Привод',
                value: 'Передний'
            }, {
                name: 'Цвет',
                value: 'Вишневый'
            }, {
                name: 'Модельный год',
                value: '2019'
            }
        ],
    },
    {
        id: 13,
        brand: 'Volvo',
        model: 'xc90',
        img: 'volvo-xc90-1.jpeg',
        bigImg: 'volvo-xc90-1-big.jpeg',
        price: 50000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '240 км/ч'
            }, {
                name: 'Вес',
                value: '2000кг'
            }, {
                name: 'Привод',
                value: 'Полный'
            }, {
                name: 'Цвет',
                value: 'Черный'
            }, {
                name: 'Модельный год',
                value: '2020'
            }
        ],
    },
];

const getCars = () => cars.map(({parameters, bigImg, ...car}) => car);

const getBrands = () => Array.from(new Set(cars.map(car => car.brand)));

const getCar = (id) => cars.find(car => car.id === Number(id));

const getModels = (brand) => Array.from(new Set(cars.filter(car => car.brand === brand).map(car => car.model)))

module.exports = {
    getCars,
    getBrands,
    getCar,
    getModels,
}