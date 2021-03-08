const resolvers = {
    Query: {
        searchProduct: () => {
            return [
                {
                    id: "ed3d9a4e-e02c-4fcd-bfb4-003d6e766cf8",
                    title: "Капецитабин",
                    fullTitle: "Кселода",
                    vendors: [
                        {
                            id: "b60cd925-0047-4959-8e4c-d48bd688f00f",
                            title:
                                "Ф.Хоффманн-Ля Рош Лтд (Швейцария), произведено Хоффманн-Ля Рош Инк США",
                        },
                    ],
                },
            ];
        },
    },
};

module.exports = resolvers;
