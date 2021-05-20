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
                            title: "Ф.Хоффманн-Ля Рош Лтд (Швейцария), произведено Хоффманн-Ля Рош Инк США",
                        },
                    ],
                },
                {
                    code: "ed3d9a4e-e02c-4fcd-bfb4-003d56m456n4",
                    name: "Валидол",
                    fullTitle: "Сердце",
                    vendors: [
                        {
                            id: "b60cd925-0047-4959-8e4c-d48sdf87sdf7",
                            title: "Где-то в Росссии",
                        },
                    ],
                },
            ];
        },
    },
};

module.exports = resolvers;
