const cars = [
    {
        id: 1,
        brand: 'Audi',
        model: 'A1',
        img: 'audi-a1.jpeg',
        bigImg: 'audi-a1-big.jpg',
        price: 30000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
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
        id: 2,
        brand: 'Audi',
        model: 'A8',
        img: 'audi-a8.jpeg',
        bigImg: 'audi-a1-big.jpg',
        price: 40000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
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
        id: 3,
        brand: 'Audi',
        model: 'Q7',
        img: 'audi-q7.jpeg',
        bigImg: 'audi-a1-big.jpg',
        price: 60000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
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
        id: 4,
        brand: 'BMW',
        model: 'e60',
        img: 'bmw-e60.jpg',
        bigImg: 'audi-a1-big.jpg',
        price: 50000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
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
        id: 5,
        brand: 'BMW',
        model: 'x5',
        img: 'bmw-x5.jpg',
        bigImg: 'audi-a1-big.jpg',
        price: 40000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
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
        brand: 'Skoda',
        model: 'Fabia',
        img: 'skoda-fabia.jpeg',
        bigImg: 'audi-a1-big.jpg',
        price: 40000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
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
        id: 7,
        brand: 'Skoda',
        model: 'Octavia',
        img: 'skoda-octavia.jpeg',
        bigImg: 'audi-a1-big.jpg',
        price: 30000,
        description: 'Достойный авто по доступной цене. Приятный разгон и хорошая шумоизоляция.',
        parameters: [
            {
                name: 'Максимальная скорость',
                value: '260 км/ч'
            }, {
                name: 'Вес',
                value: '1200кг'
            }, {
                name: 'Привод',
                value: 'Полный'
            }, {
                name: 'Цвет',
                value: 'Серый'
            }, {
                name: 'Модельный год',
                value: '2020'
            }
        ],
    },
];

const brands = Array.from(new Set(cars.map(car => car.brand)));

module.exports = {
    cars,
    brands
}