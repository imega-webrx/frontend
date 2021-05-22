const products = [
    {
        id: "1",
        title: "Капецитабин",
        price: "150",
    },
    {
        id: "2",
        title: "Валидол",
        price: "200",
    },
    {
        id: "3",
        title: "Валивсех",
        price: "50",
    },
];
// данные и поля еще добавлю сюда
const resolvers = {
    Query: {
        product(parent, args, context, info) {
            return products.filter(
                (product) =>
                    args.title.length > 2 &&
                    product.title
                        .toLowerCase()
                        .indexOf(args.title.toLowerCase()) > -1
            );
        },
    },
};

module.exports = resolvers;
