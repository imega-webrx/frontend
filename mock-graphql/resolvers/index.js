const products = [
    {
        id: "1",
        title: "Капецитабин",
        price: "150",
        props: {
            dosage: {
                value: "200",
                notation: "mg"
            },
            valume: {
                value: "500",
                notation: "ml"
            },
            quantity:{
                value: "1",
                notation: "bottle"
            },
            image: "тут либо ссылка либо в base64 изображение либо можно сделать массив изображений"
        },
        manufacturer: "1",
        structure:"Тут состав описан",
        description: "Тут описание",
    },
    {
        id: "2",
        title: "Валидол",
        price: "200",
        props: {
            dosage: {
                value: "200",
                notation: "mg"
            },
            valume: {
                value: "2",
                notation: "g"
            },
            quantity:{
                value: "60",
                notation: "pills"
            },
            image: "тут либо ссылка либо в base64 изображение либо можно сделать массив изображений"
        },
        manufacturerid: "2",
        structure:"Тут состав описан",
        description: "Тут описание",
    },
    {
        id: "3",
        title: "Валивсех",
        price: "50",
        props: {
            dosage: {
                value: "200",
                notation: "mg"
            },
            valume: {
                value: "500",
                notation: "ml"
            },
            quantity:{
                value: "1",
                notation: "bottle"
            },
            image: "тут либо ссылка либо в base64 изображение либо можно сделать массив изображений"
        },
        manufacturerid: "3",
        structure:"Тут состав описан",
        description: "Тут описание",
    },
];

const manufacturers = [
    {
        manufacturerid: "1",
        name: "Производитель 1",
        country: "германия",
    },
    {
        manufacturerid: "2",
        name: "Производитель 2",
        country: "Россия",
    },
    {
        manufacturerid: "3",
        name: "Производитель 3",
        country: "Россия",
    },
]
// данные и поля еще добавлю сюда
const resolvers = {
    Query: {
        manufacturers() {
            return manufacturers;
        }
    },
    Manufacturer: {
        products(parent, args, context, info) {
            return products.filter(
                (product) =>
                    args.title.length > 2 &&
                    product.title
                        .toLowerCase()
                        .indexOf(args.title.toLowerCase()) > -1 &&
                    product.manufacturerid === parent.manufacturerid
            );
        },
    }
};

module.exports = resolvers;
